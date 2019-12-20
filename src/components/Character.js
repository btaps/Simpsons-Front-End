import React, { Component } from 'react'
import More from './More.js'
import './Character.css'
import UpdateForm from './UpdateForm'

class Character extends Component {

  state = {
    isActive: false,
    formStyle:{
        display:'none',
    }
   }

  handleMore = () =>{
    this.setState({ isActive: true })
  }

  handleHide = () =>{
    this.setState({ isActive: false })
  }
  

  deleteCharacter = ()=>{
    this.props.deleteCharacter(this.props.character.rowid)
    alert(`Deleted: ${this.props.character.first_name}`)
  }
  
  toggleBodyForm = () => {
    this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: { display: 'none' } })
        : this.setState({ formStyle: { display: 'block' } })
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
			   <UpdateForm {...this.props.character} toggleBodyForm={this.toggleBodyForm} updateCharacter={this.props.updateCharacter}/>
			  <button onClick={this.showUpdateForm} type="button" class="btn btn-outline-success" > Edit!</button>
		      </div>
		    )
                  :  this.props.character.first_name === undefined
		        ? ''
		        : (
			  <div>
			  <button onClick={this.handleMore} type="button" class="btn btn-outline-warning" > More About {this.props.character.first_name}!</button>
		          <button onClick={this.deleteCharacter} type="button" class="btn btn-outline-danger" > Delete!</button>
			  </div>	  
		          )
		       
                  }
             </div>
    )
  }
}

export default Character
