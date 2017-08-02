import React,{ Component } from 'react';
import Content  from './Content'

class  Api extends Component {
   constructor() {
      super();
		
      this.state = {
         data:[]
      }

   }

   render() {
      const data  = this.state.data;
      return (
         <div>
            <div>

               <button onClick={this.handleSubmit.bind(this)} className="button success">Fetch the data+</button>
               {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
}

handleSubmit(e) {

   e.preventDefault();


   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(res=> res.json())
    .then(json=> {

      this.setState({

        data : json

      });


    });  

      

   


   }
}



export default Api;