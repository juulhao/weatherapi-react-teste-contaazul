import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CardClima from './components/CardClima';
import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.adapter = httpAdapter

describe('Api Requests', () => {
    it('shoud return UBIRICI api data', () => {
      nock('https://api.openweathermap.org/data/2.5/weather?q=Urubici,br&lastupdate&units=metric&appid=70acf4cf4b42e2b7865ebf21575dc257')
        .get('/')
        .reply(200, 'Carregado')
    })
    it('shoud return NUUK api data', () => {
      nock('https://api.openweathermap.org/data/2.5/weather?q=nuuk,gl&units=metric&appid=70acf4cf4b42e2b7865ebf21575dc257')
        .get('/')
        .reply(200, 'Carregado')
    })
    it('shoud return NAIROBI api data', () => {
      nock('https://api.openweathermap.org/data/2.5/weather?q=nairobi,ke&units=metric&appid=70acf4cf4b42e2b7865ebf21575dc257')
        .get('/')
        .reply(200, 'Carregado')
    })
})

describe('CardClima Component', () => {

  it('should renders has expected props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CardClima />)).toBe(false)
  });

})

