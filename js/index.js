import {createListRandom, getParentElement} from './framework-lmt.js'
$(function(){
    //#region Show data
    let listSlider = []
    createListRandom(listSlider, 0, slider.length - 1, slider.length)
    function showSlider() {
        let list = slider
        let listRandom = listSlider
        for(var i = 0; i < list.length; i++) {
            let slide = `<div class="carousel-item" data-bs-interval="5000">
                            <img src="${list[listRandom[i]].img}" class="d-block w-100">
                        </div>   `
            $('#wrapper--slide-header').append(slide)
        }
        $($('#wrapper--slide-header').children()[0]).addClass('active')       
    }

    let listUpcomingMovie = []
    createListRandom(listUpcomingMovie, 0, upComingMovie.length - 1, upComingMovie.length)
    function showUpComingMovie() {
        $('#row--upcoming-movie').html('')
        let listRandom = listUpcomingMovie
        for(var i = 0; i < upComingMovie.length ; i++) {
            let movie = `<div class="col-12 col-sm-6 col-lg-3 py-2" data-translate="0">                            
                            <img src="${upComingMovie[listRandom[i]].img}" class="w-100">
                            <p class="name-movie">${upComingMovie[listRandom[i]].name}</p>                            
                        </div>`

            $('#row--upcoming-movie').append(movie)
        }
    }

    let listPlayingMovie = []
    createListRandom(listPlayingMovie, 0, playingMovie.length - 1, playingMovie.length)
    function showPlayingMovie() {
        $('#row--playing-movie').html('')
        let listRandom = listPlayingMovie
        for(var i = 0; i < playingMovie.length ; i++) {
            let movie = `<div class="col-12 col-sm-6 col-lg-3 py-2" data-translate="0">                            
                            <img src="${playingMovie[listRandom[i]].img}" class="w-100">
                            <p class="name-movie">${playingMovie[listRandom[i]].name}</p>                            
                        </div>`

            $('#row--playing-movie').append(movie)
        }
    }

    let listPromotionEvents = []
    createListRandom(listPromotionEvents, 0, promotionEvents.length - 1, promotionEvents.length)
    function showPromotionEvents() {
        $('#row--promotions-events').html('')
        let listRandom = listPromotionEvents        
        for(var i = 0; i < promotionEvents.length ; i++) {
            let promotionEvent = `<div class="col-12 col-sm-6 col-lg-3 py-2">                                    
                                    <img src="${promotionEvents[listRandom[i]].img}" class="w-100">                                                              
                                </div>`

            $('#row--promotions-events').append(promotionEvent)
        }
    }

    let listHotMovie = []
    createListRandom(listHotMovie, 0, hotMovie.length - 1, hotMovie.length)
    function showHotMovie() {
        let listRandom = listHotMovie
        let list = hotMovie
        for(var i = 0; i < list.length; i++) {
            let row = `
                        <div class="row">

                            <div class="col-md-2 col-sm-12">
                                <a href="#">
                                    <img src="${list[listRandom[i]].img}" class="w-100 rounded-2">
                                </a>
                            </div>

                            <div class="col-md-10 col-sm-12 mt-3 mt-md-0 info--hot-movie">      
                                <h5 class="mb-1">${list[listRandom[i]].title}</h5>                                            
                                <span class="tags">${list[listRandom[i]].tags}</span>                        
                                <p class="type box-gray">2D</p>             
                                <p><b class="primary-color">Đạo diễn: </b>${list[listRandom[i]].director}</p>
                                <p><b class="primary-color">Diễn viên: </b>${list[listRandom[i]].actor}</p>
                                <p><b class="primary-color">Mô tả: </b>${list[listRandom[i]].desc}</p>                       
                                <a href="#" class="box-action--red btn--book-tickets">
                                    <i class="fa fa-ticket"></i>Đặt vé
                                </a>                        
                            </div>

                            <div class="flex-ct space-hr">
                                <hr class="my-4 w-95">                        
                            </div>

                        </div>  `

            $('#content--hot-movie').append(row)
        }
    }

    let listNewsMovie = []
    createListRandom(listNewsMovie, 0, newsMovies.length - 1, newsMovies.length)
    function showNewsMovie() {
        $('#row--news-movie').html('')
        let listRandom = listNewsMovie
        let list = newsMovies        
        for(var i = 0; i < list.length ; i++) {
            let item = `<div class="col-12 col-sm-6 col-lg-4 py-2 item--news-movie">
                            <div class="box-shadow-item">
                                <div class="img--news-movie w-100">
                                    <a href="#">
                                        <img src="${list[listRandom[i]].img}" class="w-100">
                                    </a>
                                </div>
                                <div class="info--news-movie">
                                    <h4>
                                        <a href="#">${list[listRandom[i]].title}</a>
                                    </h4>
                                    <div class="tags--news-movie">
                                        <p><i class="fa fa-user"></i>${list[listRandom[i]].author}</p>
                                        <p><i class="fa fa-tags"></i>${list[listRandom[i]].date}</p>
                                    </div>
                                    <div class="content--news-movie">
                                        <p>${list[listRandom[i]].content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`

            $('#row--news-movie').append(item)
        }
    }

    function showData() {
        showSlider()
        showUpComingMovie()
        showPlayingMovie()
        showPromotionEvents()
        showHotMovie()
        showNewsMovie() 
    }
    
    //#endregion

    //#region Control slide
    // $(document).on('click', '.btn--slide-left', function() {  
        
    //     // Declare variables
    //     const wrapperElement = getParentElement(this, 'wrapper-item')
    //     const row = $(wrapperElement).children('.row')
    //     const rowElement = row[0]
    //     // let crrTranslate = Number.parseInt(row.attr('data-translateX'))  
    //     // let translateX =  crrTranslate - row.children('.col-12')[0].offsetWidth             
    //     // row.attr('data-translateX', translateX)
    //     // row.css('transform', `translateX(${translateX}px)`)  

    //     // const animate = rowElement.animate(
    //     //     [
    //     //         { transform: `translateX(0%)` },
    //     //         { transform: `translateX(-50%)` }
    //     //     ],

    //     //     {
    //     //         duration: 500,            
    //     //     }
    //     // )  
    //     // animate.play()
    //     let numTranslate = Number.parseInt($(row.children()[0]).attr('data-translate')) - 100
    //     console.log(numTranslate)
    //     $.each(row.children('.col-12'), function() {
    //         $(this).css('transform', `translateX(-${numTranslate}%)`)
    //         $(this).attr('data-translate', numTranslate)
    //     })
        
    //     setTimeout(function() {
    //         const itemFirst = row.children()[0].outerHTML      
    //         row.append(itemFirst)
    //         row.children()[0].remove()            
    //     }, 500)
               
    // }) 
    
    $(document).on('click', '.btn--slide-right', function() {   
        const wrapper = getParentElement(this, 'wrapper-item') 
        const option = $(wrapper).attr('id')
        console.log(option)
        switch(option) {
            case 'playing-movie':
                listPlayingMovie.push(listPlayingMovie.shift())   
                showPlayingMovie()
                break
            case 'upcoming-movie':
                listUpcomingMovie.push(listUpcomingMovie.shift())   
                showUpComingMovie()  
                break;
            case 'promotions-events':
                listPromotionEvents.push(listPromotionEvents.shift())   
                showPromotionEvents()
                break
            case 'news-movie':
                listNewsMovie.push(listNewsMovie.shift())   
                showNewsMovie()
                break            
        }              
    })

    $(document).on('click', '.btn--slide-left', function() {
        const wrapper = getParentElement(this, 'wrapper-item') 
        const option = $(wrapper).attr('id')
        switch(option) {
            case 'playing-movie':
                listPlayingMovie.unshift(listPlayingMovie.pop())   
                showPlayingMovie()
                break
            case 'upcoming-movie':
                listUpcomingMovie.unshift(listUpcomingMovie.pop())       
                showUpComingMovie()    
                break;
            case 'promotions-events':
                listPromotionEvents.unshift(listPromotionEvents.pop())   
                showPromotionEvents()
                break
            case 'news-movie':
                listNewsMovie.unshift(listNewsMovie.pop())   
                showNewsMovie()
                break
        }           
    })

    //#endregion 

    showData()
})