import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData(){
    $.ajax({
      // Use localhost if developing otherwise use the other url for
      // deploying.
      url: "https://allan-portfolio-1e9fe.firebaseapp.com/resumeData.json",
      // url: "http://localhost:3000/resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
  }
  render(){
    return(
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <About data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
