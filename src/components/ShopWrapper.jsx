import React from 'react'
import '../styles/shopwrapper.css'
import OverSlider from './OverSlider'
import BigImage from './BigImage'
import InfoShop from './InfoShop'
import bigboy from '../images/image 1 (1).png'
function ShopWrapper() {
    return (
        <section>
            <div className="container">
                <div className="ShopWrapper">
                    <div className="combine">
                        <OverSlider />
                        <BigImage image={bigboy} />
                    </div>
                    <InfoShop /> 
                </div>
            </div>
        </section>
    )
}

export default ShopWrapper