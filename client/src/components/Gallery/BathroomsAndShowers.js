import React from "react";
import ImageGallery from 'react-image-gallery';
import './index.css';
import { useHistory } from "react-router-dom";
import { BackBtn } from '../Buttons/Back'


export const BathroomsAndShowers = () => {
    const imagesHardcoded = [
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
        }
    ];

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('../../../public/assets', false, /\.(png|jpe?g|svg)$/));

    const  mapped = Object.values(images).map(picture => {
        return {
            original: picture,
            thumbnail: picture,
        }
    })




    let history = useHistory();
    const back = () => {
        history.push('/');
    };

    return (
        <div style={{
            display: "block",
            background: 'grey',
            height: '100vh',
        }}>
            <div style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                display: 'block',
                margin: '10px 10px 10px 10px',
                color: 'White'
            }}>
                Bathrooms And Showers
            </div>
            <div onClick={back}  style={{
                zIndex: 1,
                position: 'fixed',
            }}>
                <BackBtn/>
            </div>
            <ImageGallery items={mapped} thumbnailPosition={'bottom'} showBullets={true} />
        </div>
    );
};

