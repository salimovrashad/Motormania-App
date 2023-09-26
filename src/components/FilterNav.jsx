// import React from 'react'
// import { Link } from 'react-router-dom';

// const FilterNav = () => {
//   const handleClick = (cat) => {
//     cat.preventDefault();
//   }
//   return (
//     <div>
//   <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-3">
//     <div className="container-fluid">
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav category">
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("")}}>ALL</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("accessories")}}>ACCESSORİES</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("bikes")}}>BİKES</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("gloves")}}>GLOVES</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("jackets")}}>JACKETS</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("boots")}}>BOOTS</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" onClick={()=>{handleClick("helmets")}}>HELMETS</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </div>

//   )
// }

// export default FilterNav