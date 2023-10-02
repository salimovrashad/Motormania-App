import React, { useContext } from 'react'
import { useWishlist } from 'react-use-wishlist';
import { LangContext } from '../context/LangContext';
import { useCart } from 'react-use-cart';
import CollapsibleExample from '../components/CollapsibleExample';

const Wishlist = () => {
    const [lang] = useContext(LangContext);
    const { addItem } = useCart();
    const {
        totalWishlistItems,
        items,
        removeWishlistItem,
      } = useWishlist();
    
      return (
          <>
          <CollapsibleExample />
        <h1 className='text-center py-3'>{lang === "en"?"Wishlist":"Favorilər"} ({totalWishlistItems})</h1>
  
        <ul class="list-group container">
          {items.map((item) => (
            <li key={item.id} class="list-group-item d-flex justify-content-between align-items-center">
                <div><img width={100} src={item.image} alt="" /></div>
                <div>{item.name}</div>
                <div>{item.price}$</div>
                <div>
                    <button className="btn btn-danger me-3" onClick={() => { addItem(item) }}>{lang === "en"?"Add To Cart":"Səbətə Əlavə Et"}</button>
                    <button className="btn btn-danger me-3" onClick={() => removeWishlistItem(item.id)}>&times;</button>
                </div>
            </li>
          ))}
        </ul>
      </>
  )
}

export default Wishlist