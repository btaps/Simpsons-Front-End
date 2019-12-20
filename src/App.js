import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'

import SearchContainer from './containers/SearchContainer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AllCharacters from './components/AllCharacters'
import CreateFormContainer from '././containers/CreateFormContainer'

function App() {
  
  return (
    <div >
      <Header />
      <Router>
           <div className="App">
             <NavBar />
               <Route path='/search-all-characters' exact render={()=> {
                     return <AllCharacters  />
               }} />
	       <Route path='/search-one-character' exact component={SearchContainer}/>
	       <Route path='/create-one-character' exact component={CreateFormContainer}/>
          </div>
      </Router>  	    
    </div>
  )
}

export default App;
