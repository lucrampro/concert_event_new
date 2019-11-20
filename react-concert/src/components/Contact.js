import React from 'react';
import '../contact.css';

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {modifyOn : false, txt: props.txt}
  }
  mofifElement(){
    this.setState({modifyOn : true})
  }
  handlerChange(event){
    console.log(event.target.value);
    this.setState({txt : event.target.value})
  }
  render(){
    return(
      <div className="contact">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <h4>The party is near! Contact us, if you want to book tickets or get the information.</h4>
          <form>
            <div className="formu">
              <label>
                <input type="text" value={this.state.txt}  onChange={this.handlerChange.bind(this)}/>
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
            <button type="submit">SEND</button>
          </form>
          <div className="contact-info">
            <div className="info-text">
              <h3>Adresse</h3>
              <p>200 N. Spring Street Los Angeles CA 90012</p>
            </div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>8-800-472-193-283</p>
            </div>
          </div>
          <div className="info-text move">
            <h3>Email</h3>
            <p>concert-event@gmail.com</p>
          </div>
        </div>
        <div className="contact-maps"></div>
      </div>
    )
  }
}
Contact.defaultProps = {
  txt : 'Nom'
}

export default Contact;