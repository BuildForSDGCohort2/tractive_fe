import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import "./JoinUsPage.css";

export default class JoinUs extends Component {
  render() {
    return (
            <div className="mb-5">
            <section className="hero_contact">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white font-weight-bold mt-5">
                <h1 className="mt-5 display-3"> Will you like to be part of what we do?</h1>
                    <h3 className="display-2 text-success mt-5">Join Us</h3> 
                </div>
                </div>
            </div>
            </section>
            <div className="mt-5 ">
                <p className="h1 text-success contact-formHeader font-weight-bold">Get results. Join us today</p>
                <p className="h4 text-success contact-formHeader font-weight-bold">You will never regret it.</p>
            </div>
        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-4">
             <NavLink to="/farmer-register">
                      <button className="btn btn-success btn-large joinbtn">Farmers</button>
            </NavLink> 
            <img className="m-3" src="/images/farmyJoin.png" alt="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
            <NavLink to="/owner-register">
                      <button className="btn btn-success btn-large fleetjoinbtn">Fleet Owners</button>
            </NavLink> 
            <img className="m-3" src="/images/tractyJoin.png" alt="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
            <NavLink to="/agent-register">
                      <button className="btn btn-success btn-large joinbtn">Agents</button>
            </NavLink> 
                    <img className="m-3" src="/images/youthJoin.png" alt="" />
            </div>
        </div>
        <hr/>
        <div>
           <p className="h3">Already have an account ?</p>
            <span className="ml-2 h2"><a className="text-success" href="/login">Login</a></span>
        </div>


        </div>
    );
  }
}