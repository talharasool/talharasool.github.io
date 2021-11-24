import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import SuggesstionList from '../../components/suggessionList'
import ProductDetailsCss from './ProductDetails.module.scss'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchVendorsAction, fetchSuggesionsAction, setSelectedSuggestionsAction, clearSuggestionsActions } from './actions'
const productApi = {
  id: 1,
  title: 'Nike AIR',
  price: '99.5',
  model: 'Air Jordan',
  release_date: '2021-08-20',
  sku: 'DJ1034 200',
  upper_material: 'Tan',
  score: '4.3',
  sizes: [8, 9, 10, 11, 12, 13, 14, 15],
  colors: ['pink', 'red', 'green', 'black'],
  images: [
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
  ],
  detail:
    'The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’ reunites Jordan Brand with the LA-based model and stylist for a fifth collaboration. Inspired by May’s personal heritage and cultural experiences, the low-top is treated to a luxe makeover, highlighted by a tan suede upper with contrasting hits of black on the collar and tongue.',
  designer: {
    name: 'Tinker Haterfield',
    image: 'images/Mask Group.svg',
    detail:
      'Hatfield was the lead designer of Air Jordans III through XV, XX, and XX3. Additionally, Hatfield co-designed Air Jordans 2010 and XXX. Phil Knight credits the Air Jordan III with saving Nike.',
  },
  comments: [
    {
      id: 1,
      name: 'Dorothy Parker',
      img: 'images/Mask Group.svg',
      date: 'Today at 12:05',
      comment:
        'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
    },
    {
      id: 2,
      name: 'Dorothy Parker',
      img: 'images/Mask Group.svg',
      date: 'Today at 12:05',
      comment:
        'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
    },
  ],
}
const ProductDetails = ({
  location,
  vendors,
  fetchVendors,
  fetchSuggestions,
  suggestionsList,
  setSelectedSuggestion,
  clearSuggestions,
  selectedSuggestion,
  isLoading,
  othersProducts,
  history
}) => {
  const [product, setProduct] = React.useState(location.state)
  if(!product) history.push('/');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    fetchVendors(product.sku)
  },[product])
  useEffect(() => {
    if(selectedSuggestion){
      setProduct(selectedSuggestion)
      setsource(selectedSuggestion.images[0])
    }
  }, [selectedSuggestion])
  const [source, setsource] = React.useState(product.images[0])
  // Taking slider to slide upon click
  var y = document.getElementsByClassName('slide')
  const scrollLeft = () => {
    y[0].scrollLeft -= 200
  }
  const scrollRight = () => {
    y[0].scrollLeft += 200
  }
  return (
    <div className={ProductDetailsCss.container}>
      <SuggesstionList 
        suggestionsList={suggestionsList} 
        selectedSuggestion={selectedSuggestion}
        isLoading={isLoading}
        onSearch={(keyword) => fetchSuggestions(keyword)}
        onSuggestionSelect = {
          (suggestion) => {
            setSelectedSuggestion(suggestion)
            clearSuggestions()
          }
        }
        />
      <div className={ProductDetailsCss.product_cover}>
        <div className={ProductDetailsCss.blank}>
          <div className={ProductDetailsCss.name}>
            <h5>{product.category}</h5>
            <h2>{product.product_name}</h2>
            <p>
              {product.description}
            </p>
          </div>
          <div className={ProductDetailsCss.scroll}>Scroll Down</div>
        </div>
        <div className={ProductDetailsCss.cover}>
          <div className={ProductDetailsCss.cover}>
            <img alt="" src={source} />
          </div>
          <div className={ProductDetailsCss.slider}>
            <div
              className={ProductDetailsCss.prev}
              onClick={() => scrollLeft()}
            >
              <h3>PREV</h3>
              <img alt="" src="images/Group 14.svg" />
            </div>
            <div className={ProductDetailsCss.slides}>
              <ul className="slide">
                {product.images.map((image, idx) => (
                  <li key={idx}>
                    <img
                      alt=""
                      src={image}
                      onClick={(e) => setsource(e.target.src)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={ProductDetailsCss.next}
              onClick={() => scrollRight()}
            >
              <h3>NEXT</h3>
              <img alt="" src="images/Group 2.svg" />
            </div>
          </div>
        </div>
        <div className={ProductDetailsCss.colors}>
          <div className={ProductDetailsCss.top}>
            <h5>COLOR OPTIONS</h5>
            {typeof product.color === 'string' ? <ul>
              <li>{product.color}</li>
            </ul>:
            <ul>
              {product.color.map((color) => <li>{color}</li>)}
            </ul>
            }
            
          </div>
          <div className={ProductDetailsCss.bottom}>
            <ul>
              <li>
                <img alt="" src="images/facebook-fill 1.svg" />
              </li>
              <li>
                <img alt="" src="images/instagram-fill 1.svg" />
              </li>
              <li>
                <img alt="" src="images/twitter-fill 1.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={ProductDetailsCss.product_details}>
        <div className={ProductDetailsCss.desp}>
          <h3>PRODUCT DETAILS</h3>
          <p>
            {product.description}
          </p>
          <div>
            <div></div>
          </div>
        </div>
        <div className={ProductDetailsCss.points}>
          <div className={ProductDetailsCss.col}>
            <div className={ProductDetailsCss.row}>BRAND</div>
            <div className={ProductDetailsCss.row}>{product.brand_name}</div>
          </div>
          <div className={ProductDetailsCss.col}>
            <div className={ProductDetailsCss.row}>RELEASE DATE</div>
            <div className={ProductDetailsCss.row}>{product.release_date}</div>
          </div>
          <div className={ProductDetailsCss.col}>
            <div className={ProductDetailsCss.row}>SKU</div>
            <div className={ProductDetailsCss.row}>{product.sku}</div>
          </div>
          <div className={ProductDetailsCss.col}>
            <div className={ProductDetailsCss.row}>Upper material</div>
            <div className={ProductDetailsCss.row}>{product.material}</div>
          </div>
          <div className={ProductDetailsCss.col}>
            <div className={ProductDetailsCss.row}>Main color</div>
            <div className={ProductDetailsCss.row}>{product.color}</div>
          </div>
        </div>
        {
          vendors.length > 0 && (
            <div className={ProductDetailsCss.buyfrom}>
            <h4>BUY FROM</h4>
            <div className={ProductDetailsCss.paycards}>
            {
              vendors.map((vendor) =>
              <div className={ProductDetailsCss.card}>
                <div className={ProductDetailsCss.top}>
                  <div className={ProductDetailsCss.left}>
                    <span></span>
                    <p>{vendor.availability === true ? 'Available': 'Unavailable'}</p>
                  </div>
                  <div className={ProductDetailsCss.right}>{product.price}</div>
                </div>
                <div className={ProductDetailsCss.img}>
                  <img alt="" src="images/image 7.png" />
                </div>
                <div className={ProductDetailsCss.buy}>
                  <a href={vendor.vendor_url}>Buy</a>
                </div>
              </div>
  
            )
            
            }
            </div>
          </div>
          )
        }
        <hr />
        <div className={ProductDetailsCss.aboutdesigner}>
          <h4>ABout THE DESIGNER</h4>
          <h3>Tinker Haterfield</h3>
          <p>
            Hatfield was the lead designer of Air Jordans III through XV, XX,
            and XX3. Additionally, Hatfield co-designed Air Jordans 2010 and
            XXX. Phil Knight credits the Air Jordan III with saving Nike.
          </p>
        </div>
      </div>
      {
        othersProducts && othersProducts.length > 0 && <div className={ProductDetailsCss.explore}>
        <h3>EXPLORE OTHERS</h3>
        <div className={ProductDetailsCss.cards}>
          {othersProducts.map((product) => {
            return <ProductCard product={product}/>
          })}
        </div>
      </div>
      }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    vendors: state.productDetails.vendor,
    suggestionsList: state.productDetails.suggestionsList,
    selectedSuggestion: state.productDetails.selectedSuggestion,
    isLoading: state.productDetails.isLoadingSugesstions,
    othersProducts: state.home.results.slice(0,6)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVendors: (sku) => dispatch(fetchVendorsAction(sku)),
    fetchSuggestions: (keyword) => dispatch(fetchSuggesionsAction(keyword)),
    setSelectedSuggestion: (suggestion) => dispatch(setSelectedSuggestionsAction(suggestion)),
    clearSuggestions: () => dispatch(clearSuggestionsActions())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails))
