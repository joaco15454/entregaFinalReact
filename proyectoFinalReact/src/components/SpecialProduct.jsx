import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const SpecialProduct = () => {
    return (
        <div className='col-6 mb-3'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className='specialproduct-content'>
                        <h5 className="brand">Havels</h5>
                        <h6>Titulo no se que</h6>
                        <ReactStars
                            count={5}
                            value={3}
                            edit='false'
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className="red-p">$100 &nbsp; <strike>$200</strike> </span>
                        </p>
                        <div className="discount-till d-flex align-items-center" style={{ gap: '10px' }}>
                            <p className='mb-0'><b>5 </b>dias</p>
                            <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>
                            
                        </div>
                        <div className="prod-count my-3">
                                <p>Products: 5</p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        <Link className='button' >Agregar al carro</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct