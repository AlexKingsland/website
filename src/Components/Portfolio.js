import React, { Component } from 'react';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
                    items: [
                        {name: "HedgeHog",
                         date: "February 2020 - Present",
                         title: "AlgoTrading Platform",
                         description1: "Developed a software application that automates investement portfolio trading using a toolbox of pre-built hedging strategies, as well as support for creating custom strategies.",
                         description2: "Application supports storing non real-time live data at a specified resolution to accumulate a historical dataset of security attributes.",
                         description3: "Application supports testing and analyzing any strategy from the toolbox by applying it to the historical data over a given timeframe and monitors specified attributes. Application currently only supports interfacing InteractiveBrokers via their ibapi.",
                         tech_stack: "Python, Numpy, Pandas, CSV, ibapi, Dropbox",
                         image:"../../images/portfolio/hedgehog.png"
                       },
                        {name: "ProFlightPhotography",
                         date: "July 2017 - Present",
                         title: "Drone Photography Start Up",
                         description1: "Founded a Start-Up which provides the service of aerial photography targeting realtors and private car collectors.",
                         description2: "Developed an entrepreneurial mindset as a result of having to learn the basics of how to start a company and how to market myself.",
                         description3: "Brought on an associate and taught them how to operate a drone and professionally represent the company in order to assist me in cold calling clients, and going to various client sites to take photos when I was busy.",
                         tech_stack: "DJI Pro App, DJI Phantom 4 Advanced, Adobe Photoshop, Adobe Lightroom, ibapi, Dropbox",
                         image:"../../images/portfolio/proflightphotos.png"
                       },
                        {name: "StudentHousingBoard",
                         date: "September 2020 - Present",
                         title: "Off-Campus Housing Postboard",
                         description1: "Created a website designed to be a central hub for campus housing to make house hunting easier for university students as final year software capstone project.",
                         description2: "Application supports User accounts and Tenant accounts, an online chat, a custom ranking algorithm to compare room prices based on room prices of rooms with similar attributes stored in the MongoDB.",
                         description3: "Development of this project encompassed the design and implementation of the backend and frontend, and their integration using Restful API's, git was used for source control, MongoDB was used for the database.",
                         tech_stack: "TypeScript, HTML, CSS, JavaScript, Redux, REST API, MongoDB, Docker, Git, VS Code.",
                         image:"../../images/portfolio/mac_housing.png"
                       },
                       {name: "Personal Website",
                         date: "November 2020 - Present",
                         title: "This Website",
                         description1: "Began development of this website after having to do a similar project in a Human Computer Interfaces course where I was taught the concepts of user interface design principles and was inspired to apply them to an application such as this website",
                         description2: "Using the React framework, and some Style Shout components, I designed and created this website to serve as a hub for my entire profile",
                         description3: "The majority of the website data is extracted from an edittable JSON file using JQuery for modularity and ease of editting, the website is hosted using Heroku.",
                         tech_stack: "React, HTML, CSS, JavaScript, JSON, JQuery, Git, Heroku",
                         image:"../../images/portfolio/personal_website.png"
                       }

                    ], 
                    counter: 1000,
                    total_projects: 4
                  };
  }

  next() { this.setState({counter: this.state.counter+1  }); }
  prev() { this.setState({counter: this.state.counter-1  }); }

  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">
            <center>
            <h1 style={{fontSize: "30px"}}>Check Out My Most Recent Projects!</h1>
            </center>
            <div className="two columns">
            <div className="scroll-button">
            <button className="button left" style={{outline: 'none', float: 'left'}} onClick={this.prev.bind(this)}>&#10094;</button>
            </div>
            </div>
            <div className="six columns">
            <div className="row banner">
       
             <div className="banner-text">
                
                <h1>{this.state.items[this.state.counter%this.state.total_projects].name}</h1>
                
                  <p className="info">{this.state.items[this.state.counter%this.state.total_projects].title}<span>&bull;</span> <em className="date">{this.state.items[this.state.counter%this.state.total_projects].date}</em></p>
                  <ul>
                  <li>{this.state.items[this.state.counter%this.state.total_projects].description1}</li>
                  <li>{this.state.items[this.state.counter%this.state.total_projects].description2}</li>
                  <li>{this.state.items[this.state.counter%this.state.total_projects].description3}</li>
                  <li><b>Teck Stack: </b>{this.state.items[this.state.counter%this.state.total_projects].tech_stack}</li>
                  </ul>

                

             </div>

          </div>
          </div>
          <div className="three columns">
          <img className="portfolio-pic" src={this.state.items[this.state.counter%this.state.total_projects].image} alt="Portfolio Picture" />
          </div>
          <div className="one columns">
            <div className="scroll-button">
            <button className="button right" style={{outline: 'none', float: 'right'}} onClick={this.next.bind(this)}>&#10095;</button>
            </div>
          </div>
          <div className="twelve columns">
          <center>
                <h4>Page {this.state.counter%this.state.total_projects+1} of {this.state.total_projects}</h4>
          </center>
          </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
