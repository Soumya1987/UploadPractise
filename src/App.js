import React, { Component } from 'react';
import Container from './component/Container.js';
// import  './css/style.css';

class App extends Component{

	helloworld = ()=>{
		return(
			<h1>Hello world</h1>
			);
	}

   render(){
   	  let text = this.helloworld();
      return(
         <div>
          <Container></Container>
         </div>
      );
   }
}
export default App;
