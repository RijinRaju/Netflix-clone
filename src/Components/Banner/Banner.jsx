import React,{useEffect,useState} from 'react';
import './Banner.css';
import axios from 'axios';
import {API_KEY,baseUrl,imageUrl} from '../../constants/Constants';

function Banner() {

const[Movie, setMovie]= useState()
useEffect(() => {
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>
    {
         setMovie(response.data.results[7])


       
    })   

}, [])

    return (
        <div className="banner" style={{

            backgroundImage:` url(${Movie ? imageUrl+Movie.backdrop_path :""})`
        }}>
            <div className="content">
                <h1 className="title">{Movie ? Movie.title :""}</h1>
                <div className="banner-buttens">
                    <button className="button">play</button>
                    <button className="button">Mylist</button>
                </div>
             <h1 className="discription">{Movie ? Movie.overview:""}</h1>
                <div className="fade_bottom">

                </div>
            </div>
        </div>
    )
}

export default Banner
