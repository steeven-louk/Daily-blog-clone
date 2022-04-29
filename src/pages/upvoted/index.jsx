import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/style.scss'
import CardList from '../../components/cardList';


const Upvoted = () => {

    const URL = "https://dev.to/api/articles";

    const [getUpvoted, setgetUpvoted] = useState([]);

    const getfeed = async() =>{
       try {
        const item = await axios.get(URL);
        setgetUpvoted(item.data)
        
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
                    <h3 className='text-white'>Upvoted</h3>
                    <h4 className='text-muted'>Last week </h4>
                </div>
                <div className="row">
                {getUpvoted && getUpvoted.sort((a,b) => b.positive_reactions_count - a.positive_reactions_count).map(upvoted =>(
                    <CardList feed={upvoted} key={upvoted.id} />
                ))}
                    
                </div>
            </div>



        </div>
    </div>
  )
}

export default Upvoted