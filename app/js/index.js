// Import styles
import '../scss/styles.scss';
import '../css/paper-dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import $ from 'jquery';
import Swal from 'sweetalert2';

// Use require.context to import all images from the folder
const images = require.context('../image', false, /\.(png|jpe?g|svg)$/);

// Create an object to store the imported images
const imagesObj = {};
images.keys().forEach((key) => {
  const imageName = key.replace('./', ''); // Remove the './' from the key
  imagesObj[imageName] = images(key);
});
function checkFields() {
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();
    
    // Return true if both email and password are not empty, false otherwise
    return email !== '' && password !== '';
}
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


});

$(document).ready(function() {
  $('#signupLink').click(function(e) {
    e.preventDefault();
    $('#loginform').addClass('hidden');
    $('#registerform').removeClass('hidden');
  });

  $("#loginform").on('submit', function(e) {
    e.preventDefault();


    
    $.ajax({
      data: $('#loginform').serialize(),
      url: "https://mail.helb.co.ke:1930/mobiapi.php?rquest=getIPRSDatabyID&idno=28613556&serial_number=&fname=tony",
      type: "POST",
      dataType: 'json',
      success: function(data) {
        Swal.fire({
            title: 'Login Success!',
            text: 'Welcome to Moringa LOAN app',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear cache and reload
                window.location.href = 'userin.html';
            }
        });
        
        
        //API LOGIN
                                //return
        
      },
      error: function(data) {
        console.log("Error during login", data);
        if (data.responseJSON?.message) {
          let errorText = data.responseJSON.message;
          if (data.responseJSON.errors?.email?.[0]) {
            errorText += " :" + data.responseJSON.errors.email[0];
          }
          Swal.fire({
            title: 'Login Error!',
            text: errorText,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      },
      complete: function(data) {
        console.log("Complete login attempt", data);
      },
    });
  });

  $("#registerform").on('submit', function(e) {
    e.preventDefault();


    
    $.ajax({
      data: $('#registerform').serialize(),
      url: "https://mail.helb.co.ke:1930/mobiapi.php?rquest=getIPRSDatabyID&idno=28613556&serial_number=&fname=tony",
      type: "POST",
      dataType: 'json',
      success: function(data) {
        Swal.fire({
            title: 'Register Success!',
            text: 'Welcome to Moringa LOAN app',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear cache and reload
                window.location.href = 'index.html';
            }
        });
        
        
        //API LOGIN
                                //return
        
      },
      error: function(data) {
        console.log("Error during registration", data);
        if (data.responseJSON?.message) {
          let errorText = data.responseJSON.message;
          if (data.responseJSON.errors?.email?.[0]) {
            errorText += " :" + data.responseJSON.errors.email[0];
          }
          Swal.fire({
            title: 'Register Error!',
            text: errorText,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      },
      complete: function(data) {
        console.log("Complete register attempt", data);
      },
    });
  });

});

console.log(imagesObj); // Debugging purpose to see the imported images
