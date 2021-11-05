import React from 'react';
import '../styles/Sort.css';
import { motion } from 'framer-motion';

const Sort = (props) => {

    const handleClick = (e) => {
        const filters = document.querySelectorAll('.filter');
        filters.forEach(filter=>{
            filter.classList.remove('selected');
        })
        e.target.classList.add('selected');
        props.parentData(e.target.textContent);
    }

    return(
        <div className="sort">
            <motion.h1 
                whileHover={{
                    scale: 1.2
                }}

                whileTap={{
                    scale: 0.8
                }}
                onClick={handleClick}     
                className="filter selected">All</motion.h1>
            <motion.h1 
                onClick={handleClick}
                whileHover={{
                    scale: 1.2
                }}

                whileTap={{
                    scale: 0.8
                }} 
                className="filter">Books</motion.h1>
            <motion.h1 
                onClick={handleClick}
                whileHover={{
                    scale: 1.2
                }}

                whileTap={{
                    scale: 0.8
                }} 
                className="filter">Proffessional</motion.h1>
        </div>
    )
}

export default Sort;