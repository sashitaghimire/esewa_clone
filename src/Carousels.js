import React from 'react'
import './Carousels.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carousels() {
    return (
            
            <Carousel className="image__carousel" showThumbs={false} selectedItem={false} showIndicators ={false} infiniteLoop autoPlay>
            <div className="image__carousels">
                <img src="https://blog.esewa.com.np/wp-content/uploads/2019/11/pay-your-internet-bills-blog-banner.png" alt="sendmoney" />

            </div>
                <div   className="image__carousels">
                    <img src="https://blog.esewa.com.np/wp-content/uploads/2020/03/p2p-1200x700px.png" alt="esewa-img" />
                    
                </div>
                <div  className="image__carousels">
                    <img src="https://blog.esewa.com.np/wp-content/uploads/2020/01/1200.jpg" alt="esewa-img" />
                    
                </div>
                <div   className="image__carousels">
                    <img src="https://blog.esewa.com.np/wp-content/uploads/2020/09/ncell-smartcell-giveaway-blog.jpg" alt="esewa-img" />
                    
                </div>
            </Carousel>
    )
}

export default Carousels;
