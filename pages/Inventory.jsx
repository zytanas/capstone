import React from 'react'
import '../styles/inventory.css'

import medData from '../assets/dummy-data/booking-cars'
import InvenItem from '../components/UI/InvenItem';

const Inventory = () => {
  return <div className="inventory">
    <div className="inventory__wrapper">
      <h2 className='inventory__title'>Inventory</h2>

      <div className="filter__widget-wrapper">
        <div className="filter__widget-01">
          <select>
            <option value="Avail">Available</option>
            <option value="Ex">Expired</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>

        <div className="filter__widget-01">
          <select>
            <option value="needleC">Needle</option>
            <option value="needleD">Tube</option>
            <option value="tube">Others</option>
          </select>
        </div>

      </div>

      <div className="inventory__item-list">{
        medData.map((item)=> 
        (<InvenItem item={item} key={item.id} />
        ))
      }
        
      </div>
    </div>
  </div>

};

export default Inventory