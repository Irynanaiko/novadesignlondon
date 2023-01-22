import React from 'react';
import { AboutUs } from '../../components/About_us/AboutUs';
import { Slider } from '../../components/Slider/Slider';
import { ChooseUs } from '../../components/Choose_us/Choose_us';
import { Forms } from '../../components/Form/Form';

function Home() {
    return (
        <>
            <Slider />
            <ChooseUs />
            <AboutUs />
            <Forms />
        </>
    );
}

export { Home };
