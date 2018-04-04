import React from'react';
import { Redirect } from 'react-router';

class AddPhotos extends React.Component{
  constructor(){
    super();

    this.state = {
      picture: {value: undefined, isValid: true, message: ''},
      redirect: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.state({ redirect: true });
  }

  render(){
    return(
      <div className="add-photos">
        <div className="banner">
          <p className="banner-text">
            We'd like to get to know you better.
            Tell us about yourself and the sort of someone you'd like to meet.
            Don't worry, no one will see this besides the matchmakers at Tawkify.
          </p>
        </div>
        <div className="progress-tracker">
          <div className="dot">1</div>
          <div className="dot">2</div>
          <div className="dot">3</div>
        </div>
        <div className="header">
          <h3>Upload recent photos of yourself</h3>
          <p>
            We ask that you upload at least 2 pictures of yourself; but upload as many as you'd like. We encourage
            you to review your pictures periodically to make sure they are up to date. Snapshots and Selfies just
            fine here. Remember this image is for our internal use and will not be shared with potential matches –
            you will also be able to swap it out later if you wish.
          </p>
        </div>
        <div className="drag-drop">
          <div className="drag-drop-text">
            Drag and drop a photo
          </div>
        </div>
        <button className="choose-file-button">CHOOSE FILE</button>
        <div className="pic-reqs">Your pictures must be 4 megabytes or smaller. If you have problems, please contact us1l 1 (646) 791-3283</div>
        <div className="form-submit">
          <input type="submit" value="SAVE AND CONTINUE"/>
        </div>
      </div>
    );
  }
}

export default AddPhotos;