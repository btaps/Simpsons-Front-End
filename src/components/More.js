import React from 'react'

class More extends React.Component{
 
  state = {
    character: {},
    placesOfInterest: [],
    voiceActor: ''
  } 

  componentDidMount(){
    this.getAllInfo()
  }

 getAllInfo = ()=>{
    fetch(`http://localhost:9000/api/characters/${this.props.character.first_name}`)
                  .then(res => res.json())
                  .then(data => this.setState({character: {
                                                      first_name: data[0].first_name,
                                                      last_name: data[0].last_name,
                                                      occupation: data[0].title,
                                                      catch_phrase: data[0].catch_phrase,
                                                      age_range: data[0].age_range,
                                              }
                  }))
                  .catch(err => console.log('Could not get single character from search string', err))

    fetch(`http://localhost:9000/api/characters/place_of_interest/${this.props.character.first_name}`)
                  .then(res => res.json())
                  .then(data => this.setState({placesOfInterest: data}))
                  .catch(err => console.log('Could not get array of places of interest', err))

    fetch(`http://localhost:9000/api/voiced_by_actors/${this.props.character.first_name}`)
                  .then(res => res.json())
                  .then(data => this.setState({voiceActor: data[0].name}))
                  .catch(err => console.log('Could not get voiced by actore from search string', err))
  }
  
  
returnPlaces = ()=> {
  //if(this.props.character.first_name !== this.state.character.first_name) this.forceUpdate();

  let favoritePlaces = this.state.placesOfInterest.map(place => {
                return(
	              <li>
			  <strong> {place.name} </strong>  
	              </li>
		)
  })
  return favoritePlaces
}

  render(){
      return(
           <div>
            <p> Last Name: <strong>  {this.state.character.last_name}  </strong> </p>
            <p> Catch Phrase: <strong> ' {this.state.character.catch_phrase} ' </strong> </p>
            <p> Occupation: <strong>  {this.state.character.occupation}  </strong> </p>
	    <p> Age Range: <strong>  {this.state.character.age_range}  </strong> </p>
            <p> Voice Actor: <strong>  {this.state.voiceActor}  </strong> </p>
	    <p> Favorite Places: 
	            <ul>
			{
			 this.state.placesOfInterest === undefined
		         ? <p> Loading... </p>
			 : this.returnPlaces()
			}
	           </ul> 
	   </p> 
	   </div>  
      )
  }
}

export default More
