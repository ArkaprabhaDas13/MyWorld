import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import earth_144 from './assets/earth_144.png'
import earth_360 from './assets/earth_360.png'
import earth_720 from './assets/earth_720.jpg'
import earth_1080 from './assets/earth_1080.jpeg'
import './App.css'

function App() {
  const [res, setRes] = useState('144p');

  const images = {
    '144p': earth_144,
    '360p': earth_360,
    '720p': earth_720,
    '1080p': earth_1080
  };

  function imageSelect()
  {
    return images[res];
  }

  return (
    <>
      <div className='page' style={{display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
        <div>
          <h1 style={{color: "white"}}> Hi Sam!</h1>
          <p style={{color: "white", padding: "20px"}}>I think I like you 😍 </p>
          
          <select name="" id="select-box" className='selection-box' onChange={(e)=>{setRes(e.target.value)}}>
            <option className='selection-box' value="144p">144p</option>
            <option className='selection-box' value="360p">360p</option>
            <option className='selection-box' value="720p">720p</option>
            <option className='selection-box' value="1080p">1080p</option>
          </select>

          <img style={{width:"100vw"}} src={imageSelect()} alt="" />
        </div>
        
        <footer style={{color:"white", padding: "20px"}}>Made with love by Arka ❤️</footer>
      </div>


    </>
  )
}

export default App
