import React, {useEffect, useState} from 'react';
import '../styles/Read.css';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Read = () =>{

    const [data, setData] = useState([{heading: '', content: ''}])
    const value = 0;

    useEffect(()=> {
        const path = window.location.pathname;
        fetch(`/posts${path}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [value])

    return(
        <div className="read">
            <Link to='/'>
                <div className="back">
                    <BiArrowBack color="rgb(145, 145, 248)" size="50"/>
                </div>
            </Link>
            <div className="content">
                    {
                        (
                            <h1 className="heading">{data[0].heading}</h1>
                        )
                    }
                    {
                        (
                            <p className="para">{data[0].content}</p>
                        )
                    }
                </div>
        </div>
    )
}

export default Read;
