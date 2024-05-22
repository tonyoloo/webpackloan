// Import our custom CSS
import '../scss/styles.scss'
import lolckenya from '../image/lolckenya.PNG';


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Add the image to the DOM
document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.createElement('img');
    imgElement.src = lolckenya;
    imgElement.alt = 'Example Image';
    document.getElementById('image-container').appendChild(imgElement);
  });