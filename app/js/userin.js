import '../scss/styles.scss';
import '../css/paper-dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'datatables.net-bs5';
import 'datatables.net-autofill-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-colreorder-bs5';
import 'datatables.net-fixedcolumns-bs5';
import 'datatables.net-fixedheader-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-rowgroup-bs5';
import 'datatables.net-rowreorder-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-scroller-bs5';
import 'datatables.net-searchbuilder-bs5';
import 'datatables.net-searchpanes-bs5';
import 'datatables.net-select-bs5';
import 'datatables.net-staterestore-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';
import $ from 'jquery';





$("#loanform").on('submit', function(e) {
  e.preventDefault();


  
  $.ajax({
    data: $('#loanform').serialize() + '&action=moringa_application',
    url: "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa",     
     type: "POST",
    dataType: 'json',
    success: function(data) {
      Swal.fire({
          title: 'loan application Success!',
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
      console.log("Error during application", data);
      if (data.responseJSON?.message) {
        let errorText = data.responseJSON.message;
        if (data.responseJSON.errors?.email?.[0]) {
          errorText += " :" + data.responseJSON.errors.email[0];
        }
        Swal.fire({
          title: 'application Error!',
          text: errorText,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    },
    complete: function(data) {
      console.log("Complete application attempt", data);
    },
  });
});






  // Check if DataTable is already initialized
  $(document).ready(function() {
    // Check if DataTable is already initialized
    if ($.fn.DataTable.isDataTable('#datatableviewusers')) {
        // Destroy the existing DataTable instance
        $('#datatableviewusers').DataTable().destroy();
    }


    $('#datatableviewusers').DataTable({
        "ajax": {
            "url": "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa&action=moringa_getusers",
            "type": "GET",
            "dataSrc": function (json) {
                if (json.result === 'success') {
                    return json.data;
                } else {
                    return [];
                }
            }
        },
        "columns": [
            { "data": "id" },
            { "data": "username" },
            { "data": "phone" },
            { "data": "email" },
            { "data": "created_at" },
            {
                "data": null,
                "defaultContent": "<button>Edit</button>"
            }
        ],
        // "searching": false,  // Disable search box
        // "paging": false,     // Disable pagination
        // "info": false        // Disable information about number of entries
    });
});

// Assuming you have an AJAX call to fetch loan types
$.ajax({
  "url": "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa&action=moringa_getloantype",
  type: 'GET',
  dataType: 'json',
  success: function(response) {
    if (response.result === 'success') {
      var loanTypes = response.data; // Change from response.loan_types to response.data
      var dropdown = $('#loan_type_dropdown');

      $.each(loanTypes, function(index, item) {
          dropdown.append($('<option></option>').text(item.type_name).val(item.id));
      });
  } else {
      console.error('Failed to fetch loan types: ' + response.message);
  }
  },
  error: function(xhr, status, error) {
      console.error('Error fetching loan types:', error);
  }
});



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

  const logoutLink = document.getElementById('logoutLink');
  console.log('Loan application link:', logoutLink);

  if (logoutLink) {
    console.log('Loan application link found, adding click event listener');

    logoutLink.addEventListener('click', (e) => {
      console.log('Loan application link clicked');
      e.preventDefault(); // Prevent the default link behavior
      console.log('Default action prevented, navigating to google.com');
      window.location.href = 'index.html'; // Navigate to google.com
    });
  } else {
    console.log('Loan application link not found');
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
