import React from 'react';

function index(props) {
    return (
   
        <>
      

<div class="containergame">
  <div class="game">
    <canvas class="webcam" width={640} height={480}></canvas>
    <div class="timer"><span class="time">01:00</span></div>
    <div class="distance"><span class="total">000</span> /<span>100</span></div>
    <div class="movement"><span class="total">00%</span></div>
  </div>
</div>

<div class="howto ui is-visible">
  <svg viewBox="0 0 191.99 60.82">
    <path d="M28.3,10.23A22.3,22.3,0,1,1,6,32.53a22.29,22.29,0,0,1,22.3-22.3m0-6a28.3,28.3,0,1,0,28.29,28.3A28.33,28.33,0,0,0,28.3,4.23Z" fill="#fff"/>
    <path d="M186,10.57V54.49H142.06V10.57H186m6-6H136.06V60.49H192V4.57Z" fill="#fff"/>
    <path d="M93.18,12l23.7,41.05H69.48l23.7-41m0-12L88,9,64.28,50.05l-5.19,9h68.19l-5.2-9L98.38,9l-5.2-9Z" fill="#fff"/>
  </svg>
  <h1>Red Light, Green Light</h1>
  <p>
    You have 60 seconds to reach the end of the field.
  </p>
  <p>
    When the doll is not watching, move your head to move forward and make the top left counter reach 100m.
  </p>
  <p>
    But watch out to not move when the doll is watching you. If the movement sensor reaches 100% on the bottom right, you are eliminated.
  </p>
  <p class="note">This demo requires access to your webcam.<br/>It currently doesn't work on iOs Safari.</p>
  <button class="cta start"></button>
</div>
<div class="dead ui">
  <svg viewBox="0 0 191.99 60.82">
    <path d="M28.3,10.23A22.3,22.3,0,1,1,6,32.53a22.29,22.29,0,0,1,22.3-22.3m0-6a28.3,28.3,0,1,0,28.29,28.3A28.33,28.33,0,0,0,28.3,4.23Z" fill="#fff"/>
    <path d="M186,10.57V54.49H142.06V10.57H186m6-6H136.06V60.49H192V4.57Z" fill="#fff"/>
    <path d="M93.18,12l23.7,41.05H69.48l23.7-41m0-12L88,9,64.28,50.05l-5.19,9h68.19l-5.2-9L98.38,9l-5.2-9Z" fill="#fff"/>
  </svg>
  <h1>You died!</h1>
  <p>
    Oops, it looks like you were moving too much or your reached the timeout...
  </p>
  <button class="cta replay replay1 is-ready">Replay</button>
</div>
<div class="win ui">
  <svg viewBox="0 0 191.99 60.82">
    <path d="M28.3,10.23A22.3,22.3,0,1,1,6,32.53a22.29,22.29,0,0,1,22.3-22.3m0-6a28.3,28.3,0,1,0,28.29,28.3A28.33,28.33,0,0,0,28.3,4.23Z" fill="#fff"/>
    <path d="M186,10.57V54.49H142.06V10.57H186m6-6H136.06V60.49H192V4.57Z" fill="#fff"/>
    <path d="M93.18,12l23.7,41.05H69.48l23.7-41m0-12L88,9,64.28,50.05l-5.19,9h68.19l-5.2-9L98.38,9l-5.2-9Z" fill="#fff"/>
  </svg>
  <h1>You won!</h1>
  <p>
    Well done, you survived... for now.
  </p>
  <button class="cta replay replay2 is-ready">Replay</button>
</div>

        
        
        </>
    );
}

export default index;