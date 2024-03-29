import React, { Component } from 'react'
import './CreateForm.css'
import SimpsonsModel from '../models/SimpsonsModel'

class CreateForm extends Component {
  
  state = {
	  firstName: '',
	  lastNameID: '',
	  occupationID: '',
	  catchPhrase: '',
	  ageRange: '',
  }

  createChracter = (e) => {

  }

  onFormSubmit = (e)=> {
      e.preventDefault()
     SimpsonsModel.create({
        first_name: this.state.firstName,
        last_nameID: this.state.lastNameID,
        occupationID: this.state.occupationID,
        catch_phrase: this.state.catchPhrase,
        age_range: this.state.ageRange, 
	  })     
     alert('Character Created!')  
    this.setState({
          firstName: '',
          lastNameID: '',
          occupationID: '',
          catchPhrase: '',
          ageRange: '',
    })
  }

  onChange = (e) =>{
	  if(e.target.name === 'first_name') this.setState({ firstName: e.target.value })
	  if(e.target.name === 'last_nameID') this.setState({ lastNameID: e.target.value })
          if(e.target.name === 'occupationID') this.setState({ occupationID: e.target.value })
          if(e.target.name === 'catch_phrase') this.setState({ catchPhrase: e.target.value })
          if(e.target.name === 'age_range') this.setState({ ageRange: e.target.value })
  }


  render(){
    return(
        <form onSubmit={this.onFormSubmit} >
            <label for="first_name">First Name</label>
	    <input type="text" name='first_name' onChange={this.onChange} value={this.state.firstName} placeholder='Ex: Homer' className="form-control text"/>
            <label for="last_nameID">Last Name ID</label>
            <input type="number" name="last_nameID" onChange={this.onChange} value={this.state.lastNameID} placeholder='Ex: 5' className="form-control text"/>
            <label for="occupationID">Occupation ID</label>
            <input type="number" name="occupationID" onChange={this.onChange} value={this.state.occupationID} placeholder='Ex: 5' className="form-control text"/>
            <label for="catch_phrase">Catch Phrase</label>a
            <input type="text" name="catch_phrase" onChange={this.onChange} value={this.state.catchPhrase} placeholder="Ex: Do'h" className="form-control text"/>
            <label for="age_range">Age Range</label>
	    <input type="text" name="age_range" onChange={this.onChange} value={this.state.ageRange} placeholder='Ex: Adult' className="form-control text"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
	</form>
    )
  }
	
}

export default CreateForm
