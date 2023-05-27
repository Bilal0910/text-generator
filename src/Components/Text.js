import React, { useEffect, useState } from 'react'
import './Text.css'

function Text() {

    const [textImage, setTextImage] = useState({
        topText : "",
        bottomtext : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [ allMemes, setAllMemes] = useState([])

    useEffect( () => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then( data => setAllMemes(data.data.memes))

    }, [textImage])

    function getImages() {

        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setTextImage( prevText => ({
                ...prevText,
                randomImage : url
        }))
    }
    
    function handlechange(e) {
      const {name, value} = e.target
      setTextImage( prevText => ({
        ...prevText,
        [name] : value
      })) 
      
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
                 value={textImage.bottomText}
                 onChange={handlechange}
          />
          <button className='form-button'
           onClick={getImages}
          >
            Get a new picture 🖼</button>
        </div>
        <div className="imageBorder">
           <img className='memeImage' src={textImage.randomImage} alt="" />
           <h2 className="meme--text top">{textImage.topText}</h2>
           <h2 className="meme--text bottom">{textImage.bottomText}</h2>
        </div>
        
        
    </main>
  )
}

export default Text
