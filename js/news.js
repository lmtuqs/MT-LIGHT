import {createListRandom} from './framework-lmt.js'
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

showNewsMovie()