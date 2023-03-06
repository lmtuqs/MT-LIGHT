//#region Data index
let slider = [
    {
        img: './img/slider/slider-1.png',
    },
    {
        img: './img/slider/slider-2.png',
    },
    {
        img: './img/slider/slider-3.png',
    },
    {
        img: './img/slider/slider-4.png',
    },
    {
        img: './img/slider/slider-5.png',
    },
    {
        img: './img/slider/slider-6.png',
    },
    {
        img: './img/slider/slider-7.png',
    },
]

let upComingMovie = [
    {
        img: './img/upcoming-movie/1.png',
        name: 'Biệt đội rất ổn',
        duration: '1 giờ 30 phút',
        tags: 'Hài',
        director: 'Tạ Nguyên Hiệp',
        actor: 'Lê Khánh, Hứa Vĩ Văn, Hoàng Oanh, Quang Tuấn, Võ Tấn Phát, Nguyên Thảo, Ngọc Phước, Ngọc Hoa, Lạc Hoàng Long',
        desc: 'BIỆT ĐỘI RẤT ỔN xoay quanh bộ đôi Quyên (Hoàng Oanh) và Phong (Hứa Vĩ Văn). Sau lần chạm trán tình cờ, bộ đôi lôi kéo Bảy Cục (Võ Tấn Phát), Bảy Súc (Nguyên Thảo), Quạu (Ngọc Phước), Quọ (Ngọc Hoa) th...', 
    },
    {
        img: './img/upcoming-movie/2.png',
        name: 'Hiệp sĩ mặt nạ đại chiến đấu trường sinh tử',
        duration: '1 giờ 30 phút',
        tags: 'Hành Động, Khoa Học Viễn Tưởng',
        director: 'Takayuki Shibasaki',
        actor: 'Hideyoshi Kan, Kentaro Maeda, Subaru Kimura',
        desc: 'Khi mùa mới của Desire Grand Prix - giải đấu sinh tồn có thể hiện thực hóa bất kì điều ước của người chiến thắng - bất ngờ bị một thế lực bí ẩn nắm quyền, Kamen Rider Geats cùng những người chơi quen thuộc của giải đấu này đều bị cuốn vào chuỗi những...',   
    },
    {
        img: './img/upcoming-movie/3.png',
        name: 'Cơn thịnh nộ của các vị thần',
        duration: '1 giờ 30 phút',
        tags: 'Siêu Anh Hùng',
        director: 'David F. Sandberg',
        actor: 'Zachary Levi, Asher Angel, Jack Dylan Grazer, Adam Brody, Ross Butler, Meagan Good, D.J. Cotrona,',
        desc: 'Một tác phẩm từ New Line Cinema mang tên “Shazam! Fury of the Gods,” tiếp tục câu chuyện về chàng trai Billy Batson, và bản ngã Siêu anh hùng trưởng thành của mình sau khi hô cụm từ “SHAZAM !,” ma thu...', 
    },
    {
        img: './img/upcoming-movie/4.png',
        name: 'Chuyện sớm tui',
        duration: '1 giờ 30 phút',
        tags: 'Hài',
        director: 'Vũ Ngọc Đãng',
        actor: 'Thái Hòa, Thu Trang, Tiến Luật, NSND Hồng Vân, Huỳnh Phương, Vinh Râu, Thái Vũ,..',
        desc: 'Lấy cảm hứng từ web drama Chuyện Xóm Tui, phiên bản điện ảnh sẽ mang một màu sắc hoàn toàn khác: hài hước hơn, gần gũi và nhiều cảm xúc hơn Bộ phim là câu chuyện của Nhót - người phụ nữ “chưa kịp già”...', 
    },
    {
        img: './img/upcoming-movie/5.png',
        name: 'Trận chiến thời tiền sử',
        duration: '1 giờ 30 phút',
        tags: 'Hành Động, Phiêu Lưu',
        director: 'Scott Beck, Bryan Woods',
        actor: 'Adam Driver, Ariana Greenblatt, Chloe Coleman…',
        desc: 'Sau cú va chạm thảm khốc, tàu vũ trụ của Mills (Adam Driver) bay thẳng đến một hành tinh không xác định. Với kiến thức nhạy bén của mình, Mills nhanh chóng nhận ra hành tinh không xác định này chính l...', 
    },
    {
        img: './img/upcoming-movie/6.png',
        name: 'Khi ta hai lăm',
        duration: '1 giờ 51 phút',
        tags: 'Hài, Tình Cảm',
        director: 'Luk Vân',
        actor: 'Midu, Phú Thịnh, Lê Dương Bảo Lâm, Lãnh Thanh, Him Phạm, Hoàng, Otis Nhật Trường, Tạ Hoàng Long, NSƯT Hữu Châu, Tú Vi, Nam Thư...',
        desc: 'Khi Ta Hai Lăm xoay quanh Tuệ Lâm (Midu), một nữ quản lý nghệ sĩ trẻ với tâm huyết cháy bỏng dành cho nhóm nhạc của mình - The Air. Tuy nhiên một biến cố lớn xảy ra khiến mọi dự định dành cho nhóm bị trì hoãn, còn Tuệ Lâm phải sang Hàn Quốc làm việc....',
    },
]

let playingMovie = [
    {
        img: './img/playing-movie/1.png',
        name: 'Người kiến và chiến binh ong thế giới lượng tử', 
        duration: '2 giờ 4 phút',            
        tags: 'Siêu Anh Hùng',
        director: 'Peyton Reed',
        actor: 'Paul Rudd, Evangeline Lilly, Jonathan Majors',
        desc: 'Scott Lang và Hope Van Dyne trở lại tiếp tục cuộc phiêu lưu của họ với vai trò Người Kiến và Chiến binh Ong. Cùng với cha mẹ của Hope, họ sẽ có chuyến khám phá Lượng Tử Giới, gặp gỡ những sinh vật mới lạ và bắt đầu cuộc hành trình vào thế giới lượng ...',        
        time: ['12:15'],
    },
    {
        img: './img/playing-movie/2.png',
        name: 'Siêu lừa gặp siêu lầy',
        duration: '1 giờ 52 phút',
        tags: 'Hài',
        director: ' Võ Thanh Hòa',
        actor: 'Anh Tú, Mạc Văn Khoa, Ngọc Phước, Nhất Trung, NSƯT Mỹ Duyên, Đại Nghĩa, Lâm Vỹ Dạ, BB Trần, Cát Tường, Hứa Minh Đạt…',
        desc: 'Thuộc phong cách hành động – hài hước với các “cú lừa” thông minh và lầy lội đến từ bộ đôi Tú (Anh Tú) và Khoa (Mạc Văn Khoa), Siêu Lừa Gặp Siêu Lầy của đạo diễn Võ Thanh Hòa theo chân của Khoa – tên lừa đảo tầm cỡ “quốc nội” đến đảo ngọc Phú Quốc vớ...',
        time: ['10:15', '11:50', '13:00', '14:00', '15:50', '17:05', '18:50', '19:30', '20:30', '21:10'],
    },
    {
        img: './img/playing-movie/3.png',
        name: 'Chuột nhí và sứ mệnh thần biển',
        duration: '1 giờ 25 phút',
        tags: 'Hoạt hình',
        director: 'David Alaux',
        actor: 'Valentino Bisegna, Sara Di Sturco, Chiara Fabiano and Mattia Fabiano',
        desc: 'Bé Tí – một chú chuột nhỏ thông minh luôn mang trong mình một ước mơ to lớn là được trở thành một vị anh hùng thám hiểm như Anh Hùng Biển vĩ đại. Nhưng với Bố Bự - chú mèo đã nhận nuôi cô thì đây là điều hão huyền.',
        time: ['10:15', '14:00', '18:10'],
    },
    {
        img: './img/playing-movie/4.png',
        name: 'Mất tích',
        duration: '1 giờ 30 phút',
        tags: 'Bí Ẩn, Tâm Lý',
        director: ' Nick Johnson, Will Merrick',
        actor: 'Storm Reid, Nia Long, Joaquim de Almeida, Tim Griffin, Daniel Henney, Amy Landecker',
        desc: 'Những người từng tạo ra SEARCHING đã trở lại với MISSING ! “Missing” bắt đầu khi Grace (Nia Long) cùng bạn trai Kevin Lin (Ken Leung) đi du lịch Colombia. Sau vài ngày không liên lạc, cô con gái Ali (Storm Reid) bàng hoàng nhận ra mẹ mình đã mất tích...',    
        time: ['15:50'],
    },
    {
        img: './img/playing-movie/5.png',
        name: 'Nhà bà nữ',
        duration: '1 giờ 42 phút',
        tags: 'Hài',
        director: 'Trấn Thành',
        actor: 'Trấn Thành, Lê Giang, NSND Ngọc Giàu, Uyển Ân, Khả Như, NSND Việt Anh, NSUT Công Ninh, Ngân Quỳnh, Song Luân, Lê Dương Bảo Lâm,...',
        desc: 'Phim xoay quanh gia đình của bà Nữ (nghệ sĩ Lê Giang đảm nhận) - người làm nghề bán bánh canh. Truyện phim khắc họa mối quan hệ phức tạp, đa chiều xảy ra với các thành viên trong gia đình. Câu tagline...',    
        time: ['17:50', '19:10'],
    },
    {
        img: './img/playing-movie/6.png',        
        name: 'THÁNH VẬT CỦA QUỶ',
        duration: '1 giờ 35 phút',
        tags: 'Kinh dị',
        director: 'Christopher Smith',
        actor: 'Jena Malone, Danny Huston, Janet Suzman, Thoren Ferguson,...',
        desc: 'Chuyện phim cuốn khán giả vào không khí ma quái đang bao trùm lấy tu viện Mount Savior nằm sâu trong Cao nguyên Scotland. Nơi đây vừa xảy ra cái chết bí ẩn của một linh mục - đó là em trai của Grace (Jena Malone). Giáo hội ở đây cho rằng em trai cô đ...',
        time: ['12:00', '23:00'],
    },
]

let promotionEvents = [
    {
        img: './img/promotions-events/1.png',        
    },
    {
        img: './img/promotions-events/2.png',        
    },
    {
        img: './img/promotions-events/3.png',        
    },
    {
        img: './img/promotions-events/4.png',        
    },
    {
        img: './img/promotions-events/5.png',        
    },
    {
        img: './img/promotions-events/6.png',        
    },
    {
        img: './img/promotions-events/7.png',        
    },
    {
        img: './img/promotions-events/8.png',        
    },
]

let hotMovie = [
    {
        img: './img/hot-movie/1.png',
        title: 'NGƯỜI KIẾN VÀ CHIẾN BINH ONG: THẾ GIỚI LƯỢNG TỬ',
        tags: 'Siêu Anh Hùng',
        director: 'Peyton Reed',
        actor: 'Paul Rudd, Evangeline Lilly, Jonathan Majors',
        desc: 'Scott Lang và Hope Van Dyne trở lại tiếp tục cuộc phiêu lưu của họ với vai trò Người Kiến và Chiến binh Ong. Cùng với cha mẹ của Hope, họ sẽ có chuyến khám phá Lượng Tử Giới, gặp gỡ những sinh vật mới lạ và bắt đầu cuộc hành trình vào thế giới lượng ...',
    },

    {
        img: './img/hot-movie/2.png',
        title: 'SIÊU LỪA GẶP SIÊU LẦY',
        tags: 'Hài',
        director: ' Võ Thanh Hòa',
        actor: 'Anh Tú, Mạc Văn Khoa, Ngọc Phước, Nhất Trung, NSƯT Mỹ Duyên, Đại Nghĩa, Lâm Vỹ Dạ, BB Trần, Cát Tường, Hứa Minh Đạt…',
        desc: 'Thuộc phong cách hành động – hài hước với các “cú lừa” thông minh và lầy lội đến từ bộ đôi Tú (Anh Tú) và Khoa (Mạc Văn Khoa), Siêu Lừa Gặp Siêu Lầy của đạo diễn Võ Thanh Hòa theo chân của Khoa – tên lừa đảo tầm cỡ “quốc nội” đến đảo ngọc Phú Quốc vớ...',
    },

    {
        img: './img/hot-movie/3.png',
        title: 'Chuột nhí và sứ mệnh thần biển',
        tags: 'Hoạt hình',
        director: 'David Alaux',
        actor: 'Valentino Bisegna, Sara Di Sturco, Chiara Fabiano and Mattia Fabiano',
        desc: 'Bé Tí – một chú chuột nhỏ thông minh luôn mang trong mình một ước mơ to lớn là được trở thành một vị anh hùng thám hiểm như Anh Hùng Biển vĩ đại. Nhưng với Bố Bự - chú mèo đã nhận nuôi cô thì đây là điều hão huyền.',
    },

    {
        img: './img/hot-movie/4.png',
        title: 'MẤT TÍCH',
        tags: 'Bí Ẩn, Tâm Lý',
        director: ' Nick Johnson, Will Merrick',
        actor: 'Storm Reid, Nia Long, Joaquim de Almeida, Tim Griffin, Daniel Henney, Amy Landecker',
        desc: 'Những người từng tạo ra SEARCHING đã trở lại với MISSING ! “Missing” bắt đầu khi Grace (Nia Long) cùng bạn trai Kevin Lin (Ken Leung) đi du lịch Colombia. Sau vài ngày không liên lạc, cô con gái Ali (Storm Reid) bàng hoàng nhận ra mẹ mình đã mất tích...',
    },

    {
        img: './img/hot-movie/5.png',
        title: 'HIỆP SĨ MẶT NẠ ĐẠI CHIẾN: ĐẤU TRƯỜNG SINH TỬ',
        tags: 'Hành Động, Khoa Học Viễn Tưởng',
        director: 'Takayuki Shibasaki',
        actor: 'Hideyoshi Kan, Kentaro Maeda, Subaru Kimura',
        desc: 'Khi mùa mới của Desire Grand Prix - giải đấu sinh tồn có thể hiện thực hóa bất kì điều ước của người chiến thắng - bất ngờ bị một thế lực bí ẩn nắm quyền, Kamen Rider Geats cùng những người chơi quen thuộc của giải đấu này đều bị cuốn vào chuỗi những...',
    },

    {
        img: './img/hot-movie/6.png',
        title: 'KHI TA HAI LĂM',
        tags: 'Hài, Tình Cảm',
        director: 'Luk Vân',
        actor: 'Midu, Phú Thịnh, Lê Dương Bảo Lâm, Lãnh Thanh, Him Phạm, Hoàng, Otis Nhật Trường, Tạ Hoàng Long, NSƯT Hữu Châu, Tú Vi, Nam Thư...',
        desc: 'Khi Ta Hai Lăm xoay quanh Tuệ Lâm (Midu), một nữ quản lý nghệ sĩ trẻ với tâm huyết cháy bỏng dành cho nhóm nhạc của mình - The Air. Tuy nhiên một biến cố lớn xảy ra khiến mọi dự định dành cho nhóm bị trì hoãn, còn Tuệ Lâm phải sang Hàn Quốc làm việc....',
    },

    {
        img: './img/hot-movie/7.png',
        title: 'THÁNH VẬT CỦA QUỶ',
        tags: 'Kinh dị',
        director: 'Christopher Smith',
        actor: 'Jena Malone, Danny Huston, Janet Suzman, Thoren Ferguson,...',
        desc: 'Chuyện phim cuốn khán giả vào không khí ma quái đang bao trùm lấy tu viện Mount Savior nằm sâu trong Cao nguyên Scotland. Nơi đây vừa xảy ra cái chết bí ẩn của một linh mục - đó là em trai của Grace (Jena Malone). Giáo hội ở đây cho rằng em trai cô đ...',
    },
]

let newsMovies = [
    {
        img: './img/news-movie/1.png',
        title: '\'Chị chị em em 2\' vượt mốc 100 tỷ đồng',
        author: 'admin',
        date: '14/02/2023',
        content: 'Mùa Tết Quý Mão, Chị chị em em 2 (Vũ Ngọc Đãng đạo diễn) là một trong hai phim Việt hiếm hoi góp mặt vào đường...',
    },
    {
        img: './img/news-movie/2.png',
        title: 'Cuộc phiêu lưu vào thế giới lượng tử sẽ là lời chia tay đẫm nước mắt của Ant-Man?',
        author: 'admin',
        date: '14/02/2023',
        content: 'Sau \'Avengers: Endgame, Ant-Man\' nằm trong số ít trụ cột còn sót lại của nhóm Avengers để dẫn dắt thế hệ tương...',
    },
    {
        img: './img/news-movie/3.png',
        title: 'Phim Nhà bà Nữ đạt doanh thu cao nhất mọi thời đại điện ảnh Việt, Trấn Thành được khen',
        author: 'admin',
        date: '14/02/2023',
        content: 'Phim Nhà bà Nữ do Trấn Thành đạo diễn đã vượt qua kỷ lục trước đó của Bố già tại Việt Nam để trở thành phim có...',
    },
    {
        img: './img/news-movie/4.png',
        title: 'Hé lộ \'bữa tiệc hành động\' trong phim anh hùng \'Shazam\' phần 2',
        author: 'admin',
        date: '22/02/2023',
        content: '“Shazam! Fury of the gods" (tựa Việt: Shazam! Cơn thịnh nộ của các vị thần) hay "Shazam 2" đã cho ra mắt trail...',
    },
    {
        img: './img/news-movie/5.png',
        title: '‘Siêu lừa gặp siêu lầy’ trở lại rạp chiếu ngày 3.3',
        author: 'admin',
        date: '22/02/2023',
        content: 'Là dự án phim tết 2023, tuy nhiên Siêu lừa gặp siêu lầy khiến không ít khán giả bất ngờ khi dời lịch chiếu. Na...',
    },
]
//#endregion

//#region Data showtimes

let cinemas = [
    {
        href: './cinema--bao-loc.html',
        img: './img/cinema/1.png',
        name: 'MT-LIGHT BẢO LỘC',
        address: 'TRUNG TÂM GIẢI TRÍ MT-LIGHT BẢO LỘC 729 Trần Phú, Phường B’Lao, TP Bảo Lộc, tỉnh Lâm Đồng',
    },
    {
        href: './cinema--da-nang.html',
        img: './img/cinema/2.png',
        name: 'MT-LIGHT ĐÀ NẴNG',
        address: 'TRUNG TÂM GIẢI TRÍ MT-LIGHT ĐÀ NẴNG Tầng 4 Tòa nhà Nguyễn Kim, 46 Điện Biên Phủ, TP. Đà Nẵng',
    },
    {
        href: './cinema--buon-ma-thuot.html',
        img: './img/cinema/3.png',
        name: 'MT-LIGHT BUÔN MA THUỘT',
        address: 'TRUNG TÂM GIẢI TRÍ MT-LIGHT BUÔN MA THUỘT Tầng 6 Tòa Nhà Vincom - 78 Lý Thường Kiệt - TP.BMT',
    },
    {
        href: './cinema--hue.html',
        img: './img/cinema/4.png',
        name: 'MT-LIGHT HUẾ',
        address: 'TRUNG TÂM GIẢI TRÍ MT-LIGHT HUẾ Tầng 03 Co.opmark, Phường Phú Hòa, Tp Huế, Tỉnh Thừa Thiên Huế',
    },

    {
        href: './cinema--long-an.html',
        img: './img/cinema/5.png',
        name: 'MT-LIGHT LONG AN',
        address: 'TRUNG TÂM GIẢI TRÍ MT-LIGHT LONG AN Lầu 1, Lầu 3, Vincom Plaza L.A, Phường 2, TP. Tân An',
    },

    {
        href: './cinema--quy-nhon.html',
        img: './img/cinema/6.png',
        name: 'MT-LIGHT QUY NHƠN',
        address: 'TRUNG TÂM GIẢI TRÍ MT-LIGHT QUY NHƠN. Tầng 8 An Phú Thịnh Plaza, 52A Tăng Bạt Hổ, TP. Quy Nhơn',
    },
]

//#endregion

//#region Data sign up
const provinces = [
    { id: 1, name: "An Giang", parentId: 0 },
    { id: 2, name: "Vũng Tàu", parentId: 0 },
    { id: 3, name: "Bạc Liêu", parentId: 0 },
    { id: 4, name: "Bắc Giang", parentId: 0 },
    { id: 5, name: "Bắc Kạn", parentId: 0 },
    { id: 6, name: "Bắc Ninh", parentId: 0 },
    { id: 7, name: "Bến Tre", parentId: 0 },
    { id: 8, name: "Bình Dương", parentId: 0 },
    { id: 9, name: "Bình Định", parentId: 0 },
    { id: 10, name: "Bình Phước", parentId: 0 },
    { id: 11, name: "Bình Thuận", parentId: 0 },
    { id: 12, name: "Cà Mau", parentId: 0 },
    { id: 13, name: "Cao Bằng", parentId: 0 },
    { id: 14, name: "Cần Thơ", parentId: 0 },
    { id: 15, name: "Đà Nẵng", parentId: 0 },
    { id: 16, name: "Đắk Lắk", parentId: 0 },
    { id: 17, name: "Đắk Nông", parentId: 0 },
    { id: 18, name: "Điện Biên", parentId: 0 },
    { id: 19, name: "Đồng Nai", parentId: 0 },
    { id: 20, name: "Đồng Tháp", parentId: 0 },
    { id: 21, name: "Gia Lai", parentId: 0 },
    { id: 22, name: "Hà Giang", parentId: 0 },
    { id: 23, name: "Hà Nam", parentId: 0 },
    { id: 24, name: "Hà Nội", parentId: 0 },
    { id: 25, name: "Hà Tĩnh", parentId: 0 },
    { id: 26, name: "Hải Dương", parentId: 0 },
    { id: 27, name: "Hải Phòng", parentId: 0 },
    { id: 28, name: "Hậu Giang", parentId: 0 },
    { id: 29, name: "Hòa Bình", parentId: 0 },
    { id: 30, name: "TP Hồ Chí Minh", parentId: 0 },
    { id: 31, name: "Hưng Yên", parentId: 0 },
    { id: 32, name: "Khánh Hòa", parentId: 0 },
    { id: 33, name: "Kiên Giang", parentId: 0 },
    { id: 34, name: "Kon Tum", parentId: 0 },
    { id: 35, name: "Lai Châu", parentId: 0 },
    { id: 36, name: "Lạng Sơn", parentId: 0 },
    { id: 37, name: "Lào Cai", parentId: 0 },
    { id: 38, name: "Lâm Đồng", parentId: 0 },
    { id: 39, name: "Long An", parentId: 0 },
    { id: 40, name: "Nam Định", parentId: 0 },
    { id: 41, name: "Nghệ An", parentId: 0 },
    { id: 42, name: "Ninh Bình", parentId: 0 },
    { id: 43, name: "Ninh Thuận", parentId: 0 },
    { id: 44, name: "Phú Thọ", parentId: 0 },
    { id: 45, name: "Phú Yên", parentId: 0 },
    { id: 46, name: "Quảng Bình", parentId: 0 },
    { id: 47, name: "Quảng Nam", parentId: 0 },
    { id: 48, name: "Quảng Ngãi", parentId: 0 },
    { id: 49, name: "Quảng Ninh", parentId: 0 },
    { id: 50, name: "Quảng Trị", parentId: 0 },
    { id: 51, name: "Sóc Trăng", parentId: 0 },
    { id: 52, name: "Sơn La", parentId: 0 },
    { id: 53, name: "Tây Ninh", parentId: 0 },
    { id: 54, name: "Thái Bình", parentId: 0 },
    { id: 55, name: "Thái Nguyên", parentId: 0 },
    { id: 56, name: "Thanh Hóa", parentId: 0 },
    { id: 57, name: "Thừa Thiên Huế", parentId: 0 },
    { id: 58, name: "Tiền Giang", parentId: 0 },
    { id: 59, name: "Trà Vinh", parentId: 0 },
    { id: 60, name: "Tuyên Quang", parentId: 0 },
    { id: 61, name: "Vĩnh Long", parentId: 0 },
    { id: 62, name: "Vĩnh Phúc", parentId: 0 },
    { id: 63, name: "Yên Bái", parentId: 0 },
]
//#endregion

// Vatiables public
var login = 'false'
var crrAccount = null

if (localStorage.getItem("login--@mtlight")) {
    login = localStorage.getItem("login--@mtlight");
    crrAccount = localStorage.getItem("crr-acc--@mtlight");
} else login = 'false'