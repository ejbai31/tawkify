import React from 'react';

class About extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="about">
        <h2>Tell us a bit about yourself</h2>
        <p>
          Tell us a bit about yourself and who you'd like to meet. 
          The more we know, the better.
          Be candid--this info is for our eyes only. 
          Tawkify profiles and photos will forever be 100%  condifential. 
        </p>
        <form className="about-form">
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </form>
      </div>
    );
  }
}