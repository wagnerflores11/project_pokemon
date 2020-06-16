import React from 'react';
import './App.css';

import logo from './img/logo2.png';



function App() {
  return (

    <div className='container'>
      <img src={logo} alt='Trex' />


      <div className="content">
        <p><strong>DIVIDENDO </strong>cadastro de dividas
      </p>

      <form>
        <label htmlFor='email'>E-MAIL *</label>
        <input type='email' id='email' placeholder='Seu melhor e-mail'/>
        <button className= "btn" type='submit'>Entrar</button>
      </form>

      </div>
    </div>

  );
}

export default App;
