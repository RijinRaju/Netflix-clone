import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import Axios from '../../constants/Axios'
import axios from 'axios';
import { API_KEY, baseUrl,imageUrl } from '../../constants/Constants';
import YouTube from 'react-youtube';

function Rowpost(props) {
    const[movies,setMovies]=useState([]);


useEffect(()=>{
axios.get(props.url).then((response)=>{
console.log(response.data);

setMovies(response.data.results);

})

},[]);
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
   },
  };

  const HandleMovie=(id)=>{
      console.log(id);
      axios.get(`
      https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US
      `).then((response)=>{
        if(response.data.results.length!==0) {
        seturlId(response.data.results[0]);
        }
    else{
console.log("no data");
    }
    })
  }

  const [urlid,seturlId] =useState("")
    return (
    
        <div className="row">
            <h2>{props.title}</h2>  
            <div className="posters">
            {movies.map((obj)=>
                    <img onClick={()=>HandleMovie(obj.id)} className={props.isSmall?"smallPoster":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />   

                    )}
            
            </div>      
          {urlid && <YouTube opts={opts} videoId={urlid.key}></YouTube>}
        </div>
    );
}

export default Rowpost
