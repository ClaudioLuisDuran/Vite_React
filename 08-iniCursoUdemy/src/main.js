import './css/style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import logo1 from './img/logo4.jpg'

import { setupCounter } from './counter.js'
import '@dile/dile-info-box/dile-info-box.js';
/* import '@spectrum-web-components/color-wheel/sp-color-wheel.js';
 */
document.querySelector('#app').innerHTML = `
 
<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <img src="${logo1}" class="logo" /> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    <dile-info-box>
      Click on the Vite logo to learn more
      </dile-info-box>
      `

setupCounter(document.querySelector('#counter'))
