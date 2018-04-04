import React from 'react';

class About extends React.Component{
  constructor(){
    super();
    this.state = {
      redirect: false, 
      gender: {value: undefined, isValid: true, message:""},
      seeking: {value: undefined, isValid: true, message:""}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleUserInput(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    this.fieldsValid();
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({redirect: true});
  }

  fieldsValid(){
    var state = this.state;
    if(state.gender.value===""){
      state.gender.isValid = false;
      state.gender.message = "This field is required";
      this.setState(state);
    }else{
      state.gender.isValid = true;
      state.gender.message = '';
      this.setState(state);
    }

    if(state.seeking.value===""){
      state.seeking.isValid = false;
      state.seeking.message = "This field is required";
      this.setState(state);
    }else{
      state.seeking.isValid = true;
      state.seeking.message = '';
      this.setState(state);
    }
  }

  onChange(e){
    var state = this.state;
    this.state[e.target.name].value = e.target.value;
    this.setState(state);
    this.fieldsValid;
  }

  render(){
    return(
      <div className="about">
        <div className="banner">
          <p className="banner-text">
            We'd like to get to know you better. 
            Tell us about yourself and the sort of someone you'd like to meet.
            Don't worry, no one will see this besides the matchmakers at Tawkify.
          </p>
        </div>
        <div className="progress-bar"></div>
        <div className="header">
          <h2>Tell us a bit about yourself</h2>
          <p>
            Tell us a bit about yourself and who you'd like to meet. 
            The more we know, the better.
            Be candid--this info is for our eyes only. 
            Tawkify profiles and photos will forever be 100%  condifential. 
          </p>
        </div>
        <form className="about-form" onSubmit={ this.onSubmit }>

          <div className="row">
            <div className="left">
              <label className="fieldHeader">YOUR GENDER</label>
              <select value={this.state.value}>
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            
            </div>
            <div className="right">
              <label className="fieldHeader">YOU ARE SEEKING</label>
              <select value={this.state.value}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left">
            <label className="fieldHeader">LOCATION </label>
              <input type="text"/>        
            </div>
            <div className="right">
              <label className="fieldHeader">YOUR BIRTHDAY</label>
              
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label className="fieldHeader">YOUR HEIGHT</label>
            </div>
            <div className="right">
              <label>Is height a factor in your match preferences?</label>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label className="fieldHeader">Occupation</label>
              <textarea className="textfield"></textarea>
            </div>
            <div className="right">
            <label className="fieldHeader">Income</label>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label>Is income a factor in your match preferences?</label>
            </div>
            <div className="right">
              <label className="fieldHeader">Interests</label>
              <label>
                Tell us a little more about yourself and what you like to do.
                We read everything. So please share.
              </label>
            </div>
          </div>
          <input type="submit" value="SAVE AND CONTINUE" />
        </form>
      </div>
    );
  }
}

export default About;