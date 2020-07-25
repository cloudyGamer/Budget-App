/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'; 

export default class TemplateComponent extends React.Component {
  componentDidMount() {
  console.log('Template component did mount');
  this.setState({data: "my data has been changed. state will set before rendering and I will be displayed"});
  } 
  
  state = {
       data : "I am a piece of data held in local memory i.e 'state'"
  }
  
        render() {
             //this is render - we may want to manipulate are data here before displaying
             //you don't need to use "this" when referring to variables in render
             const displayedData = this.state.data + "- I was manipulated in render";
        return(<div>
          <p> hey there i am your template component </p>
          <div><p> here is your state data Viv:</p>{displayedData}</div>
            <div><p> here is your passed prop:</p>{this.props.passedProp}</div>
               </div>)
                }  
    
}