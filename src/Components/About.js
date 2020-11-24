import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data) {
      var name = this.props.data.name;
      var image = "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
         <div className="row">
          <div className="nine columns main-col">
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
   						      <span>{name}</span><br />
                    <span>{email}</span>
                  </div>
                  <div className="columns download">
                    <p>
                      <a href={process.env.PUBLIC_URL + '/Tham, Allan - Resume.pdf'} className="button" download>
                        <i className="fa fa-download" />
                        Download Resume
                      </a>
                    </p>
                  </div>
                </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
