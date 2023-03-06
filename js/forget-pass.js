import {getParentElement, random} from './framework-lmt.js'
$(document).on('click', '#form .btn--submit', function() {      
    let submit = false;    
    if(checkValueInputMatch('phone','#phonenumber') == true && vertify == true) submit = true;
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

// Get data initial
let amountAccount = 0
function getData() {
    if(localStorage.getItem('amount-acc--@mtlight')) {
        amountAccount = Number.parseInt(localStorage.getItem('amount-acc--@mtlight'))
    }
}
getData()

//Bo hanh vi mac dinh
$('#form').on('submit', function(e) {            
    e.preventDefault();
})

// Check value có khớp không
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

$(document).on('click', '#form .btn--send-code', function() {               
    if (checkPhoneNumber('#form #phonenumber')) {
        vertificationCode = createRandomStr()
        sendMessage(`Mật khẩu mới của bạn là: ${vertificationCode}`)
        removeCheck()
        $('#vertifycode').val('') 
        localStorage.setItem(`acc-${crrAccount}--@mtlight-password`, vertificationCode)  
    }    
})


function createRandomStr(n=8) {
  var text = "";
  var temp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < n; i++){
    text += temp.charAt(random(0, temp.length-1));
  }
  return text;
}

$(document).on('click', '#form .btn--vertify', function() {                
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

$(document).on('input', '#form #vertifycode', function() {       
    removeCheck()
})  

function removeCheck() {
    $('#vertifycode').parent().removeClass('incorrect')
    $('#vertifycode').parent().removeClass('correct')
}

let vertificationCode
function checkVertify(selector = '#vertifycode') {
    let value = $(selector).val()
    if (vertificationCode) {
        if (value.trim().length == 8 && value == vertificationCode.toString()) {
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
                crrAccount = i+1                               
                return true;
            }
        }
    } else {        
        const formgroup = $(getParentElement($(selector)[0], 'form-group'))
        formgroup.addClass('message')  
        return false;
    }  
} 

$(document).on('input', '.form-group input', function() {
    const formgroup = $(getParentElement(this, 'form-group'))
    formgroup.removeClass('message')
})

function sendMessage(message, sender = 'MT-LIGHT') {
    $('#message-vertify').children('.name-sender').text(sender)
    $('#message-vertify').children('.content-message').text(message)
    $('#message-vertify').addClass('active')
    setTimeout(() => $('#message-vertify').removeClass('active'), 5000)
}

$(document).on('click', '#message-vertify', function() {
    $('#vertifycode').val(vertificationCode)
    $('#message-vertify').removeClass('active')
})