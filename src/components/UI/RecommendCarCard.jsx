

import React from 'react'

const RecommendCarCard = (props) => {

    const {medName, retweet, imgUrl, rentPrice, percentage } = props.item
  return         <div className="recommend__car-card">
  <div className="recommend__car-top">
    <h5>
      <span>
        <i class="ri-refresh-line">{percentage}% Recommended Items in the Inventory</i>
      </span>
    </h5>
  </div>

  <div className="recommend__car-img">
    <img src={imgUrl} alt="" />
  </div>
  <div className="recommend__car-bottom">
    <h4>{medName}</h4>
    <div className='recommend__car-other'>


      <div className='recommend__icons'>
        <p>
            <i class="ri-archive-line"></i>
            {retweet}
          50 pcs
        </p>
        <p>
          <span></span>
        </p>
        <p>
          <span>
            <i class="ri-checkbox-circle-line"></i>
          </span>
        </p>
        <span>{rentPrice}S</span>
      </div>
    </div>

  </div>
</div>
}

export default RecommendCarCard