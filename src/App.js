import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
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
      // url: "https://asdfvvv.herokuapp.com/resumeData.json",
      url: "http://localhost:3000/resumeData.json",
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