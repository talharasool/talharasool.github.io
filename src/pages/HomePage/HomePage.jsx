import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import ProductCard from '../../components/ProductCard/ProductCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import SideMenu from '../../components/SideMenu/SideMenu'
import HomePageCss from './HomePage.module.scss'
import { fetchSearchResultsAction, fetchNextPageAction } from './actions'

const HomePage = ({ location, results, fetchSearchResults, isLoading, fetchNextPage }) => {
  const initialState = {
    search: location.search ? decodeURI(location.search.substr(1)) : null,
    sortby: 'Price (low-high)',
    date: null,
    category: null,
  }
  const [state, setstate] = useState(initialState)
  const [toggle, settoggle] = useState({
    sortby: false,
    filter: false,
  })

  useEffect(() => {
    function handleScrollEvent() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
         fetchNextPage()
      }
    }
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    }
  }, [])
  
  useEffect(() => {
    setstate({
      ...state,
      search: location.search ? decodeURI(location.search.substr(1)) : null,
    })
    if (state.search && results.length <= 10) {
      window.scrollTo(0, 0)
      document.getElementById('search').scrollIntoView()
    }

    // eslint-disable-next-line
  }, [results, state.search])
  console.log('results are ', results)
  return (
    <div className={HomePageCss.container}>
      <div className={HomePageCss.headcontainer}>
        <div className={HomePageCss.insidecontainer}>
          <h1>FIND THE PERFECT PAIR</h1>
          <p>
            Stay on top of the ever-changing sneaker and streetwear markets
            using our super-powered search engine and comparison tool.
          </p>
          <SearchBar handleChange={(keyword) => {fetchSearchResults(keyword)}} isLoading={isLoading}/>
        </div>
      </div>
      <div id="search">
        {results.length > 0 ? (
          <div>
            <div className={HomePageCss.nav}>
              <ul>
                <li
                  onClick={() =>
                    settoggle({ ...toggle, filter: !toggle.filter })
                  }
                >
                  <span>{toggle.filter ? 'Hide Filters' : 'Show Filters'}</span>
                  <img
                    alt=""
                    className={`${HomePageCss.arrow} fuckingarrow`}
                    src="images/Caret.png"
                    style={{ transform: toggle.filter ? 'rotate(0deg)' : null }}
                  />
                  &emsp; &emsp; &emsp;{' '}
                  <span
                    style={{
                      // textDecoration: 'underline',
                      color: 'black',
                      display: toggle.filter ? 'inline-block' : 'none',
                    }}
                    onClick={() => setstate(initialState)}
                  >
                    Reset
                  </span>
                </li>
                <li>Showing Results for "{state.search}"</li>
                <li>
                  <div className={HomePageCss.box}>
                    <div
                      className={HomePageCss.dropdown}
                      onClick={() =>
                        settoggle({ ...toggle, sortby: !toggle.sortby })
                      }
                    >
                      <span>Sort by</span>
                      <h3>{state.sortby}</h3>
                      <img alt="" src="images/Caret.png" />
                    </div>
                    <div
                      className={HomePageCss.dd_content}
                      style={
                        toggle.sortby
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                    >
                      <ul>
                        <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'Price (low-high)' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Price (low-high)
                        </li>
                        <li
                          onClick={() => {
                            setstate({ ...state, sortby: 'Price (high-low)' })
                            settoggle({ ...toggle, sortby: false })
                          }}
                        >
                          Price (high-low)
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={HomePageCss.filter_cards}>
              {toggle.filter ? (
                <div className={HomePageCss.sideMenu}>
                  <SideMenu setstate={setstate} state={state} />
                </div>
              ) : null}
              <div
                className={`${HomePageCss.cards} ${
                  toggle.filter ? HomePageCss.cardsWithFilter : null
                }`}
              >
                 { results.map((product, idx) => (
                  <ProductCard key={idx} product={product}/>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    results:  state.home.results,
    isLoading: state.home.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults : (keyword) => dispatch(fetchSearchResultsAction(keyword)),
    fetchNextPage: () => dispatch(fetchNextPageAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
