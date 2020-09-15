// navbar component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-solid-svg-icons';

=======
>>>>>>> e933f3de718a7da8ab4d312a376fea378cd64b65

export default class Footer extends Component {

  render() {
    return (
    <div className="container-fluid">
     <div className="row footer1">
        <div className="col-sm-12 col-lg-6 text-center footer">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <p className="h4 text-white font-weight-bold touch mt-5">Sign up for our Newsletter</p>
                    <p className="text-white mt-3">Get to know updates in the field of mechanized agriculture and know how often our tractors are hired.</p>
                </div>
            </div>
         </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer">
        <form className="m-3 home-newsletter" onSubmit={this.onSubmit}>
            <div className="single">
            <p className="h4 text-white touch mt-5 newsLetterEmail">Your Email</p>
            <input className="newsLetter" type="text"  placeholder="example@email.com" />
<<<<<<< HEAD
             <FontAwesomeIcon icon={['fab', 'envelope"']} />
=======
>>>>>>> e933f3de718a7da8ab4d312a376fea378cd64b65
                <button type="submit" className="btn btn-theme">Subscribe<i className="fa fa-envelope"></i></button>
            </div>   
        </form>
        <div className="row mt-4 text-white">
            <div className="col-6">
            <p className="font-weight-bold">Quick links</p>
<<<<<<< HEAD
            <Link to="/contact-us">
                <p className="text-white">Contact Us </p>
            </Link> 
            <Link to="/about">
                <p className="text-white">About Us</p>
            </Link> 
            <Link to="/terms-and-conditions">
                <p className="text-white">Terms and Condition</p>
            </Link> 
            <Link to="/privacy-policy">
                <p className="text-white">Privacy Policy</p>
            </Link> 
=======
            <Link to="">
                <p className="text-white">Contact Us </p>
            </Link> 
            <Link to="">
                <p className="text-white">About Us</p>
            </Link> 
            <Link to="">
                <p className="text-white">Terms and Condition</p>
            </Link> 
>>>>>>> e933f3de718a7da8ab4d312a376fea378cd64b65
            </div>
            
            <div className="col-6">
            <p className="font-weight-bold">Social media</p>
            <Link to="">
                <p className="text-white">Facebook</p>
            </Link> 
            <Link to="">
                <p className="text-white">Twitter</p>
            </Link> 
            <Link to="">
                <p className="text-white">Linkedin</p>
            </Link> 
            </div>

        </div>
        </div>
       
    </div>
    <div className="row text-center bg-success">
            <div className="col-12 text-center">
            <p className=" text-white font-weight-bold mt-3 "> Copyright &copy; 2020 | Tractive Nigeria</p>
            </div>
        </div> 
</div>

    )
  }
}