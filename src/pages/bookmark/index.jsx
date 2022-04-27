import React, { useEffect, useState } from 'react'
import './styles/style.scss'
import CardList from '../../components/cardList';


const Bookmark = () => {

   
    const [getBookmark, setbookmark] = useState([]);


    const getBook = async() =>{
       try {
           
        const bookmark = await JSON.parse(localStorage.getItem('article'));
        setbookmark(bookmark);
        
       } catch (error) {
           console.log('err', error.message);
       }
    }

console.log('book', getBookmark)
    useEffect(() => {
       getBook();
    }, []);

  return (
    <div className='feed__section'>
        <div className="feed__container">
            <div className="container">
            {getBookmark === null ? ('test du bookmark') :
                (
                    <div>
                    <div className="title d-flex justify-content-between">
                    <h3 className='text-white'>My feed</h3>
                    <h4 className='text-muted'>Add to shorcut +</h4>
                </div>
                <div className="row">
                {getBookmark && getBookmark.map(bookmark =>(
                    <CardList feed={bookmark} key={bookmark.id} />
                ))}
                    
                </div>
                    </div>
                )
            }
               
            </div>



        </div>
    </div>
  )
}

export default Bookmark