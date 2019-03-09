import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import styled from "styled-components";

import api from './utils/api';
import CardClima from './components/CardClima';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      cidades: []
    }
  }
  refreshData() {
    setInterval(() => {
      this.setState({ loading: true }, () => {
        api.getNairobi().then(response => {
          this.setState(({cidades}) => ({
            loading: false,
            cidades: [
              ...cidades.slice(0,1),
              {
                ...cidades[1],
                name: response.name,
              },
              ...cidades.slice(2)
            ]
          })
          );
        })
        api.getUbirici().then(response => {
          this.setState(({cidades}) => ({
            loading: false,
            cidades: [
              ...cidades.slice(0,1),
              {
                ...cidades[1],
                name: response.name,
              },
              ...cidades.slice(2)
            ]
          })
          );
        })
        api.getNuuk().then(response => {
          this.setState(({cidades}) => ({
            loading: false,
            cidades: [
              ...cidades.slice(0,1),
              {
                ...cidades[1],
                name: response.name,
              },
              ...cidades.slice(2)
            ]
          })
          );
        })
      });
    }, 100000)
  }
  componentDidMount() {
    this.setState({ loading: true }, () => {
      api.getNairobi().then(response => {
        this.setState({ 
          loading: false,
          cidades: [...this.state.cidades, response]}
          )
      })
      api.getUbirici().then(response => {
        this.setState({ 
          loading: false,
          cidades: [...this.state.cidades, response]}
          )
      })
      api.getNuuk().then(response => {
        this.setState({ 
          loading: false,
          cidades: [...this.state.cidades, response]}
          )
      })
      
      console.log('State atual,:', this.state.cidades)
    });
    localStorage.setItem('cidades_cache', JSON.stringify(this.state.cidades));
    this.refreshData()
  }
 
  render() {
    const { loading, cidades } = this.state
    return (
      <div className="app">
        <Header />
        <Container>
          {
            loading ? <Loading/> : 
            cidades.map((cidades, i) => 
            <CardClima
                key={i}
                local={cidades.name}
                temperatura={cidades.main.temp}
                humidity={cidades.main.humidity}
                pressure={cidades.main.pressure}
                horaAtualizacao={new Date().toLocaleString()}
                card_name={cidades.name}
              /> 
            )
          }
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15em;

	@media (max-width: 700px) {
    flex-direction:column;
    padding: 0;
    padding: 2.5rem;
  }
`;

const HeaderStyle = styled.div`

  background: #fff;
  text-align: center;
  width:100%;
  padding: 1em 0 1em;

  ${ Header } img{
    width: 10%;
  }
  @media (max-width: 700px) {
    ${ Header } {
      position: fixed;
      z-index: 1;
    }
    ${ Header } img{
      width: 50%;
    }
  }

`;

const Header = () => (
  <HeaderStyle>
    <img src={require('./assets/images/logo.svg')} alt="logo" />
  </HeaderStyle>
) 

const Loading = () => <img  src={require('./assets/images/loader.svg')} alt="Carregando dados" />;

export default App;
