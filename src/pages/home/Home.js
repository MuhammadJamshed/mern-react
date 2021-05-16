
import React from 'react'
import Card from '../../components/cards/Card'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Slider from '../../components/sliders/Slider'

function Home() {
    return (
        <div>

            <Slider />
            <div style={{ paddingTop: '20px', paddingBottom: '30px' }}>
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>


    )
}
export default Home;