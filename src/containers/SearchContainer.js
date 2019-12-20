import React, {Component} from 'react'
import Character from '../components/Character'
import SimpsonsModel from '../models/SimpsonsModel'
import './SearchContainer.css'

class SearchContainer extends Component {
  state = {
    search: '',
    characters: [],
    singleCharacter: {},
    placesOfInterest: [],
    voiceActor: ''
  }
    
  componentDidMount(){
    this.fetchAll()
  }
  
  fetchAll = () => {
    SimpsonsModel.all()
	  .then(characters => this.setState({characters: characters}))
  }

  onSubmit = (e)=> {
    let searchString = this.state.search.trim()
    e.preventDefault()
    fetch(`http://localhost:9000/api/characters/${searchString}`)
		  .then(res => res.json())
		  .then(data => this.setState({singleCharacter: {
		                                      first_name: data[0].first_name,
			                              last_name: data[0].last_name,
			                              occupation: data[0].title,
			                              catch_phrase: data[0].catch_phrase,
			                              age_range: data[0].age_range,
		                              }
		  }))
	          .catch(err => console.log('Could not get single character from search string', err))
    
    fetch(`http://localhost:9000/api/characters/place_of_interest/${searchString}`)
	          .then(res => res.json())
		  .then(data => this.setState({placesOfInterest: data}))
	          .catch(err => console.log('Could not get array of places of interest', err))
  
    fetch(`http://localhost:9000/api/voiced_by_actors/${searchString}`)
	          .then(res => res.json())
		  .then(data => this.setState({voiceActor: data[0].name}))
	          .catch(err => console.log('Could not get voiced by actore from search string', err))
  }
  
  
  onChange = (e)=> {
      this.setState({search: e.target.value})
  }

  render(){
	//  console.log(this.state.singleCharacter)
    return(
        <div className="SearchContainer">  
	       <div className='button'>
                  <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
			<input className="searchBar form-control mr-sm-2" onChange={this.onChange} type="text" placeholder="Search By Simpson Name!" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
	      </div>
	      {
	        this.state.singleCharacter !== undefined
		? <Character character={this.state.singleCharacter} voiceActor={this.state.voiceActor} placesOfInterest={this.state.placesOfInterest}/>
	        : (alert(`No characters found with the name ${this.state.search}! Try searching with first letter capitalized. Ex: 'Bart'`), 
			this.setState({singleCharacter: []}))
	      }
	     
      </div>
    )
  }
  
}

export default SearchContainer
