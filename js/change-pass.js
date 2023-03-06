import {getParentElement, random} from './framework-lmt.js'
let amountAccount = 0
// Input san so dien thoai
function initial() {
    let phone = localStorage.getItem(`acc-${crrAccount}--@mtlight-phone`)
    $('#phonenumber').val(phone)
}

function start() {
    initial()
    getData()
}

start()


// Khi nhan doi mat khau
$(document).on('click', '#form .btn--submit', function() {      
    let submit = false; 
    
    //Kiem tra mat khau cu da khop chua
    if(checkValueInputMatch('password','#password') == true) submit = true;
    $('#form').on('submit', function(e) {                     
        e.preventDefault();              
        if (submit) {
            changePassword()
            $('#notify.overlay').css('display', 'flex');
        }
    }) 
})

function changePassword() {
    let newPassword = $('#new-password').val()
    localStorage.setItem(`acc-${crrAccount}--@mtlight-password`, newPassword);
}

function getData() {
    if(localStorage.getItem('amount-acc--@mtlight')) {
        amountAccount = Number.parseInt(localStorage.getItem('amount-acc--@mtlight'))
    }
}


function checkValueInputMatch(option, selector) {
    let value = $(selector).val()
    if (amountAccount == 0) {
        const formgroup = $(getParentElement($(selector)[0], 'form-group'))        
        formgroup.addClass('message')
        return false; 
    } 

    let data = localStorage.getItem(`acc-${crrAccount}--@mtlight-${option}`)
    console.log(data, value)
    if (data == value) {        
        return true
    }   
    const formgroup = $(getParentElement($(selector)[0], 'form-group'))
    formgroup.addClass('message')
    return false
} 

//Bỏ thông báo khi input
$(document).on('input', '.form-group input', function() {
    const formgroup = $(getParentElement(this, 'form-group'))
    formgroup.removeClass('message')
})

//Bo hanh vi mac dinh
$('#form').on('submit', function(e) {            
    e.preventDefault();
})
