const endPoint = 'http://localhost:9000/api/characters'

class SimpsonsModel {
  static all = () => {
    return fetch(endPoint)
	    .then(res => res.json())
	    .catch(err => console.log('Could not get all characters using fetch', err))
  }

  static create = (character) => {
    return fetch(endPoint, { 
          method: "POST",
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(character)
            })
             .then(res => res.json())
	     .catch(err => console.log('Could not insert Character', err))
  }

  static delete = (id) => {
    return fetch(`${endPoint}/${id}`, {
          method: "DELETE"
    })
              .then(res => res.json())
	      .catch(err => console.log('Could not delete Character', err))
  }

  static update = (character) => {
    return fetch(`${endPoint}/${character.rowid}`, {
          method: 'PUT',
	  headers:{
	      'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(character)
    })
	  .then(res => {
		  console.log("MODEL")
		  return res.json()
	  })
          .catch(err => console.log('Could not update character', err))
  }

}  
export default SimpsonsModel
