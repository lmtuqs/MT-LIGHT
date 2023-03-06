$(function() {

    function show() {
        let list = cinemas
        for (var i = 0; i < list.length; i++) {

            let item = `<div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <a href="${list[i].href}" class="d-block link--cinema">                       
                                <div class="overflow-hidden">
                                    <img src="${list[i].img}" class="w-100">
                                </div>
                                <div class="box-info--black">
                                    <p class="primary-color fw-bold">${list[i].name}</p>
                                    <p>${list[i].address}</p>
                                    <p><b>Hotline: </b>1900 1504</p>
                                </div>                      
                            </a>
                        </div>`

            $('#row--cinema').append(item)
        }
    }

    show()
})