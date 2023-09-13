import React from 'react'

const FilterNav = () => {
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
            <a className="nav-link" href="/">ALL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">ACCESSORİES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">BİKES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">GLOVES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">JACKETS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">BOOTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">HELMETS</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default FilterNav