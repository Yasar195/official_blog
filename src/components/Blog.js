import React from 'react';
import '../styles/Blog.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = (props) => {

    const heading = props.heading;
    const para = props.para;

    return (
        <Link className="link" to={`/${heading}`}>
            <motion.div 
                className="content"
                whileHover={{
                    scale: 1.1
                }}    
                whileTap={{
                    scale: 0.9
                }}
            >
                <h1 className="title">{heading}</h1>
                <p className="story">{para}</p>
            </motion.div>
        </Link>
    )
}

export default Blog;