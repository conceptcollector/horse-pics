import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Box } from '@mui/material';
import { Carousel } from 'react-bootstrap';

export default function HorsePic() {
    
    const [ index, setIndex ] = useState(0);

    const horsePics = [

        {
            name: '5G Horse',
            src: '../../public/images/5G-horse/.jpeg'
        },
        {
            name: 'Beck Horse',
            src: '../../public/images/Beck_horse.jpeg'
        },
        {
            name: 'charcuterie',
            src: '../../public/images/charcuterie.jpeg'
        },
        {
            name: 'Doja Horse',
            comments: 'For the young ones.',
            src: '../../public/images/Doja_horse.jpeg'
        },
        {
            name: 'Gummy Bear',
            src: '../../public/images/Gummy_bear.jpeg'
        },
        {
            name: 'Manson Family Horses',
            src: '../../public/images/Manson_family_horse.jpeg'
        },
        {
            name: 'Horses in the Matrix',
            comments: 'So meta.',
            src: '../../public/images/meta_HorsePics.jpeg'
        },
        {
            name: 'Sam Elliott Horse',
            src: '../../public/images/mustachioed_horse.jpeg'
        },
        {
            name: 'Banished horse',
            src: '../../public/images/outside_horse.jpeg'
        },
        {
            name: 'MAGA Horse',
            comments: 'Hiding from the Feds after his involvement in January 6.',
            src: '../../public/images/patriotic_horse.jpeg'
        },
        {
            name: 'Santa Horse',
            src: '../../public/images/Santa_horse.jpeg'
        },
        {
            name: 'Secretariat (Present Day)',
            comments: "Such a shame. Ripped apart by a pack of dogs. Barely anything to bury.",
            src: '../../public/images/Secretariat_present_day.jpeg'
        },
        {
            name: 'Secretariat',
            src: '../../public/images/Secretariat_prime.jpeg'
        }
    
    ];

    const carouselStyle = {
        controls: true,
        indicators: true
    };

    return (
            <Carousel>
                {horsePics.map(horsePic => {
                    return (
                        <Carousel.Item
                            style={carouselStyle}
                        >
                            <img 
                                    id="horse-pic"
                                    key={index}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
    )
    
}