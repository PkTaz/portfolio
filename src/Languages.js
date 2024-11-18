import React from 'react';
import './Languages.css'; // Optional, for styling


const Lcards = () => {
    return (
<div class="cardcontainer">
  <div class="card">
    <h3 class="title">HTML</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/HTML.svg`}></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">CSS</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/CSS.svg`}></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">JavaScript</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/JS.svg`}></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">TypeScript</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/TS.svg`}></img>
    </div>
  </div>
    <div class="card">
    <h3 class="title">Python</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/Python.png`}></img>
    </div>
  </div>
    <div class="card">
    <h3 class="title">Node.js</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/NODEJS.svg`}></img>
    </div>
  </div>
    <div class="card">
    <h3 class="title">REACT</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/REACT.svg`}></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Angular</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/Angular.svg`}></img>
    </div>
  </div>
    <div class="card">
    <h3 class="title">MySQL</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/MySQL.png`}></img>
    </div>
  </div>
      <div class="card">
    <h3 class="title">GitHub</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
      <img className='L-icon' src={`${process.env.PUBLIC_URL}/assets/GitHub.png`}></img>
    </div>
  </div>
</div>
    );
};

export default Lcards