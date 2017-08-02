import React, { Component } from 'react';
import axios from 'axios';


class  Header extends Component {

  render() {


    return (
      <div className = "header" >
		<nav className="navbar navbar-inverse">
   		<div className="container-fluid">
   	   <div className="navbar-header">
      <a className="navbar-brand" href="#">Himanshu </a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <form className="navbar-form navbar-left">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
</nav>

		</div>      
    );
  }
}

export default Header;
