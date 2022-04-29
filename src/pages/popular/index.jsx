import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import './styles/style.scss'
import CardList from '../../components/cardList';
const Popular = () => {

    const URL = "https://dev.to/api/articles/latest"
    const [getPopular, setgetPopular] = useState([]);


    const Popular = async() =>{
       try {
        const item = await axios.get(URL);
        setgetPopular(item.data);
        console.log('item',item.data);
        
       } catch (error) {
           console.log('err', error.message);
       }
    }


    useEffect(() => {
       Popular();
    }, []);

  return (
    <div className='feed__section'>
        <div className="feed__container">
            <div className="container">
                <div className="title pt-5 d-flex justify-content-between">
                    <h3 className='text-white'>Popular</h3>
                </div>
                <div className="row">
                {getPopular && getPopular.map(popular =>(
                    <CardList feed={popular} key={popular.id} />
                ))}
                    
                </div>
            </div>



        </div>
    </div>
  )
}

export default Popular