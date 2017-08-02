import React, { Component } from 'react';
import Header  from './components/Header'
import  Api from './components/Api'

class App extends Component {




  render() {

    return (
      <div className="App">
      	<Header/>
      

      <Api/>     	

      </div>
    );
  }
}

export default App;
