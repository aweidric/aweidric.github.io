list_create()
function list_create(){
    var data = [
        '2022/10/4', '2022/10/4', '2022/10/4'
    ];
    var s = [
        '东风夜放花千树，更吹落、星如雨。<br>宝马雕车香满路。<br>凤箫声动，玉壶光转，一夜鱼龙舞。<br>\
        蛾儿雪柳黄金缕，笑语盈盈暗香去。<br>众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。'，
        '伫倚危楼风细细，望极春愁，黯黯生天际。<br>草色烟光残照里，无言谁会凭阑意。<br>\
        拟把疏狂图一醉，对酒当歌，强乐还无味。<br>衣带渐宽终不悔，为伊消得人憔悴。 ',
        '槛菊愁烟兰泣露。罗幕轻寒，燕子双飞去。明月不谙离恨苦。斜光到晓穿朱户。<br>\
         昨夜西风凋碧树。独上高楼，望尽天涯路。欲寄彩笺兼尺素。山长水阔知何处。'
    ];
    var srcs = [
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.jveaZZJguzXq6WSYrz5vFAHaEs?w=261&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.jveaZZJguzXq6WSYrz5vFAHaEs?w=261&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.jveaZZJguzXq6WSYrz5vFAHaEs?w=261&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
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
