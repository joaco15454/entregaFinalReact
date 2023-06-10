import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom';
import {IoGitCompare} from 'react-icons/io5'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from '../components/Container';
const SingleProduct = () => {
    const props = {
        width: 400,
        height: 250,
        zoomWidth: 500,
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    };

    return (
        <>
            <Meta title={"Producto"} />
            <BreadCrum title='Producto' />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-image d-flex flex-wrap" style={{ gap: '10px' }}>
                                <div>
                                    <img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="" />
                                </div>
                                <div>
                                    <img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="" />
                                </div>
                                <div>
                                    <img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="" />
                                </div>
                                <div>
                                    <img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>Auriculares para ver</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$100</p>


                                </div>
                                <div className="border-bottom py-3">
                                    <div className='d-flex align-items-center my-2' style={{ gap: '10px' }}>
                                        <h3 className='product-heading'>Tipo:</h3>
                                        <p className='product-data'>Reloj</p>
                                    </div>
                                    <div className='d-flex align-items-center my-2' style={{ gap: '10px' }}>
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className='product-data'>Havels</p>
                                    </div>
                                    <div className='d-flex align-items-cente my-2r' style={{ gap: '10px' }}>
                                        <h3 className='product-heading'>Categoria:</h3>
                                        <p className='product-data'>Reloj</p>
                                    </div>
                                    <div className='d-flex align-items-center my-2' style={{ gap: '10px' }}>
                                        <h3 className='product-heading'>Disponibilidad:</h3>
                                        <p className='product-data'>En stock</p>
                                    </div>
                                    <div className='d-flex flex-column my-2' style={{ gap: '10px' }}>
                                        <h3 className='product-heading'>Tamaño:</h3>
                                        <div className="d-flex flex-wrap " style={{ gap: '15px' }}>
                                            <span className="badge border  border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge  border border-1 bg-white text-dark border-secondary">L</span>

                                        </div>
                                    </div>

                                    <div className='d-flex flex-column mt-2' style={{ gap: '10px' }}>
                                        <h3 className='product-heading'>Cantidad:</h3>
                                        <div>
                                            <input type="number" min={1} style={{ width: '50px ' }} className='form-control' />
                                        </div>
                                        <div className='d-flex align-items-center' style={{gap:'30px'}}>
                                            <button className="button border-0" type='submit'>Agregar al carro</button>
                                            <button to='/signup' className='button signup'>Comprar ahora</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center" style={{ gap: '15px' }} >
                                            <div>
                                                <a href=""><IoGitCompare className='fs-5 me-2'/>comprar</a>
                                            </div>
                                            <div>
                                                <a href=""> <AiOutlineHeart className='fs-5 me-2'/>Agregar a lista de favoritos</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
             
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Descripcion</h4>
                                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea praesentium culpa, deleniti iure officiis nam aliquam dolorum illum asperiores voluptates pariatur fugiat voluptas vel maxime autem doloribus, doloremque ipsam provident?</p>
                            </div>
                        </div>
                    </div>
              
            </Container>

            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Nuestros productos mas populares
                            </h3>
                        </div>

                    </div>
                    <div className="row">


                        <ProductCard />

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct