import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import watch from "../images/watch.jpg"
import Container from '../components/Container';
const Checkout = () => {
    return (
        <><Meta title={"Checkout"} />
            <BreadCrum title='Checkout' />

            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-7">
                            <h3 className="website-name">EntreFinalReact</h3>
                            <nav style={{ "--bs-breadcrumb-divider:": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/cart" href="#">Cart</Link></li> &nbsp;/
                                    <li className="breadcrumb-item active" aria-current="page">Informacion</li>

                                </ol>
                            </nav>
                            <h4 className="title">
                                Informacion de contacto
                            </h4>
                            <p className="user-details">mailfalso123@gmail.com</p>
                            <form action="" className='d-flex flex-wrap justify-content-between' style={{ gap: '15px' }}>
                                <div className='w-100'>
                                    <select name="" className='form-control form-select' id="">
                                        <option select disabled>Selecciona tu pais</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Ingrese su nombre' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Ingrese su apellido' className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Ingrese su localidad' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Ingrese su nombre' /></div>
                                <div className='flex-grow-1'>
                                    <input type="text" className="form-control" placeholder='Ingrese su ciudad' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="" selected disabled> Seleccione su provincia </option>
                                    </select>

                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Ingrese su codigo postal' className="form-control" />

                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className='text-dark'>Volver al carro</Link>
                                        <Link to="/cart" className='button'>Sigue a la compra</Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className="d-flex align-items-center mb-2" style={{gap:'10px'}}>
                                <div className='w-75 d-flex ' style={{gap:'10px'}}>
                                    <div className='w-25 position-relative'>
                                        <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute" style={{top:'-20px', right:'2px'}} >1</span>
                                        <img className='img-fluid' src={watch} alt="" />

                                    </div>
                                    <div>
                                        <h5 className="total-price">ajklsdkad</h5>
                                        <p className='total-price'>s / #jkasdjkas</p>
                                    </div>
                                </div>
                                <div className='flex-grow-q'>
                                    <h5>100</h5>
                                </div>

                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p  className='mb-0 total'>Subtotal</p>
                                    <p className='mb-0 total-PRICE'>$ 1000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0  total'>eNVIO</p>
                                    <p className='mb-0 total-price'>$ 1000</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'> Total</h4>
                                <h5 className='total-price'>$ 1000</h5>
                            </div>

                        </div>
                    </div>
            </Container>

        </>


    )
}

export default Checkout