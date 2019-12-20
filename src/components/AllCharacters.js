import React from 'react'
import SimpsonsModel from '../models/SimpsonsModel'
import './AllCharacters.css'
import Character from './Character.js'

class AllCharacters extends React.Component {

  state = {
    characters: [],
  }
	
  componentDidMount(){
    this.fetchAll()
  }

  fetchAll = () => {
    SimpsonsModel.all()
          .then(characters => this.setState({characters: characters}))
  }
    
  allCharacters = ()=>{
	    let characters = this.state.characters.map(character => {
	                       return <Character character={character}/>
	                     })
	   return characters   
  }


  render(){
    return(
        <div>
		{this.allCharacters()}
	</div>
    )
  }
}  

export default AllCharacters 
