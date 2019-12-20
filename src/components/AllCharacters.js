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

  createCharacter = (fName, lastID, occupID, catchPhrase, ageRange )=>{
	  
    SimpsonsModel.create({
        first_name: fName,
        last_nameID: lastID,
        occupationID: occupID,
        catch_phrase: catchPhrase,
        age_range: ageRange,
          })
    alert('Character Created!')
  }

  updateCharacter = (id, fName, lastID, occupID, catchPhrase, ageRange ) => {
    SimpsonsModel.update({
	                rowid: id,
			first_name: fName,
			last_nameID: lastID,
			occupationID: occupID,
			catch_phrase: catchPhrase,
			age_range: ageRange,                   
                    })
		 .then(data => {
		    console.log("HI")
		    this.setState({ characters: data })
	    })
		.catch(err => console.log(err))
  }

  deleteCharacter = (id) => {
     SimpsonsModel.delete(id)
          .then(data => {
	    let characters = this.state.characters.filter(deleted => {
	      return id !== deleted.rowid
	    })
	   this.setState({ characters })
	  })  
  }

/*
  updateCharacter = character=> {
    const isUpdatedCharacter = c=> {
      return character.first_name === c.first_name
    }
  
    SimpsonsModel.update(character)
		  .then(data => {
		      
		  })

  }
  */
  fetchAll = () => {
	  console.log('working')
    SimpsonsModel.all()
          .then(characters => {
		  console.log(characters)
		  this.setState({characters: characters})
	  })
  }
    
  allCharacters = ()=>{
	    let characters = this.state.characters.map((character, index) => {
	                       return <Character 
		                        reloadComponent={this.fetchAll} 
		                        character={character} 
		                        key={character.rowid}
			                updateCharacter = {this.updateCharacter}
				        createCharacter = {this.createCharacter}
		                        deleteCharacter = {this.deleteCharacter}
		                      />
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
