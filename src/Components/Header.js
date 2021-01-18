import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {background: ['url(images/background_pics/_V7A0512.JPG)',
                                `url(images/background_pics/_V7A0793.jpg)`,
                                `url(images/background_pics/laf.jpeg)`,
                                `url(images/background_pics/rolls.jpeg)`,
                                `url(images/background_pics/DJI_0030.jpg)`
                                ],
                  counter: 1000,
                  total_images: 5};
  }

  next() { this.setState({counter: this.state.counter+1  }); }
  prev() { this.setState({counter: this.state.counter-1  }); }

  render() {



    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var resumeDownload = "downloads/Alex_Kingsland_Resume_2020.pdf";
      
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    

    }

  return (
    <header id="home" style={{background: this.state.background[this.state.counter%this.state.total_images]}}>

    <nav id="nav-wrap">

      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

       <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
          <li><a className="smoothscroll" href="#skills">Skills</a></li>
          <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
       </ul>

    </nav>

    <div className="scroll-button">
    <button className="button left" style={{outline: 'none', float: 'left'}} onClick={this.prev.bind(this)}>&#10094;</button>
    </div>
    <div className="row banner">
       
       <div className="banner-text">
          <h3>Hey! My name is</h3>
          <h1 className="responsive-headline">{name}.</h1>
          <h3>I'm a Toronto based <span>{occupation}</span> graduating April 2021.<br/> {description}.</h3>
          <hr /> 
          <ul className="social">
             {networks}
          </ul>
          <center>
          <div className="download">
          <p>
             <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>View Resume</a>
          </p>
          </div>
          </center>
       </div>
    </div>
    <div className="scroll-button">
    <button className="button right" style={{outline: 'none', float: 'right'}} onClick={this.next.bind(this)}>&#10095;</button>
    </div>
    

    
    <p className="scrolldown">
       
       <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
       
    </p>
    

    </header>
    );
  }
}

export default Header;
