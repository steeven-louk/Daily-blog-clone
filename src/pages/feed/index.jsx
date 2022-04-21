import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/style.scss'
import CardList from '../../components/cardList';
const Feed = () => {

    const URL = "https://dev.to/api/articles"
    const [getFeed, setgetFeed] = useState([]);


    const getfeed = async() =>{
       try {
        const item = await axios.get(URL);
        setgetFeed(item.data);
        console.log('item',item.data);
        
       } catch (error) {
           console.log('err', error.message);
       }
    }


    useEffect(() => {
       getfeed();
    }, []);

  return (
    <div className='feed__section'>
        <div className="feed__container">
            <div className="container">
                <div className="title d-flex justify-content-between">
                    <h3 className='text-white'>My feed</h3>
                    <h4 className='text-muted'>Add to shorcut +</h4>
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

export default Feed