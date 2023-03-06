import {getParentElement, random} from './framework-lmt.js'

$(document).on('click', '#form .btn--submit', function() {      
    let submit = false;    
    checkValueInputMatch('password','#password')
    if(checkValueInputMatch('phone','#phonenumber') == true && checkValueInputMatch('password','#password') == true) submit = true;
    $('#form').on('submit', function(e) {            
        e.preventDefault();              
        if (submit) {
            login = true
            localStorage.setItem('login--@mtlight', 'true')
            localStorage.setItem('crr-acc--@mtlight', crrAccount)
            $('#notify.overlay').css('display', 'flex');
        }
    }) 
})

let amountAccount = 0

function getData() {
    if(localStorage.getItem('amount-acc--@mtlight')) {
        amountAccount = Number.parseInt(localStorage.getItem('amount-acc--@mtlight'))
    }
}

getData()

function checkValueInputMatch(option, selector) {
    let value = $(selector).val()
    if (amountAccount == 0) {
        const formgroup = $(getParentElement($(selector)[0], 'form-group'))        
        formgroup.addClass('message')
        return false; 
    }           
    let data
    for(var i = 0; i < amountAccount; i++) {      
        data = localStorage.getItem(`acc-${i+1}--@mtlight-${option}`)            
        if (data == value) {
            crrAccount = i + 1
            return true
        }
    }
    const formgroup = $(getParentElement($(selector)[0], 'form-group'))
    formgroup.addClass('message')
    return false
} 

$(document).on('input', '.form-group input', function() {
    const formgroup = $(getParentElement(this, 'form-group'))
    formgroup.removeClass('message')
})

$(document).on('click', '#notify .exit', function() {
    const overlay = getParentElement(this, 'overlay')
    $(overlay).css('display', 'none')
})

$('#form').on('submit', function(e) {            
    e.preventDefault();
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

$(document).on('input', '#form #vertifycode', function() {       
    removeCheck()
})  

function removeCheck() {
    $('#vertifycode').parent().removeClass('incorrect')
    $('#vertifycode').parent().removeClass('correct')
}

let vertificationCode
$(document).on('click', '#form .btn--send-code', function() {               
    if (checkPhoneNumber('#form #phonenumber')) {
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