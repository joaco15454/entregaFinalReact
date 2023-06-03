import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
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
            <div className="d-flex flex-wrap justify-content-between align-items-center" style={{gap:'10px'}}>
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
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center' style={{gap:'10px'}}>
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Envio gratis</h6>
                    <p className='mb-0'>Desde ordenes de 10000$ en adelante</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' style={{gap:'10px'}}>
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Ofertas diarias.</h6>
                    <p className='mb-0'>Ahorra hasta un 50% de descuento.</p>
                  </div>
                </div>
                <div>
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>Soporte 24/7</h6>
                    <p className='mb-0'>Comprale a expertos</p>
                  </div>
                </div>
                <div>
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Precios accesibles</h6>
                    <p className='mb-0'>Precios a costo.</p>
                  </div>
                </div>
                <div>
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Pagos seguros.</h6>
                    <p className='mb-0'> 100% seguros.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home