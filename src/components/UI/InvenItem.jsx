
import React from 'react'

const InvenItem = (props) => {
    const {category, type, stock, imgUrl, medName, usage} = props.item
    return <div className="item__item">
        <div className="item__item-top">
            <div className="item__item-tile">
                <h3>{medName}</h3>
                <span><i class="ri-syringe-line"></i></span>
            </div>
            <p>{category}</p>
        </div>
        <div className="item__img">
            <img src={imgUrl} alt="" />
        </div>
        <div className="item__item-bottom">
            <div className="item__bottom-left">
                <p><i class="ri-dossier-line"></i>{usage}</p>
                <p><i class="ri-shield-star-line">{type}</i></p>
            </div>

            <p className='item__rent'>{stock}</p>
        </div>
    </div>
}

export default InvenItem