import React from 'react'
import styles from './../components/Cabeçalho.modules.css'
export default function Cabeçalho() {
  return (
    <div  className='divmaior'> 
 <div className='cima'>
    
    <p className='p'>Demo Stream</p>
    <button className='botao'> Log in</button>
    <button className='botao1'>Start your free trial</button>
    </div>
    <div className='cima2'>
        <p className='paragrafo'>Popular titles</p>
    </div>
    <div className='card'>
      <p className='paragrafoo'>Series</p>
      <p className='paragrafofinal'>popular movies</p>
    </div>
    
    
    <div className='card'>
      <p className='paragrafoo'>Movies</p>
      <p className='paragrafofinal'>popular movies</p>
      </div>

 
    <footer>
      <h1 className='pp'>home |</h1>
      <h1 className='pp'> terms and conditions |</h1>
      <h1 className='pp'> privacy policy |</h1>
      <h1 className='pp'> Collection Statement |</h1>
      <h1 className='pp'> help |</h1>
      <h1 className='pp'>Manage Account</h1>
      <br></br>
      <br></br>
            <img src='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/6a003650d877d7149b8a1dbfbb0e74451a9d4f0c/assets/social/facebook-white.svg'></img>
            <img src='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/6a003650d877d7149b8a1dbfbb0e74451a9d4f0c/assets/social/twitter-white.svg'></img>
      
      
      <img src='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/6a003650d877d7149b8a1dbfbb0e74451a9d4f0c/assets/social/instagram-white.svg'></img>
    <img className='imagem' src='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/6a003650d877d7149b8a1dbfbb0e74451a9d4f0c/assets/store/play-store.svg'></img>
    <img className="imagem "src='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/6a003650d877d7149b8a1dbfbb0e74451a9d4f0c/assets/store/app-store.svg'></img>
    <img  className="imagem"src='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/6a003650d877d7149b8a1dbfbb0e74451a9d4f0c/assets/store/windows-store.svg'></img>
    </footer>

      
    </div>
  )
}
