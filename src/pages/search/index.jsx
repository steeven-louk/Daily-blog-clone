import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './styles/style.scss'
import CardList from '../../components/cardList';


const Search = () => {

    const URL = "https://dev.to/api/articles";

    const [getFeed, setgetFeed] = useState([]);
    const [query, setQuery] = useState('');

    const getfeed = async() =>{
       try {
        const item = await axios.get(URL);
        setgetFeed(item.data)
        
       } catch (error) {
           console.log('err', error.message);
       }
    }



    const handleChange = (e) =>{
        e.preventDefault();

        if(!query) return [];

        
    }


console.log( query)
    useEffect(() => {
       getfeed();
    }, []);

  return (
      
    <div className='feed__section'>
        <div className="feed__container">
            <div className="container">
                <div className="title d-flex justify-content-between">
                   <form onSubmit={handleChange} className="form-group">
                   <FontAwesomeIcon
                    className="search-icon text-muted"
                    icon="fa-solid fa-magnifying-glass"
                  />
                   <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query} autoFocus className="form-control bg-dark text-white" />
                     
                    </form>
                </div>
                <div className="row">
                {getFeed && getFeed.map(feed =>(
                    <CardList feed={feed} key={feed.id} />
                ))}
                    
                </div>
            </div>



        </div>
    </div>
  )
}

export default Search