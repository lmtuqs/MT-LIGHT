import {getParentElement, random} from './framework-lmt.js'

function getData() {
    let name = localStorage.getItem(`acc-${crrAccount}--@mtlight-name`)
    let birthday = localStorage.getItem(`acc-${crrAccount}--@mtlight-birthday`)
    let phone = localStorage.getItem(`acc-${crrAccount}--@mtlight-phone`)
    let idProvince = localStorage.getItem(`acc-${crrAccount}--@mtlight-province`)
    let address
    $.each(provinces.filter(item => item.id.toString() == idProvince), function(index, item) {
        address = item.name
    })

    $('#name').text(name)
    $('#birthday').text(birthday)
    $('#address').text(address)
    $('#phone').text(phone)
}

getData()