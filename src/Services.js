import React from 'react';
import './Services.css';
import Card from './Card';
import Category from './Category';



function Services() {
    return (
        <div className="services">
           <div className="services__card">
           <Card
                title="IDP ILETS"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/6JHSt1Zfo4fRATxXOeFMDOLRKeqrdfQAyUoMdyZn272.jpg%201.jpg"
                />
                <Card
                title="Mero Tv"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/hJ2fk5BVVluMVLxjtOeUlogo.png"
                />

                <Card
                
                title="NT Prepaid Topup"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/bOzVKN85m40t5cyFqRcLnt_all.png"
                />
                <Card 
                
                title="Big Movies"
                image="https://cdn.esewa.com.np/ui/images/logos/merchants/big_movies-2.png"
                />
                <Card 
                
                title="eSewa Privilege"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/YknGgqOBmu1ngXUkLSAhdownloadesewa.png"
                />
                <Card 
                
                
                title="Max Cinema hall"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/Euzw9VmfcYFTxAgZetw1MAX%20TV%20LOGO.JPG"
                />
           </div>
            <Category
            title="Movies" 
            button="View More"
            />
           <div className="services__card">
           <Card
                title="Chalchitra"
                image="data:image/png;base64,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"
                />
                <Card
                
                title="Fopi"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/jz1Jd1dhWNTIJt2OdUsifopi%20272.png"
                />
                <Card 
                
                title="Big Movies"
                image="https://cdn.esewa.com.np/ui/images/logos/merchants/big_movies-2.png"
                />
                <Card 
                
                title="FCube Cinemas"
                image="https://cdn.esewa.com.np/ui/images/logos/merchants/fcube-2.png"
                />
                <Card 
                
                
                title="Max Cinema hall"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/Euzw9VmfcYFTxAgZetw1MAX%20TV%20LOGO.JPG"
                />
                <Card
                
                title="QFX Cinemas"
                image="https://cdn.esewa.com.np/ui/images/logos/merchants/qfx-2.png"
                />

           </div>
           <Category
            title="Online shopping" 
            button="View More"
            />
             <div className="services__card">
           <Card
                title="Daraz"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/sQ7GRf3wvnkVyWQoRyiMLogo.png"
                />
                <Card
                
                title="Happy Shoppe"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/kWqziCJpA1bj7BV3t34zhapp.jpg"
                />
                <Card 
                
                title="Mero Kishan"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/9OeUiYc8RQuqvpzvF0k6mk.jpg"
                />
                <Card 
                
                title="Xiaomi Nepal"
                image="https://cdn.esewa.com.np/ui/images/logos/merchants/mi.png"
                />
                <Card 
                
                
                title="Smart Dhoko"
                image="https://cdn.esewa.com.np/ui/images/logos/merchants/smart_doko-2.png"
                />
                <Card
                
                title="Third Wheel"
                image="https://cdn.esewa.com.np//ui/images/logos/merchants/Third_Wheel.png"
                />

           </div>
           
        </div>
    )
}

export default Services;
