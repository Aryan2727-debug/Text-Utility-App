import { useState } from "react";
import React from "react";
import "./index.css";

function Textarea(props){

    const [upperText , setUpperText] = useState("");
    const [newUpperText , setNewUpperText] = useState("");

    const [lowerText , setLowerText] = useState("");
    const [newLowerText , setNewLowerText] = useState("");

    const [countWords , setCountWords] = useState("");
    const [newCountWords , setNewCountWords] = useState("");

    var white = "white";
    var none = "none";

    const [bgColor , setBgColor] = useState(white);

    const [space , setSpace] = useState("");
    const [newSpace , setNewSpace] = useState("");


    function upperChange(event){
        setUpperText(event.target.value);
        setLowerText(event.target.value);
        setCountWords(event.target.value);
        setSpace(event.target.value);
        };

    
    function spaceClick(){
        if(space.length == 0){
            alert("Please enter some text!");
        }else{
            var a = space.split(" ").join("");
            setNewSpace(a);
        }
    };

    function upperClick(){
        if(upperText.length == 0){
            alert("Please enter some text!");
        }else{
        setNewUpperText(upperText.toUpperCase());
        
        var redShade = "peachpuff";
        setBgColor(redShade);
        }

    };

    function lowerClick(){
        if(lowerText.length == 0){
            alert("Please enter some text!");
        }else{
        setNewLowerText(lowerText.toLowerCase());

        var redShade = "peachpuff";
        setBgColor(redShade);
        }
    };

    function countClick(){
        if(countWords.length == 0){
            alert("Please enter some text!");
        }else{
        setNewCountWords(countWords.length);

        var redShade = "peachpuff";
        setBgColor(redShade);
        }
    };

    function clearClick(){
        location.reload();
    };

    var lightgray = "lightgray";

    const [color , setColor] = useState(white);
    const [navColor , setNavColor] = useState(lightgray);
    const [btnText , setBtnText] = useState("Enable Dark Mode");

    var black = "black"

    const [jumboColor , setJumboColor] = useState(black);

    function changeMode(){
        var black = "black";
        var dimgray = "dimgray";

        //setJumboColor(white);

        if(color == white){
           setColor(black);
           setNavColor(dimgray);
           setJumboColor(white);
           setBtnText("Enable Light Mode");
        }
        if(color == black){
            setColor(white);
            setNavColor(lightgray);
            setJumboColor(black);
            setBtnText("Enable Dark Mode");
        }
    };

    var darkOrange = "darkorange"

    const [textColor , setTextColor] = useState(darkOrange);
    const [newTextColor , setNewTextColor] = useState(darkOrange);

    var poppins = 'Poppins, sans-serif';

    const [font , setFont] = useState(poppins);

    function fontClick(){
        var fonts = ['Courier' , 'Comic Sans MS' , 'Luminari' , 'Cursive' , 'Bradley Hand' , 'Brush Script' , 'Copperplate' , 'Times New Roman'];
        var random = fonts[Math.floor(Math.random() * fonts.length)];
        setFont(random);
    };

    function colorChange(event){
        setTextColor(event.target.value);
    };

    function colorClick(){
        setNewTextColor(textColor);
    };
    
    var orgFont = "30px";
    const[fontSize , setFontSize] = useState(orgFont);

    function sizeClick(){
        var sizes = ["20px" , "40px" , "35px"];
        var random = sizes[Math.floor(Math.random() * sizes.length)];
        setFontSize(random);
    };

    
    return(
        <>

         <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : navColor}}>
           <a className="navbar-brand" href="#" style={{color : jumboColor}}><b>{props.title}</b></a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
               <a className="nav-link" href="#" style={{color : jumboColor}}><b>{props.homeText}</b><span class="sr-only"></span></a>
               </li> 
             </ul>
           </div>
           <button onClick={changeMode} className="btn btn-dark btn-md mode_button">{btnText}</button>
         </nav>

         

        <div className="main_div" style={{backgroundColor : color}}>
          <input type="text" className="text_input" style={{backgroundColor : bgColor}} placeholder="Enter some text..." onChange={upperChange} value={upperText} x-webkit-speech/>
          <button onClick={upperClick} className="btn btn-danger btn-md upper_button">Convert to Uppercase</button>
          <button onClick={lowerClick} className="btn btn-warning btn-md lower_button">Convert to Lowercase</button>
          <button onClick={countClick} className="btn btn-success btn-md count_button">Count Letters</button>
          <button onClick={clearClick} className="btn btn-primary btn-md clear_button">Clear Text</button>
          
          <h2 className="main_heading" style={{color : newTextColor , fontFamily : font , fontSize : fontSize}}>Your Result is - {newUpperText} {newLowerText} {newCountWords} {newSpace}</h2>
          <input className="color_input" type="color" onChange={colorChange}/>
          <button onClick={colorClick} className="btn btn-danger btn-md color_button">Change Text Color</button>
          <button onClick={fontClick} className="btn btn-md btn-success font_button">Change Font</button>
          <button onClick={sizeClick} className="btn btn-md btn-warning access_button">Change Font Size</button>
          <button onClick={spaceClick} className="btn btn-md space_button btn-dark">Remove Spaces</button>
        </div>

        <div className="jumbotron">
         <h2 style={{color : jumboColor}}>Welcome to TextUtils!</h2>
         <p style={{color : jumboColor}} className="lead">This is a simple Text-Based Utility App. It can transform your text into any form you desire.</p>
         <hr style={{borderColor : jumboColor}} className="my-4"/>
         <p style={{color : jumboColor}}>Just type your text in the box and click the Button to receive the output.</p>
         
        </div>

        <div className="social_section">

        <h2 style={{color : jumboColor}} className="find_heading">Find me at</h2>
        <div className="icons_div">
         <i style={{color : jumboColor}} className="fa-brands fa-facebook"></i>

          &nbsp; &nbsp;

         <i style={{color : jumboColor}} className="fa-brands fa-instagram"></i>

          &nbsp; &nbsp;

         <i style={{color : jumboColor}} className="fab fa-linkedin-in"></i>

         &nbsp; &nbsp;

         <i style={{color : jumboColor}} className="fab fa-slack-hash"></i>

         &nbsp; &nbsp;

         <i style={{color : jumboColor}} className="fab fa-github"></i>

         &nbsp; &nbsp;

         <i style={{color : jumboColor}} className="fab fa-whatsapp"></i>
         </div>

        </div>
            
        <footer className="page-footer font-small blue" style={{backgroundColor : navColor}}>
         <div className="footer-copyright text-center py-3" style={{color : "navy"}}><b>© 2022 Copyright:</b>
         <a href="/" style={{color : "navy"}}>  TextUtils.com</a>
        </div>
        </footer>

        </>
    )
};

export default Textarea;