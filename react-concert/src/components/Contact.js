import React from 'react';
import '../contact.css';

class Contact extends React.Component{
  render(){
    return(
      <div className="contact">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <h4>The party is near! Contact us, if you want to book tickets or get the information.</h4>
          <form>
            <div className="formu">
              <label>
                <input type="text" value="Nom" />
              </label>
              <label>
                <input type="text" value="Prénom" />
              </label>
            </div>
            <div className="formu">
              <label>
                <input type="text" value="Nom" />
              </label>
              <label>
                <input type="text" value="Prénom" />
              </label>
            </div>
          </form>
        </div>
        <div className="contact-maps"></div>
      </div>
    )
  }
}

export default Contact;