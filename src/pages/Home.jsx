import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import "./styles/Home.css";

function Home() {
  function signInWithGoogle() {
    window.open(`${process.env.REACT_APP_API_ENDPOINT}/auth/google`, "_self");
  }

  return (
    <div className="container">
      <Heading />
      <GoogleButton type="dark" onClick={signInWithGoogle} />
      <p className="last-message">To start your reading journey</p>
      <Link className="btn-link" to="/search">
        Start searching books
      </Link>
    </div>
  );
}

export default Home;
