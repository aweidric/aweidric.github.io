list_create()
function list_create(){
    var data = [
        '2022/10/1', '2022/10/2', '2022/10/3'
    ];
    var s = [
        '国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天国庆第一天', '国庆第二天', '国庆第三天'
    ];
    var srcs = [
        'h1.jpg', 'h1.jpg', 'h1.jpg'
    ];
    var str = '';
    for(i = 0; i<s.length; i++){
        str = '\
        <li class="f">\
                    <div class="f-head">\
                        <div class="user-pto">\
                           <img src="op.jpg">\
                        </div>\
                        <div class="user-info">\
                            <div class="f-nick">\
                                <span style="font-size:20px"><i><b>阿伟</b></i></span>\
                            </div>\
                            <div class="info-detail">\
                                <span >' + data[i] + '</span>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="f-content">\
                            <div class="f-info">' + s[i] + '</div>\
                            <div class="f-img">\
                                <img src="' + srcs[i] + '">\
                            </div>\
                    </div>\
                </li>'
        $("div.ric").append(str);
    }
    console.log('nihao')
}