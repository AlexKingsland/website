import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio1 = this.props.data.bio.statement1;
      var bio2 = this.props.data.bio.statement2;
      var bio3 = this.props.data.bio.statement3;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = "downloads/"+this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">       
         <div className="four columns">
            <img className="profile-pic"  src={profilepic} alt="Alex Kingsland Profile Pic" />
         </div>
         <div className="eight columns main-col">
            <h2>About Me</h2>

            <p>{bio1}<text style={{color: "white"}}>finance</text> and <text style={{color: "white"}}>automotive</text> sector.</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>	{city}, {state}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>View Resume</a>
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
