const endPoint = 'http://localhost:9000/api/characters'

class SimpsonsModel {
  static all = () => {
    return fetch(endPoint)
	    .then(res => res.json())
	    .catch(err => console.log('Could not get all characters using fetch', err))
  }
}  

export default SimpsonsModel
