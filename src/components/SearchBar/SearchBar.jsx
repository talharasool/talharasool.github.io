import React, { useState } from 'react'
import { useHistory } from 'react-router'
import SearchBarCss from './SearchBar.module.scss'

const SearchBar = ({ compare }) => {
  const [state, setstate] = useState({
    search: '',
  })

  const history = useHistory()
  return (
    <div className={SearchBarCss.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          return compare ? null : history.push(`/?${state.search}`)
        }}
      >
        <div>
          <input
            type="text"
            placeholder={compare ? 'Compare with' : 'Search'}
            value={state.search}
            onChange={e=> setstate({...state, search: e.target.value})}
          />
        </div>

        <button type="submit">
          <img alt="" src="images/search icon.svg" />
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default SearchBar
