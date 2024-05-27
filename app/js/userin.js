// import '../scss/styles.scss';

import jQuery from 'jquery';
import 'bootstrap';

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
import Swal from 'sweetalert2';
import Popper from 'popper.js';


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

















const jq2 = jQuery.noConflict(true);


//jq2 = jQuery.noConflict();
jq2(function($) {
  // Check if DataTable is already initialized
  // $(document).ready(function() {
    // Check if DataTable is already initialized

    const applynav = document.getElementById('loan-application-link');
    const statusnav = document.getElementById('loan-status-link');

    const row = document.getElementById('13');
    const row2 = document.getElementById('12');
    const row3 = document.getElementById('10');
    const row4 = document.getElementById('11');

    if (applynav) {
      applynav.addEventListener('click', (e) => {
        console.log('Loan applynav link clicked');
        e.preventDefault(); // Prevent the default link behavior
        row.style.display = 'none'; // Make the row invisible
        row2.style.display = 'none'; // Make the row invisible
        row3.style.display = 'none'; // Make the row invisible

      });
    } else {
      console.log('Loan application link or row not found');
    }


    if (statusnav) {
      const row3 = document.getElementById('10');
      row3.style.display = 'block';
      statusnav.addEventListener('click', (e) => {
        console.log('Loan statusnav link clicked');
        e.preventDefault(); // Prevent the default link behavior
        row.style.display = 'none'; // Make the row invisible
        row2.style.display = 'none'; // Make the row invisible
        row4.style.display = 'none'; // Make the row invisible
        row3.style.display = 'block'; // Make the row ivisible

      });
    } else {
      console.log('Loan application link or row not found');
    }


    $('#signupLink').click(function(e) {
      e.preventDefault();
      $('#loginform').addClass('hidden');
      $('#registerform').removeClass('hidden');
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







    $("#loanform").on('submit', function(e) {
      e.preventDefault();
    
      var storedUserid = sessionStorage.getItem('userid');
      var storedPhonesession = sessionStorage.getItem('phonesession');
      
      
      $.ajax({
        data: $('#loanform').serialize() + '&action=moringa_application' + '&userid=' + storedUserid + '&phonesession=' + storedPhonesession,
        url: "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa",     
         type: "POST",
        dataType: 'json',
        success: function(response) {
    
    
          if (response.result === 'success') {
          
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
    
        } else {
            console.error('Failed to fetch loan types: ' + response.message);
        }
    
    
    
    
    
    
    
    
    
          
          
          
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
    
    
    
      $('body').on('click', '.apprv', function () {
        //var data = table.row($(this).parents('tr')).data();
        var user_id = $(this).data('user_id');
        var amount = $(this).data('amount');
        var phone = $(this).data('phone');
        var loanserial = $(this).data('loanserial');
    
        console.log("Complete application attempt", user_id);
        var storedUserid = sessionStorage.getItem('userid');

        // // Pass data to modal inputs
        // $('#userId').val(user_id);
        // $('#amount').val(amount);
        // $('#phone').val(phone);
        // $('#loanSerial').val(loanserial);
    
        $.ajax({
          data: $('#loanform').serialize() + '&action=moringa_approve' + '&storedUserid=' + storedUserid +'&loanserial=' + loanserial + '&amount=' + amount,
          url: "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa",     
           type: "POST",
          dataType: 'json',
          success: function(response) {
      
      
            if (response.result === 'success') {
            
              Swal.fire({
                title: 'loan approval Success!',
                text: 'Welcome to Moringa LOAN app',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Clear cache and reload
                    window.location.href = 'userin.html';
                }
            });
      
          } else {
              console.error('Failed to fetch loan types: ' + response.message);
          }
      
      
      
      
      
      
      
      
      
            
            
            
            //API LOGIN
                                    //return
            
          },
          error: function(data) {
            console.log("Error during approval", data);
            if (data.responseJSON?.message) {
              let errorText = data.responseJSON.message;
              if (data.responseJSON.errors?.email?.[0]) {
                errorText += " :" + data.responseJSON.errors.email[0];
              }
              Swal.fire({
                title: 'approval Error!',
                text: errorText,
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }
          },
          complete: function(data) {
            console.log("Complete approval attempt", data);
          },
        });
    
        // Open the modal
      // ('#approveModal').modal('show');
    
      });















  
    $.ajax({
      data: $('#loanform').serialize() + '&action=moringa_dashboard',
      url: "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa",     
       type: "POST",
      dataType: 'json',
      success: function(response) {
  
  
        if (response.result === 'success') {
        
          var loan_applications_count = response.data; // Change from response.loan_types to response.data
          var users_count = response.data2; // Change from response.loan_types to response.data
  
        //  $('#43 .card-category').text('Registered Users');
         // $('#43 .card-title').eq(0).text(loan_applications_count);
          $('#43 .card-title').eq(1).text(users_count);
          $('#42 .card-title').eq(1).text(loan_applications_count);






  
      } else {
          console.error('Failed to fetch loan types: ' + response.message);
      }
  
        
      },
      error: function(data) {
        console.log("Error during application", data);
       
      },
      complete: function(data) {
        console.log("Complete application attempt", data);
      },
    });











    if ($.fn.DataTable.isDataTable('#datatableloanstatus')) {
        // Destroy the existing DataTable instance
        $('#datatableloanstatus').DataTable().destroy();
    }



    $('#datatableloanstatus').DataTable({
      "ajax": {
          "url": "https://mail.helb.co.ke:1930/mobiapi.php?rquest=moringa&action=moringa_getloans",
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
          { "data": "user_id" },
          { "data": "amount" },

          { "data": "phone" },
          { "data": "loanserial" },
          { "data": "application_date" },

          { "data": "status" },
          { "data": "loan_type_id" },
          { "data": "approver_id" },

          {
            "data": null,
            "render": function(data, type, row) {
              return "<button class='btn btn-success btn-round apprv' " +
                     "data-user_id='" + row.user_id + "' " +
                     "data-amount='" + row.amount + "' " +
                     "data-phone='" + row.phone + "' " +
                     "data-loanserial='" + row.loanserial + "'>APPROVE</button>";
            }
          }
      ],
      // "searching": false,  // Disable search box
      // "paging": false,     // Disable pagination
      // "info": false        // Disable information about number of entries
  });

















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
           
        ],
        // "searching": false,  // Disable search box
        // "paging": false,     // Disable pagination
        // "info": false        // Disable information about number of entries
    });
});






