import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import watch from "../images/watch.jpg"
import { AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Cart = () => {
    return (
        <>
            <Meta title={"Carro"} />
            <BreadCrum title='Carro' />
            <Container class1="home-wrapper-2 py-5 cart-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="py-3 d-flex justify-content-between align-items-center cart-header">
                                <h4 className='cart-col-1'>Productos</h4>
                                <h4 className='cart-col-2'>Precio</h4>
                                <h4 className='cart-col-3'>Cantidad</h4>
                                <h4 className='cart-col-4'>Total</h4>

                            </div>
                            <div className="py-3  mb-2 d-flex justify-content-between align-items-center cart-data">
                                <div style={{ gap: '15px' }} className='cart-col-1 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src={watch} className='img-fluid' alt="reloj" />
                                    </div>
                                    <div className='w-75'>
                                    <p>asdasdasd</p>
                                        <p>Size: asdasdasd</p>
                                        <p>Size: asdasdasd</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">$100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center' style={{gap:'15px'}}>
                                    <div>
                                        <input type="number" className='form-control' min={1} max={10}/>
                                    </div>
                                    <div>
                                        <AiFillDelete className='text-danger ' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                <h5 className="price">$100</h5>

                                </div>

                            </div>
                            
                        </div>
                        <div className="col-12 py-12 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className='button'>Seguir la compra</Link>
<div className='d-flex  flex-column align-items-end'>
    <h4>Subtotl: #$1000</h4>
    <p>Impuestos incluidos</p>
    <Link  to="/checkout" className='button'>Fianlizar comprar</Link>
</div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Cart