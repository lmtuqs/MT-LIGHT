import {createListRandom} from './framework-lmt.js'

let listPromotionEvents = []
createListRandom(listPromotionEvents, 0, promotionEvents.length - 1, promotionEvents.length)
function showPromotionEvents() {
    $('#row--promotions-events').html('')
    let listRandom = listPromotionEvents        
    for(var i = 0; i < promotionEvents.length ; i++) {
        let promotionEvent = `  <div class="col-12 col-sm-6 col-lg-3 py-2">                                    
                                    <div class="animation-hover">
                                        <img src="${promotionEvents[listRandom[i]].img}" class="w-100">
                                        <a href="">
                                            <div class="over-cursor flex-ct">
                                                <i class="fa-solid fa-forward"></i> Xem chi tiết
                                            </div>
                                        </a>
                                    </div>                                                              
                                </div>`

        $('#row--promotions-events').append(promotionEvent)
    }
}

showPromotionEvents()