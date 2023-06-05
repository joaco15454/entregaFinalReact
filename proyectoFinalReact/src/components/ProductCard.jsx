import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src="images/wish.svg" alt="wish" /></Link>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                <img src="images/watch.jpg" className='img-fluid' alt="product image" />

            </div>
            <div className="product-details">
                <h6 className='brand'>
                    Havels
                </h6>
                <h5 className="product-title">
                    Auriculares para ninños con 10 colores
                </h5>
                <ReactStars
                    count={5}
                    value='3'
                    edit='false'
                    size={24}
                    activeColor="#ffd700"
                />,
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column' style={{gap:'15px'}}>
                    <Link>
                        <img src="images/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="addcart" />
                    </Link>
                    <Link>
                        <img src="images/add-cart.svg" alt="addcart" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard