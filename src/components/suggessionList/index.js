import React, { useState } from 'react'
import { useHistory } from 'react-router'
import SearchBarCss from './styles.module.scss'

const SuggesstionList = ({ compare, isLoading, onSearch, suggestionsList, onSuggestionSelect }) => {
  const [state, setstate] = useState({
    search: '',
  })
  return (
    <>
    <div className={SearchBarCss.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSearch(state.search)
        }}
      >
        <div>
          <input
            type="text"
            placeholder={compare ? 'Compare with' : 'Search'}
            value={state.search}
            onChange={e=> {
              setstate({...state, search: e.target.value})
            }}
          />
        </div>

        <button type="submit">
          {!isLoading ? 
          <>
          <img alt="" src="images/search icon.svg" />
          SEARCH
          </>:
          'Searching...'  
        }
        </button>
      </form>
    </div>
    {
        suggestionsList.length > 0 && <div className={SearchBarCss.wrapper}>
        <div className={SearchBarCss.ListContainer}>
            {
                suggestionsList.map(suggestion => (
                    <>
                        <div className={SearchBarCss.ListItem} onClick={() => {onSuggestionSelect(suggestion)}}>
                        <div className={'poi-address'}>{suggestion.product_name}</div>
                        </div>
                        <div className='separator'></div>
                    </>
                ))
            }
        </div>

    </div>
    }
    </>
  )
}


export default SuggesstionList
