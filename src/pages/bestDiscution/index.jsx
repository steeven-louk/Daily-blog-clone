import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/style.scss'
import CardList from '../../components/cardList';


const BestDiscution = () => {

    const URL = "https://dev.to/api/articles";

    const [getDiscution, setgetDiscution] = useState([]);

    const getfeed = async() =>{
       try {
        const item = await axios.get(URL);
        setgetDiscution(item.data)
        
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
                    <h3 className='text-white'>Best discussions</h3>
                </div>
                <div className="row">
                {getDiscution && getDiscution.sort((a,b) => b.comments_count - a.comments_count).map(discution =>(
                    <CardList feed={discution} key={discution.id} />
                ))}
                    
                </div>
            </div>



        </div>
    </div>
  )
}

export default BestDiscution