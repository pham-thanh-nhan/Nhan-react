import HeaderLogo from '../assets/images/header-logo.svg'
import CardLogo from '../assets/images/card-header.svg'



function Header(){


return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container d-flex ">
    <img src={ HeaderLogo } alt="" />
    
    
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav gap-4">
        <li className="nav-item">
          <div className="nav-link fw-bold " >Home</div>
        </li>
        <li className="nav-item">
          <div className="nav-link fw-bold " >Shop</div>
        </li>
        <li className="nav-item">
          <div className="nav-link fw-bold " >About</div>
        </li>
        <li className="nav-item">
          <div className="nav-link fw-bold " >Contact</div>
        </li>
      </ul>
    </div>
    <img src={ CardLogo } alt="" />
  </div>
</nav>
)
}
export default Header;