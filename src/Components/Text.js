import React, { useState } from 'react'
import './Text.css'
import data from '../data.js'

function Text() {

    const [textImage, setTextImage] = useState({
        topText : "",
        bottomtext : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    function getImages() {
        const imageArray = data.data.memes
        const randomNum = Math.floor(Math.random() * imageArray.length)
        const url = imageArray[randomNum].url
        setTextImage( prevText => ({
                ...prevText,
                randomImage : url
        }))
    }
    
    function handlechange() {
      
    }


  return (
    <main>
        <div className='form'>
          <input className='form-input' 
                 type="text" 
                 placeholder='top text here'
                 name='topText'
                 value={textImage.topText}
                 onChange={handlechange}
          />
          <input className='form-input'
                 type="text"
                 placeholder='bottom text here'
                 name='bottomText'
                 value={textImage.bottomtext}
                 onChange={handlechange}
          />
          <button className='form-button'
           onClick={getImages}
          >
            Get a new picture 🖼</button>
        </div>
        <div className="imageBorder">
           <img className='memeImage' src={textImage.randomImage} alt="" />
        </div>
        
        
    </main>
  )
}

export default Text
