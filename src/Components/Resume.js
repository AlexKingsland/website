import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div className="row" key={education.school}>
          <h3>{education.school}</h3>

          <div className="eight columns">
          
          <p className="info" style={{color: "black"}}>{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          
          <ul>
          <li>Achieving a cummulative <b style={{color: "black"}}>{education.gpa}</b> on a 4.0 scale.</li>
          <li>{education.description2}</li>
          <li><b style={{color: "black"}}>Relevant Courses: </b>{education.description3}</li>
          </ul>
          {/**
          <div className="download">
          <center>
          <a href={"downloads/"+education.download} target="_blank" className="button"><i className="fa fa-download"></i>View Transcript</a>
          </center>
          </div>
          **/}
          </div>
          <div className="four columns">  
            <img className="resume-pic"  src={"images/"+education.image} alt="McMaster Logo" />       
          </div>
          
        </div>
        
      })
      var work = this.props.data.work.map(function(work){
        return <div className="row" key={work.company}>
          <h3>{work.company}</h3>
          <div className="eight columns">
            <p className="info" style={{color: "black"}}>{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
            <li>{work.description1}</li>
            <li>{work.description2}</li>
            <li>{work.description3}</li>
            <li><b style={{color: "black"}}>Tech Stack: </b>{work.tech_stack}</li>
            </ul>
            <div className="download">
            <center>
              <a href={"downloads/"+work.download} target="_blank" className="button"><i className="fa fa-download"></i>Employer Reference</a>
            </center>
            </div> 
          </div>
          <div className="four columns">  
            <img className="resume-pic"  src={"images/"+work.image} alt="Workplace Logo" />
                   
          </div>
          
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
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

   </section>
    );
  }
}

export default Resume;
