import React, { Component } from 'react';

class Header extends Component {
  render() {
    if(this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
    }
    return (
      <section id="header">
      <header src="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li>
                 <a className="smoothscroll" href="#header">Home</a>
               </li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#social">Social</a></li>
             </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hey, I'm {name}.</h1>
               <h3>I am a Los Angeles based <span>{occupation}</span> {description}</h3>
               <hr />
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
      </section>
    );
  }
}

export default Header;
