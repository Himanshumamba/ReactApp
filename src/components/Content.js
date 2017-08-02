import React, { Component } from 'react';



class  Content extends Component {

  render() {

     const ulColor = {

    textDecorationLine : 'none'

     }

     const li = {
        listStyle :'none'
     }


    return (
      <div className="posts" >
      <ul  style = {li}>
              <li  >{this.props.componentData.id}</li>
  			 <li>{this.props.componentData.body}</li>
             <li>{this.props.componentData.title}</li>
      </ul>
      </div>
    );
  }
}

export default Content;
