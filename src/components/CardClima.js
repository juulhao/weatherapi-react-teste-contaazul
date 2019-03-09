import React, { Component, Fragment } from "react";
import styled from "styled-components";

export default class CardClima extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempColor: '',
			cardAtivo: false,
		}
		this.activeCard = this.activeCard.bind(this)
	}
	verifyTemp(props) {
		if(props <= 5){
			this.setState({tempColor: '#69A3FF'})
		}else if(props >= 5 && props <= 25){
			this.setState({tempColor: '#FF9632'})
		}else if(props >= 25){
			this.setState({tempColor: '#ED1946'})
		}
	}
	componentDidMount(){
		this.verifyTemp(this.props.temperatura)
	}
	activeCard() {
		const currentState = this.state.cardAtivo;
		this.setState({ cardAtivo: !currentState });
		
  };

  render() {
    return (
      <Fragment>
        <Card onClick={() => this.activeCard()}>
          <HeaderCard>{this.props.local}</HeaderCard>
          <Content><span style={{color: this.state.tempColor}}>{this.props.temperatura.toFixed()}</span><span style={{color: this.state.tempColor}}>°</span></Content>
					<FooterCard>
						{this.state.cardAtivo === true ?
							<Column>
								<span>Humidity</span>
								<span>{this.props.humidity}%</span>
							</Column>
						: '' }
						{this.state.cardAtivo === true ?
							<Column>
								<span>Pressure</span>
								<span>{this.props.pressure}<small>hPa</small></span>
							</Column>
						: '' }
						<Row>
							<span>updated: at {this.props.horaAtualizacao}</span>
						</Row>
					</FooterCard>
        </Card>
      </Fragment>
    );
  }
}

const Card = styled.div`
  width: 25%;
  background: #fff;
  min-height: 250px;
  border: 2px solid #ebebeb;
  box-shadow: 10px #33333;
  border-radius: 5px;
  display: flex;
	flex-direction: column;

	@media (max-width: 700px) {
	
		width: 100%;
		flex-direction:column;
		margin-top: 2.5rem;
  }
`;

const HeaderCard = styled.div`
  padding: 0.9em 0;
  color: #737c84;
  font-size: 1.2em;
  font-family: Helvetica, Arial;
  border-bottom: 1px solid #ebebeb;
`;

const Content = styled.div`
  padding: 0.25em 0;
	font-size: 6rem;
	
	span:last-child{
		font-size: 3.5rem;
		position: relative;
    top: -28px;
	}
`;

const FooterCard = styled.div`
	padding: 0.75em 0;
	background: #f8f8f8;
`;

const Column = styled.div`
	width: 50%;
	float:left;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 0.5em;

	span:first-child{
		color: #B4B4B4;
		text-transform: uppercase;
		font-size: 0.85rem;
		font-weight: 500;
		margin-bottom:0.35em;
	}
	span:last-child{
		font-size: 1.2rem;
		color: #737C84;
		font-weight: 500;
	}
	small{
		font-size: 0.85rem;
	}
`
const Row = styled.div`
	width: 100%;
	float:left;

	span {
		color: #B4B4B4;
		font-size: 0.85rem;
		font-weight: 500;
	}
`
