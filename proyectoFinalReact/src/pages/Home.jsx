import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services } from '../utils/Data'
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="banner principal" />
              <div className="main-banner-content position-absolute">
                <h4>Grandes ofertas</h4>
                <h5>IPHONE S13+ Pro</h5>
                <p>Desde 455555#</p>
                <Link className='button'>COMPRA AHORA</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ gap: '10px' }}>
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Grandes ofertas</h4>
                  <h5>IPHONE S13+ Pro</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Mejor llegado</h4>
                  <h5>Compra este relejo</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Recien llegado</h4>
                  <h5>Compra este relejo</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Recien llegado</h4>
                  <h5>Compra este relejo</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
      <Container class1="home-wrapper-2-py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">

              {
                services?.map((i, j) => {
                  return (
                    <div className="d-flex align.items-center" key={j} style={{ gap: '15px' }}>
                      <img src={i.image} alt="" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  )
                }

                )}

            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Musica y Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/watch.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Musica y Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex  align-items-center' >
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/watch.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>


      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Nuestras colecciones
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Pantalla grande</h5>
                  <h6>Smart Watch</h6>
                  <p>Desde $05i203429</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-2+.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Studio display</h5>
                  <h6 className='text-dark'>600px de brillo</h6>
                  <p className='text-dark'>Desde $05i203429</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-3.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Smartphone display</h5>
                  <h6 className='text-dark'>Iphone 15</h6>
                  <p className='text-dark'>Desde $05i203429</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-4.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Parlantes display</h5>
                  <h6 className='text-dark'>Parlantes</h6>
                  <p className='text-dark'>Desde $05i203429</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Productos especiales
              </h3>
            </div>
            <div className="row" >
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />

            </div>
          </div>
      </Container>


     
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Nuestros productos mas populares
              </h3>
            </div>

          </div>
          <div className="row">


            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class1='marque-wrapper py-5'>
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Ultimos blogs
              </h3>
            </div>

          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />

            </div>
            <div className="col-3">
              <BlogCard />

            </div>
            <div className="col-3">
              <BlogCard />

            </div>
            <div className="col-3">
              <BlogCard />

            </div>
          </div>
      </Container>

    </>
  )
}

export default Home