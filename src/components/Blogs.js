import React, { useEffect, useState } from 'react';
import '../styles/Blogs.css';
import Blog from './Blog';

const Blogs = (props) => {

    const data = props.data;

    return(
        <div className="blogs">
            {
                data.map((item)=> <Blog heading={item.heading} para={item.sub_heading}/>)
            }
        </div>
    )
}

export default Blogs;