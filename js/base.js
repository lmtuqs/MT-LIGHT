//#region Header   

    // Turn on/off menu
    $(document).on('click', '#btn--toggle-menu', function() {
        toggleMenu()
    })

    // Turn on/off dropdown responsive menu
    $(document).on('click', '.item-dropdown', function() {
        $(this).css('height', 'auto')
        toggleDropdown(this)
    })

    // Functions

    function toggleMenu() {

        // Declare variables
        const list = $('.list--responsive-menu')
        const listElement = list[0]

        const heightItem = list.children('li')[0].offsetHeight        
        const heightListMax = heightItem * list.children('li').length
        const heightListMin = 0   
        let animate                       

        // Consider cases
        if(!list.hasClass('active')) { 
            
            animate = listElement.animate(
                [
                    { height: `${heightListMin}px` },
                    { height: `${heightListMax}px` }
                ],

                {
                    duration: 500,            
                }
            )         
            
        } else {                          
            animate = listElement.animate(
                [
                    { height: `${heightListMax}px` },
                    { height: `${heightListMin}px` }
                ],

                {
                    duration: 500,            
                }
            ) 

            closeAllDropdown()          
        }     
        
        animate.play()
        list.toggleClass('active')  
    }

    function toggleDropdown(itemDropdown) {
        $(itemDropdown).toggleClass('dropdown--on')
    }

    function closeAllDropdown() {        
        $('.list--responsive-menu > li').each(function() {
            $(this).children('.second-list--responsive-menu').css('display', 'none')
            if($(this).hasClass('dropdown--on')) {
                $(this).removeClass('dropdown--on')                
            }
        })
    }

//#endregion

// Edit menu when login
if (login == 'true') {    
    $('.account-main').each(function () {
        let html = `<li><a href="./account.html"><i class="fa-solid fa-user me-1"></i>${localStorage.getItem(`acc-${crrAccount}--@mtlight-name`)}</a></li>
                    <li><a class="btn-log-out" href="./index.html"><i class="fa-solid fa-arrow-right-from-bracket me-1"></i>Đăng xuất</a></li>`
        $(this).html(html)
    })    
}

$(document).on('click', '.btn-log-out', function() {
    crrAccount = null
    login = 'false'
    localStorage.setItem('login--@mtlight', 'false')
    localStorage.setItem('crr-acc--@mtlight', null)   
})

