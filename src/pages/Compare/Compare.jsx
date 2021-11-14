import React, { useEffect, useState } from 'react'
import CompareCard from '../../components/CompareCard/CompareCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import CompareCss from './Compare.module.scss'
const Compare = () => {
  const [state, setstate] = useState(
    document.documentElement.clientWidth > 700 ? true : false
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])

  // Reduce Compare Boxes to TWO products on mobile view for REsponsiveness
  const resizeEvent = () => {
    const cwidth = document.documentElement.clientWidth
    if (cwidth > 700) {
      setstate(true)
    } else if (cwidth <= 700) {
      setstate(false)
    }
  }
  return (
    <div>
      <div className={CompareCss.container}>
        <SearchBar />
        <div className={CompareCss.desp}>
          <h1>COMPARE</h1>
          <p>
            Stay on top of the ever-changing sneaker and streetwear markets
            using our super-powered search engine and comparison tool.
          </p>
        </div>
      </div>
      <div className={CompareCss.cards}>
        <CompareCard />
        <CompareCard />
        {state ? <CompareCard /> : null}
      </div>
    </div>
  )
}

export default Compare
