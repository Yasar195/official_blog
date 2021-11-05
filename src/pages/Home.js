import React, {useEffect, useState} from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Sort from '../components/Sort';
import Blogs from '../components/Blogs';

const Home = () => {

    const [data, setData] = useState([{heading: '', sub_heading: ''}]);
    const value = 0;

    useEffect(()=> {
        fetch('/posts')
            .then(response => response.json())
            .then(contents => setData(contents))
    }, [value])

    const callBack = (childData) => {
        if(childData != 'All'){
            fetch(`/posts/${childData}`)
                .then(response => response.json())
                .then(contents => setData(contents))
        }
        else{
            fetch(`/posts`)
                .then(response => response.json())
                .then(contents => setData(contents))
        }
    }

    return(
        <div className="page">
            <Header/>
            <Sort parentData = {callBack}/>
            <div className="blog">
                <Blogs data={data}/>
            </div>
        </div>
    )
}

export default Home;