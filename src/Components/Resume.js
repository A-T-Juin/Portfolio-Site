import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data) {
      var skillDescription = this.props.data.skillDescription;
      var education = this.props.data.education.map(edu => {
        return (
          <div key = {edu.school}className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span></p>
           </div>
        </div>
      )
      });
      var work = this.props.data.work.map(function(job) {
        return <div key = {job.company} className="row item">
           <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">{job.title} <span>&bull;</span> <em className="date">{job.years}</em></p>
              <p>
                {job.description}
              </p>
           </div>
        </div>
      });
      var skills = this.props.data.skills.map(function(skill) {
        return (
          <h4
            style={{
              padding: '0 2.5%',
              width: '33%'
            }}
          >
            {skill.name}
          </h4>
        )
      })
    }
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
               {education}
            </div>
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              {work}
            </div>
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div
              className="nine columns main-col"
              style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
              }}
            >
              {skills}
            </div>
         </div>
      </section>
    );
  }
}

export default Resume;
