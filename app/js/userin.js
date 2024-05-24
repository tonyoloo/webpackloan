import '../scss/styles.scss';
import '../css/paper-dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import $ from 'jquery';

// Use require.context to import all images from the folder
const images = require.context('../image', false, /\.(png|jpe?g|svg)$/);

// Create an object to store the imported images
const imagesObj = {};
images.keys().forEach((key) => {
  const imageName = key.replace('./', ''); // Remove the './' from the key
  imagesObj[imageName] = images(key);
});

// Example of how to use the imported images
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.image-container');
  if (container) {
    Object.keys(imagesObj).forEach((imageName) => {
      const imgElement = document.createElement('img');
      imgElement.src = imagesObj[imageName];
      imgElement.alt = imageName;
      container.appendChild(imgElement);
    });
  }

  const loanApplicationLink = document.getElementById('loan-application-link');
  console.log('Loan application link:', loanApplicationLink);

  if (loanApplicationLink) {
    console.log('Loan application link found, adding click event listener');

    loanApplicationLink.addEventListener('click', (e) => {
      console.log('Loan application link clicked');
      e.preventDefault(); // Prevent the default link behavior
      console.log('Default action prevented, navigating to google.com');
      window.location.href = 'index.html'; // Navigate to google.com
    });
  } else {
    console.log('Loan application link not found');
  }
});

$(document).ready(function() {
  $('#signupLink').click(function(e) {
    e.preventDefault();
    $('#loginform').addClass('hidden');
    $('#registerform').removeClass('hidden');
  });
});
