import React, { Component } from 'react';
import logo from './logo.svg';
import Display from "./components/display";
import Form from "./components/form";
import Weather from "./components/weather";
import './App.css';

class App extends Component {

  state={
    temprature:undefined,
    city: undefined,
    country: undefined,
    humidity:undefined,
    description: undefined,
    error:undefined
  }




getWeather=async (e)=>{
  e.preventDefault();
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const Api_Key="c79ef84cda7d9001b2522476a59a2e5a";
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  
  const response = await api_call.json();
  
console.log(response);

  this.setState({
    temperature: response.main.temp,
    city: response.name,
    country: response.sys.country,
    humidity: response.main.humidity,
    description: response.weather[0].description,
    error: ""
  })
}

  

  render() {
    return (
      <div className="App">
        <Display/>
        <Form loadWeather={this.getWeather}/>
        <Weather  
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}/>
      </div>
    );
  }
}

export default App;
