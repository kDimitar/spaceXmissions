import React, { useRef } from "react";
import { gql, useQuery } from '@apollo/client'

//import useNavigation from './../../hooks/useNavigation'
import Menu from './../Menu/Menu'


const GET_ROCKET_INFO = gql`
    {
        rockets {
    name
    type
    engines {
      type
      version
        }
    id
    mass {
      kg
        }
     } 
    }
`


const NavBar = () => {
    const navRef = useRef(null);

    const {data, loading, error} = useQuery(GET_ROCKET_INFO)
    if (loading) return <div ><p>🚀 ITS LOADING</p></div>
    if(error) return <div error = {error.message}> <h3> </h3>  </div>
    


    return     (
    <div className ='' ref={navRef}>
        <div>
            <Menu  rockets = {data.rockets}/>


        </div>
    </div>
    )
}

export default NavBar;