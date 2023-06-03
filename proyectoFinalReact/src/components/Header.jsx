import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className='text-white mb-0'>Envios gratis desde 100000$</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">Numero contacto: <a href="tel:54 7777777" className="text-white">54 7777777 </a></p>
            </div>
        </div>
      </div>
    </header>
    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className='text-white'>DevCorner</Link>
              </h2>
          </div>
          <div className="col-5">
            <div className="input-group ">
              <input type="text" className="form-control py-2" placeholder="Busca tus productos aqui..." aria-label="Busca tus productos aqui..." aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" id="basic-addon2"> <BsSearch className='fs-6'/> </span>
              </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link className='d-flex align-items-center text-white' style={{gap:'10px'}}>
                <img src="images/compare.svg" alt="compare" />
                <p className='mb-0'>
                  Comparar productos
                </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center text-white' style={{gap:'10px'}}>
                <img src="images/wishlist.svg" alt="wishlist" />
                <p className='mb-0'>Favoritos</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center text-white' style={{gap:'10px'}}>
                <img src="images/user.svg" alt="user" />
                <p className='mb-0'>Inicia sesion</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center text-white' style={{gap:'10px'}}>
                <img src="images/cart.svg" alt="cart" />
                <div className='d-flex flex-column' style={{gap:'10px'}}>
                  <span className='badge bg-white text-dark'>
                      0
                  </span>
                  <p className='mb-0'>$500</p>
                </div>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu_bottom d-flex align-items-center" style={{gap:'30px'}}>
              <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center  " style={{gap:'15px'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   <img src='images/menu.svg' alt='menu' /> <span className='me-5 d-inline-block'>Categorias</span>

                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                </ul>
              </div>
              </div>
              <div className='menu-links'>
                <div className="d-flex align-items-center " style={{gap:'15px'}}>
                  <NavLink   to="/">Inicio</NavLink>
                  <NavLink  to="/">Tienda</NavLink>
                  <NavLink  to="/">Novedades</NavLink>
                  <NavLink  to="/">Contacto</NavLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </header>
    </>
  )
}

export default Header