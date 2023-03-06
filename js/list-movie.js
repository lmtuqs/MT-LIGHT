import {createListRandom} from './framework-lmt.js'
function showMovie(list, row) {
    $(row).html('')
    let listRandom = []
    createListRandom(listRandom, 0, list.length - 1, list.length)
    for(var i = 0; i < list.length ; i++) {
        let item = `<div class="col-12 col-sm-6 col-lg-3 py-2">  
                        <div class="over-parent">
                            <img src="${list[listRandom[i]].img}" class="w-100">
                            <div class="over-right">                        
                                <h5><a href="">${list[listRandom[i]].name}</a></h5>                                                               
                                <p>${list[listRandom[i]].tags}</p>                              
                                <p class="primary-color"><i class="fa-regular fa-clock me-2"></i>${list[listRandom[i]].duration}</p>
                                <div class="mb-3">
                                    <a href="#" class="box-gray d-inline-block">
                                        <i class="fa fa-play"></i>Trailer
                                    </a>
                                    <a href="" class="box-action--red">
                                        <i class="fa fa-ticket"></i>Đặt vé
                                    </a>
                                </div>
                                <hr>
                                <p class="primary-color">Đạo diễn: <span class="text-white">${list[listRandom[i]].director}</span></p>                            
                                <p class="primary-color">Diễn viên: <span class="text-white">${list[listRandom[i]].actor}</span></p>                                                                                  
                            </div>                            
                        </div>                          
                        <p class="name-movie"><a href="#">${list[listRandom[i]].name}</a></p>
                    </div>`

        $(row).append(item)
    }
}

showMovie(playingMovie, '#row--playing-movie')
showMovie(upComingMovie, '#row--upcoming-movie')