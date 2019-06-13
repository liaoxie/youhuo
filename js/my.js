$(function (){
    // 加载数据
    $.ajax({
        type: 'get',
        url: './data/goods.json',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            var results = '';
            $.each(data,function (index,value) {
                results += ' <li class="item"><img src="'+value.url+'" alt=""><a class="name" href="javascript: ;">'+value.title+'</a><p class="ney"><span>'+value.price+'</span></p><a class="bt-car" href="javascript: ;">加入购物车</a></li>'
            });
            $('.bottom-list').append(results);
        }
    });

    $('.bottom-list').on('click','.item .bt-car',function () {
        // goods => '{code: ['abc1','abc3','abc6']}'
        if (localStorage.getItem('goods')) {
            var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        } else {
            var codeArr = [];
        }
        // console.log(codeArr);
        var id = $(this).parent().attr('code');//商品编号
        console.log(code);
        codeArr.push(code);
        var jsonStr = JSON.stringify({"id":codeArr});//转成json字符串
        localStorage.setItem('goods',jsonStr);//存储本地数据
        alert('成功加入购物车');
        console.log(codeArr);
    })


})




$(function (){
    // 加载数据
    $.ajax({
        type: 'get',
        url: './data/goods.json',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            var results = '';
            // $.each(codeArr,function(index,value){
            $.each(data,function (index,val) {
            //     if(val == value.id){
                results += '<ul class="table"><li><div class="t-left"><img src="'+val.url+'" alt=""><span></span><p><a href="">  '+val.title+' </a><em>颜色：'+val.color+'&nbsp;尺码：'+val.size+' <i class="iconfont icon-bi"></i></em></p></div><div class="t-cneter"><p>'+val.price+'</p></div><div class="t-piece"><span class="add">+</span><input class="txt" type="text" value="1"><span class="minus">-</span></div><div class="t-maney"><p>¥<i>2199.00</i></p></div><div class="t-right"><span class="delet">删除</span><span>移入收藏</span></div></li></ul>'
            //       }
            //    });
            })
            $('.pool').append(results);
            $('.delet').click(function(){
                console.log(1);
                $(this).parent().parent().parent().remove();
            })
            $('.t-left').children('span').click(function(){
                if($(this).css('background-color') == "rgb(0, 0, 0)"){
                    $(this).css('background','#ccc')
                    $(this).css('border','none')
                    $('.all').css('background','#fff')
                    $('.all').css('border','1px solid #fff')
                    console.log( $(this).css('background-color'))
                }else{
                    $(this).css('background','#000')
                    $(this).css('border','1px solid red')
                }
                if($('.t-left').children('span').css('background-color') == "rgb(0, 0, 0)"){
                    $('.all').css('background','#000')
                    $('.all').css('border','1px solid #fff')
                    
                   
                }else{
                    $('.all').css('background','#fff')
                    $('.all').css('border','none')
                }
            })
            var c = 0,h = 0;

            $('.add').click(function(){
                var maney = parseInt($(this).parent().prev().children('p').children('i').text());
                console.log(maney)
                 c = Number( $(this).next().attr("value"));
                c ++;
                // console.log(c);
                $(this).next().attr("value", c)
                $(this).parent('.t-piece').next('.t-maney').children('p').children('i').text(c*maney+'.00');
                // console.log(parseInt($('.t-maney').children('p').children(('i')[index]).text()))
                // $('.bt-maney').children('p').children('i').html( c*maney + h*maney ) 
                
            })
            
            // $('.minus').each(function(){
               $('.minus').click(function(){
                var maney2 = parseInt($(this).parent().prev().children('p').children('i').text());
                console.log(maney2)
                 h = Number( $(this).prev().attr("value"));
                   if(h >= 1){
                       h --;
                       $(this).prev().attr("value", h)
                       $(this).parent('.t-piece').next('.t-maney').children('p').children('i').text(h*maney2+'.00');
                    }
                    
               })
        }
    });
    
 })

$('.tool-op').each(function(){
    $(this).mouseover(function(){
        $(this).children('div').css('display','block')
        $(this).css('background','#eaeceb')
        $(this).children('.down').css('display','block')
        $(this).children('.up').css('display','none')
    })
    $(this).mouseout(function(){
        $(this).children('div').css('display','none')
        $(this).css('background','#fff')
        $(this).children('.down').css('display','none')
        $(this).children('.up').css('display','block')
    })
})
$('.xx').click(function(){
    $('.hint').remove();
})
// var e = 1;
// $('.add').each(function(){
  

    //    $('.t-maney').children('p').children('i').each(function(index,element){
    //     console.log(index)
    //     // console.log($('.t-maney').children('p').children(('i')[1]))
    //     $('.bt-maney').children('p').children('i').html(parseInt($('.t-maney').children('p').children(('i')[index]).text())+parseInt($('.t-maney').children('p').children(('i')[index]).text()) ) 
    
    //  })

//    })
 
// console.log(parseInt($('.t-maney').children('p').children(('i')[0]).text()))
   
// })

// $('.delet').each(function(){
    
// })
$('.all').click(function(){
    if($(this).css('background-color') == "rgb(255, 255, 255)"){
        $(this).css('background','#000')
        $(this).css('border','1px solid #fff')
        $('.t-left').children('span').css('background','#000')
        $('.t-left').children('span').css('border','1px solid red')
        $('.bt-dui').css('background','#000');
        $('.bt-dui').css('border','1px solid #fff')

    }else{
        $(this).css('background','#fff')
        $(this).css('border','none')
        $('.t-left').children('span').css('background','#ccc')
        $('.t-left').children('span').css('border','none')
        $('.bt-dui').css('background','#fff');
        $('.bt-dui').css('border','none')
    }
})







