import {createListRandom, getParentElement, random} from './framework-lmt.js'

function initial() {
    let nameMovie = localStorage.getItem('crr-movie--@mtlight')
    $('#name-movie').text(nameMovie)

    showSeat()
}

const arrText = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
function showSeat() {
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 12; j++) {
            let num
            if(j>=9) num = j + 1
            else num = `0${j+1}`

            let seat
            if (arrText[i] == 'A') 
                seat = ` <div vip="true" class="col-1 col-sm-1 flex-ct seat-01 seat-all">${arrText[i]}${num}</div>`
            else seat = ` <div class="col-1 col-sm-1 flex-ct seat-00 seat-all">${arrText[i]}${num}</div>`
            $('#row-seat').append(seat)
        }
    }

    addSeatSell()
}

function addSeatSell() {
    let length = random(5, 15)
    let list = []
    createListRandom(list, 0, 119, length)

    $('#row-seat .seat-all').each(function(index, item){
        $(list).each(function(){
            if(index == this) {
                removeAllStatus(item)
                $(item).addClass('seat-11')
            }
        })
    })
}

function removeAllStatus(item) {
    $(item).removeClass('seat-00')
    $(item).removeClass('seat-01')
    $(item).removeClass('seat-10')
    $(item).removeClass('seat-11')
}

let listSeatChoosen = []
let sumMoney = 0
let priceNormal = 60000
let priceVip = 70000
$(document).on('click', '#row-seat .seat-all', function (e) {
    if(!$(this).hasClass('seat-11')) {
        if($(this).hasClass('seat-00')) {
            if(listSeatChoosen.length < 10) {
                let text = $(this).text()
                removeAllStatus(this)
                $(this).addClass('seat-10')               
                listSeatChoosen.push(text)
                sumMoney += priceNormal
                listSeatAdd(listSeatChoosen)
            } else {
                //Thong bao toi da
            }
        }
        else if($(this).hasClass('seat-10')) {
            if ($(this).attr('vip') == 'true') {
                removeAllStatus(this)
                $(this).addClass('seat-01')
                let text = $(this).text()            
                listSeatChoosen.splice(listSeatChoosen.indexOf(text), 1)
                sumMoney -= priceVip
                listSeatAdd(listSeatChoosen)                
            } else {
                removeAllStatus(this)
                $(this).addClass('seat-00')
                let text = $(this).text()            
                listSeatChoosen.splice(listSeatChoosen.indexOf(text), 1)
                sumMoney -= priceNormal
                listSeatAdd(listSeatChoosen)                
            }
        }
        else if($(this).hasClass('seat-01')) {
            if(listSeatChoosen.length < 10) {
                removeAllStatus(this)
                $(this).addClass('seat-10')   
                let text = $(this).text()
                listSeatChoosen.push(text)
                sumMoney += priceVip              
                listSeatAdd(listSeatChoosen) 
            }
        }
    }
})

function listSeatAdd(list) {
    $('#list-seat-choosen').html('')
    $.each(list, function(index, item) {
        $('#list-seat-choosen')[0].innerHTML += ' ' + item
    })
    $('#price p').html(sumMoney)
}

initial()