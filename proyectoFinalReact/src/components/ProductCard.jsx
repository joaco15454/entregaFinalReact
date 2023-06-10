import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation();

    return (
        <>
            <div className={`${
                location.pathname == "/product" ? `gr-${grid}` : "col-3"
                }`}>
                <Link to={`${location.pathname =="/"   ?   ':product/:id' : 
                location.pathname== '/product/:id' ? "/product/id" : ":id" }`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent' ><img src="images/wish.svg" alt="wish" /></button>
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
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"} `} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate beatae repellendus, vitae rerum minima inventore animi tempore officiis unde </p>

                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column' style={{ gap: '15px' }}>
                            <button className='border-0 bg-transparent'>
                                <img src="images/prodcompare.svg" alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="images/view.svg" alt="addcart" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="images/add-cart.svg" alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link to={`${location.pathname =="/"   ?   ':product/:id' : 
                location.pathname== '/product/:id' ? "/product/id" : ":id" }`}><img src="images/wish.svg" alt="wish" /></Link>
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
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"} `} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate beatae repellendus, vitae rerum minima inventore animi tempore officiis unde </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column' style={{ gap: '15px' }}>
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
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"} `} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate beatae repellendus, vitae rerum minima inventore animi tempore officiis unde </p>

                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column' style={{ gap: '15px' }}>
                            <button className='border-0 bg-transparent'>
                                <img src="images/prodcompare.svg" alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="images/view.svg" alt="addcart" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src="images/add-cart.svg" alt="addcart" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard