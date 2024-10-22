import React from "react";
import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
  const typingEffect = {
    overflow: "hidden", 
    borderRight: "0.15em solid black", 
    whiteSpace: "nowrap", 
    margin: "0 auto", 
    letterSpacing: "0.1em",
    animation: "typing 7s steps(40, end) infinite, blink-caret 0.75s step-end infinite",
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={typingEffect}>Welcome to the Index Page</h1>
      </div>

      <div className="mt-4">
        <Link to="/signup" className="btn btn-primary mx-2">
          Sign Up
        </Link>
        <Link to="/signin" className="btn btn-secondary mx-2">
          Sign In
        </Link>
      </div>

      <style>
        {`
          @keyframes typing {
            0% { width: 0 }
            30% { width: 100% } /* Adjust to control how long the full text is displayed */
            70% { width: 100% } /* Keeps the full text displayed */
            100% { width: 0 } /* Goes back to the start */
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: black }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
