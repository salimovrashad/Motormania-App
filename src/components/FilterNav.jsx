import React from 'react'

const FilterNav = () => {
  const handleClick = (cat) => {
    console.log(cat);
  }
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-3">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav category">
          <li className="nav-item">
            <a className="nav-link">ALL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{handleClick("accessories")}}>ACCESSORİES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{handleClick("bikes")}}>BİKES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{handleClick("gloves")}}>GLOVES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{handleClick("jackets")}}>JACKETS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{handleClick("boots")}}>BOOTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{handleClick("helmets")}}>HELMETS</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default FilterNav