import React from 'react';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
      fieldsValid: false
    };
  }

  handleUserInput(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault();
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
          <label>YOUR GENDER
            <select value={this.state.value}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>YOU ARE SEEKING
            <select value={this.state.value}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both</option>
            </select>
          </label>
          <label>LOCATION
            <input type="text"/>
          </label>
          <label></label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}