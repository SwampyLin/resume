import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className='bg-secondary'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between text-white py-4'>
            <p className='mb-0'></p>
            <ul className='d-flex list-unstyled mb-0 h4'>
              <li>
                <a href='#' className='text-white mx-3'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-white mx-3'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-white ms-3'>
                  <i className='fab fa-line'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
