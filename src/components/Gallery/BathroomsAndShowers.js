import React from "react";
import ImageGallery from 'react-image-gallery';
import './index.css';
import { useHistory } from "react-router-dom";

export const BathroomsAndShowers = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: process.env.PUBLIC_URL + '/assets/bg777.jpg',
            thumbnail: process.env.PUBLIC_URL + '/assets/bg777.jpg',
        },
    ];

    let history = useHistory();
    const back = () => {
        history.goBack()
    };

    return (
        <div>
            Bathrooms And Showers
            <div onClick={back}>
               Back
            </div>
            <ImageGallery items={images} thumbnailPosition={'bottom'} showBullets={true} />
        </div>
    );
};

