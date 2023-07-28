import { NavLink } from 'react-router-dom'

function Navbar({ cartData }) {
  return (
    <>
      <div className='bg-primary sticky-top'>
        <div className='container'>
          <nav className='navbar px-0 navbar-expand-lg navbar-light bg-primary'>
            <NavLink
              className='navbar-brand position-absolute'
              to='/'
              style={{
                left: '50%',
                transform: 'translate(-50%, -50%)',
                top: '50%'
              }}
            >
              SwampyLin
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse bg-primary custom-header-md-open'
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <NavLink className='nav-link ps-0' to='/products'>
                    作品列表
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='d-flex'></div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Navbar
