import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import JerseySection from '../Components/JerseySection/JerseySection';
import ShoesSection from '../Components/ShoesSection/ShoesSection';
import SunglassSection from '../Components/sunglassSection/sunglassSection';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <JerseySection></JerseySection>
            </section>
            <section>
                <ShoesSection></ShoesSection>
            </section>
            <section>
                <SunglassSection></SunglassSection>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomePage;