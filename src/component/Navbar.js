import React, {useState}from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "#CDCBD9"
});

const [bttnText, setBttnText] = useState("Enable Dark Mode")

const toggleSwitch=()=>{
  if(myStyle.color=="black"){
    setMyStyle({
      color: "white",
    backgroundColor: "#282424"
    })
    setBttnText("Disable Dark Mode")
    document.body.style.backgroundColor= "grey"
    // document.body.style.color= "white"
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor="#5A5A5A"
    document.getElementById("exampleFormControlTextarea1").style.color="white"
  }
  else{
    setMyStyle({
      color: "black",
    backgroundColor: "#CDCBD9"
    })
    setBttnText("Enable Dark Mode")
    document.body.style.backgroundColor= "white"
    document.body.style.color= "black"
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor="white"
    document.getElementById("exampleFormControlTextarea1").style.color="black"
  }
}
  return (
    <nav className="navbar navbar-expand-lg " style={myStyle}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/" style={myStyle}>
          {props.title}
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active"style={myStyle} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="/" style={myStyle}>
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
           <input className="form-check-input" onClick={toggleSwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label px-2" forHtml="flexSwitchCheckDefault">{bttnText}</label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {title: PropTypes.string, aboutText: PropTypes.string }
Navbar.defaultProps= {
    title: 'set title ere',
    aboutText: 'About Text ere'
}
