import {getParentElement, random} from './framework-lmt.js'
function initial() {  
    $('#province').find('option').remove().end().append('<option value="0">Địa chỉ (*)</option>')    
    
    $.each( provinces, function(index, item) {
        $('#province').append(`<option value="${item.id}">${item.name}</option>`)
    })
}

initial()

$(document).on('click', '#form-register .btn--submit', function() {      
    let submit = false;    
    if(checkAddress() == true && checkVertify() == true && vertify == true) submit = true;
    $('#form-register').on('submit', function(e) {            
        e.preventDefault();              
        if (submit) {
            saveAccount()
            $('#notify.overlay').css('display', 'flex');
        }
    }) 
})

let amountAccount = 0
function saveAccount() {
    amountAccount++
    //Get value input 
    let name = $('#fullname').val().toUpperCase()
    let phone = $('#phonenumber').val();
    let province = $('#province').val();
    let birthday = $('#birthday').val()
    let password = $('#password').val()   
    save('name', name)
    save('birthday', birthday)
    save('province', province)
    save('phone', phone)
    save('password', password)
    localStorage.setItem('amount-acc--@mtlight', amountAccount)
    function save(key, data) {
        localStorage.setItem(`acc-${amountAccount}--@mtlight-${key}`, data)
    }
}

function getData() {
    if(localStorage.getItem('amount-acc--@mtlight')) {
        amountAccount = Number.parseInt(localStorage.getItem('amount-acc--@mtlight'))
    }
}

getData()

$(document).on('click', '#notify .exit', function() {
    const overlay = getParentElement(this, 'overlay')
    $(overlay).css('display', 'none')
})

$('#form-register').on('submit', function(e) {            
    e.preventDefault();
})

function checkAddress() {
    let selector = '#province'
    let value = $(selector).val();
    const formgroup =  getParentElement($(selector)[0], 'form-group')
    if (value == '0') {
        $(formgroup).addClass('message')
        return false
    } else {
        $(formgroup).removeClass('message')
        return true
    }
}

$(document).on('change', '#province', function() {
    checkAddress()
})

$(document).on('click', '#form-register .btn--send-code', function() {               
    if (checkPhoneNumber('#form-register #phonenumber')) {
        vertificationCode = random(100000, 999999)
        sendMessage(`Mã xác thực của bạn là: ${vertificationCode}`)
        removeCheck()
        $('#vertifycode').val('')          
    }    
})

$(document).on('click', '#form-register .btn--vertify', function() {                
    addCheckVertify('#vertifycode')        
})

var vertify
function addCheckVertify(selector) {
    const formgroup = $(getParentElement($(selector)[0], 'form-group'))    
    if (checkVertify(selector)) {
        vertify = true; 
        formgroup.addClass('correct')   
        formgroup.removeClass('incorrect')   
    } else {  
        vertify = false
        formgroup.addClass('incorrect') 
        formgroup.removeClass('correct')     
    }
}

$(document).on('input', '#form-register #vertifycode', function() {       
    removeCheck()
})  

$(document).on('input', '.form-group input', function() {
    const formgroup = $(getParentElement(this, 'form-group'))
    formgroup.removeClass('message')
})

function removeCheck() {
    $('#vertifycode').parent().removeClass('incorrect')
    $('#vertifycode').parent().removeClass('correct')
}

let vertificationCode
$(document).on('click', '#form-register .btn--send-code', function() {               
    if (checkPhoneNumber('#form-register #phonenumber')) {
        vertificationCode = random(100000, 999999)
        sendMessage(`Mã xác thực của bạn là: ${vertificationCode}`)                      
    }
    
})

function checkVertify(selector = '#vertifycode') {
    let value = $(selector).val()
    if (vertificationCode) {
        if (value.trim().length == 6 && value == vertificationCode.toString()) {
            return true;
        }
    }
    return false;
}


function checkPhoneNumber(selector) {
    let value = $(selector).val()     
    if(amountAccount != 0) {       
        for(var i = 0; i < amountAccount; i++) {
            let data = localStorage.getItem(`acc-${i+1}--@mtlight-phone`)            
            if (data == value) {                
                const formgroup = $(getParentElement($(selector)[0], 'form-group'))        
                formgroup.addClass('message')
                return false;
            }
        }
    }       
    let regex = /^0[0-9]{9}$/
    if(value.trim().length == 10 && value.trim().indexOf('0') == 0 && regex.test(value) == true) 
    return true;
    return false;
} 

function sendMessage(message, sender = 'MT-LIGHT') {
    $('#message-vertify').children('.name-sender').text(sender)
    $('#message-vertify').children('.content-message').text(message)
    $('#message-vertify').addClass('active')
    setTimeout(() => $('#message-vertify').removeClass('active'), 5000)
}

$(document).on('click', '#message-vertify', function() {
    $('#message-vertify').removeClass('active')
})