import React, { Component } from 'react'
import More from './More.js'
import './Character.css'

class Character extends Component {

  state = {
    isActive: false,
  }

  handleMore = () =>{
    this.setState({ isActive: true })
  }

  handleHide = () =>{
    this.setState({ isActive: false })
  }


  render(){
    return(
              <div className='allCharacters'>
		 <div className={this.props.character.first_name}> </div> 
		 <h4> {this.props.character.first_name} </h4>
                  {  this.state.isActive
		  ? (  <div>
		         <More character={this.props.character}/>
		         <button onClick={this.handleHide} type="button" class="btn btn-outline-warning" > Show Less!</button>
		      </div>
		    )
                  :  this.props.character.first_name === undefined
		        ? ''
		        : <button onClick={this.handleMore} type="button" class="btn btn-outline-warning" > More About {this.props.character.first_name}!</button>
		       
                  }
             </div>
    )
  }
}

export default Character
