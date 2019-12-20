import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function Navbar() {

  return(
          <div>
            <h1 className='title'>The Simpsons API</h1>
                <div>
		   
	            <NavLink
                        className='nav-link'
                        to='/search-all-characters' exact
                        activeClassName='active'
                        > Show me all Characters
                    </NavLink>
                    <NavLink
                        className='nav-link'
                        to='/search-one-character' exact
                        activeClassName='active'
                        > Search for a Character
                    </NavLink>
                    <NavLink
                        className='nav-link'
                        activeClassName='active'
                        to='/create-one-character'
                        > Create A Character
                    </NavLink>

                </div>
          </div>
  )
}

export default Navbar
