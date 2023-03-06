import {createListRandom, getParentElement} from './framework-lmt.js'
let listPlayingMovie = []
createListRandom(listPlayingMovie, 0, playingMovie.length - 1, playingMovie.length)
function showPlayingMovie() {
    $('#list-movie').html('')
    let listRandom = listPlayingMovie
    let list = playingMovie
    for(var i = 0; i < list.length; i++) {
        let row = `
                    <div class="row">

                        <div class="col-md-4 col-lg-3">
                            <a href="#">
                                <img src="${list[listRandom[i]].img}" class="w-100 rounded-2">
                            </a>
                        </div>

                        <div class="col-md-8 col-lg-9 mt-3 mt-md-0 info--hot-movie">      
                            <h5 class="mb-1 text-uppercase">${list[listRandom[i]].name}</h5>                                            
                            <span class="tags">${list[listRandom[i]].tags}</span>
                            <p class="primary-color"><i class="fa-regular fa-clock me-2"></i>${list[listRandom[i]].duration}</p>                        
                            <p class="type box-gray">2D</p>             
                            <p><b class="primary-color">Đạo diễn: </b>${list[listRandom[i]].director}</p>
                            <p><b class="primary-color">Diễn viên: </b>${list[listRandom[i]].actor}</p>
                            <p><b class="primary-color">Mô tả: </b>${list[listRandom[i]].desc}</p>                                                   
                        </div>

                        <div class="flex-ct space-hr">
                            <hr class="my-4 w-95">                        
                        </div>

                    </div>  `

        $('#list-movie').append(row)
        let listTime = list[listRandom[i]].time
        for(var j = 0; j < listTime.length; j++) {
            let time = `<a class="box-action--red btn--book-tickets">
                            <span>${listTime[j]}</span>
                        </a>`
            $(`#list-movie .row:nth(${i})`).children('.info--hot-movie').append(time)
        }        
    }
    checkTimeMovie()
}

// Kiem tra thoi gian hien tai co the dat ve khong
function checkTimeMovie() {
    const date = new Date()
    let crrTime = date.getHours() * 60 + date.getMinutes()
    
    //Can dat ve truoc 10 phut phim chieu
    function compare(str) {
        str = Number.parseInt(str.split(':')[0]) * 60 + Number.parseInt(str.split(':')[1])
        if (crrTime + 10 >= str) return false
        else return true
    }

    $('.btn--book-tickets').each(function () {
        if(!compare($(this).children('span').text())) {
            $(this).addClass('off')
            $(this).removeAttr('href')
        }
    })
    
}

let listDate = getFullDate()
function showMovieDay() {    
    const date = new Date()
    let dayOfWeek = []    
    for(var i = 0; i < 6; i++) {
        dayOfWeek.push(formatDayOfWeek(date.getDay() + i))
        let movieday = `<div class="col-6 col-md-4 col-lg-2 day--display">
                            <div class="day-of-week">${dayOfWeek[i]}</div>
                            <div class="date">${listDate[i]}</div>
                            <div class="line-bottom"></div>
                        </div>`
        $('#row-movie-day').append(movieday)
    }

    $($('#row-movie-day').children()[0]).addClass('active')
}

showMovieDay()

function getFullDate() {
    let list = []
    function format(str) {
        if (Number.parseInt(str) < 10) return "0" + str
        return str.toString()
    }    
    
    var date = new Date()        
    let strDate;
    let year = date.getFullYear()       
    let month = date.getMonth() + 1
    let day = date.getDate()
    let arr = [day, month, year]
    for(var i = 0; i < 6 ; i++) { 
        arr = checkDayOfMonth(arr)
        day = format(arr[0])
        month = format(arr[1])
        strDate = `${day}/${month}/${year}`
        list.push(strDate)             
        arr[0]++  
    }
    return list       
}

function checkDayOfMonth(arr) {    
    if (arr[0] > findMaxDay(arr[1], arr[2])) {
        arr[0] -= findMaxDay(arr[1], arr[2])
        arr[1]++
        if(arr[1] > 12) arr[2]++
        return arr
    }
    else return arr

    function findMaxDay(month, year) {
        month = Number.parseInt(month)
        year = Number.parseInt(year)       
        switch(month) {
            case 1:
                return 31
            case 3:
                return 31
            case 5:
                return 31
            case 7:
                return 31
            case 8:
                return 31
            case 10:
                return 31
            case 12:
                return 31          
            case 4:
                return 30
            case 6:
                return 30
            case 9:
                return 30
            case 11:
                return 30           
            case 2:
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) return 29
                else return 28
        }
    }
}


function formatDayOfWeek(num) {
    switch(num) {
        case 1:
            return 'Thứ hai'
        case 2:
            return 'Thứ ba'
        case 3:
            return 'Thứ tư'
        case 4:
            return 'Thứ năm'
        case 5:
            return 'Thứ sáu'
        case 6:
            return 'Thứ bảy'
        case 0:
            return 'Chủ nhật'
    }
}

$(document).on('click', '.day--display', function(e) {
    $('.day--display').each(function() {
        if($(this).hasClass('active')) $(this).removeClass('active')
    }) 

    $(this).addClass('active')

    $('.day--display').each(function(index, item) {
        if($(this).hasClass('active')) {
            if(index == 0) {
                showPlayingMovie()
            } else {
                $('#list-movie').html('') 
            }
        }
    }) 
})

showPlayingMovie()

function initial() {
    let href = location.href.split('cinema')[1]
    // name = name[0] + ' ' + name[1]
    // name = name.toUpperCase()
    href = `./cinema${href}`   
    $.each(cinemas.filter((item)=> item.href == href), function(index, item) {
        localStorage.setItem('crr-cinema--@mtlight', item.name)
        $('.name-cinema').text(item.name)
        $('.phone-cinema').text('19001504')
        $('.address-cinema').text(item.address.toUpperCase())
    })
   
}

initial()

//Event click buy ticket
$(document).on('click', '.btn--book-tickets', function() {
    if(!$(this).hasClass('off')) {
        let nameMovie = $(getParentElement(this, 'info--hot-movie')).children('h5').text()
        showNotify(nameMovie)
    }
})

function showNotify(nameMovie) {
    localStorage.setItem('crr-movie--@mtlight',nameMovie)
    let notify =    `<div id="notify" class="overlay flex-ct d-flex">
                        <div class="box--notify flex-ct flex-column p-4">                           
                            <div class="member flex-ct">
                                <img src="./img/tickets/icon-buy-tickets.png">
                                <h5 class="title">ĐẶT VÉ XEM PHIM</h5>
                            </div>
                            <p id="name-movie">${nameMovie}</p>
                            <hr class="w-100 opacity-100">
                            <div class="wrapper-btn--buy flex-ct">
                                <a href="./book-ticket.html" class="buy-ticket me-5">Đặt vé</a>
                                <a class="exit-notify bg-dark">Hủy bỏ</a>
                            </div>
                        </div>
                    </div>`
    $('#app').append(notify)
}

$(document).on('click', '#notify .exit-notify', function() {
    $('#notify').remove()
})