import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({handleChange }) => { 
    return(
    <input className = 'search'
    type = "search"
    placeholder = "search-monster"
    onChange = {handleChange}
    />)
}