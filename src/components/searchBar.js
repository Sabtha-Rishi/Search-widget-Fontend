import React from 'react'

const searchBar = ({ search, setSearch }) => {
  return (

    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        
        <label htmlFor='search'></label>
        <input className='searchBar' 
            autoFocus
            placeholder = 'Search'   
            id = 'searchBar'
            role='searchbox'
            required
            type = 'text'  
            value = {search}
            onChange = {(e)=> setSearch(e.target.value)}
        />
    </form>
  )
}

export default searchBar