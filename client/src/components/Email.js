import React from 'react';
import { emailSend } from '../request/SendEmailReq'


export const Email = () => {

    const clickHandler = async () => {
        const email = {
            message: 'REACT'
        };

        await emailSend(email)
    };

    return (
        <div>
            <button onClick={clickHandler}>Send</button>
        </div>
    );
};
