import React from 'react';
import AboutUs from './components/About_us';
import Slider from './components/Slider';
import ChooseUs from './components/Choose_us';
import RequestForm from '../../components/RequestForm';

export default function Home() {
    return (
        <>
            <Slider />
            <ChooseUs />
            <AboutUs />
            <RequestForm />
        </>
    );
}
