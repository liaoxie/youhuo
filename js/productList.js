
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
                results += '<div class="goods" code="'+value.code+'"><img src="'+value.imgurl+'" alt=""><p>'+value.price+'</p><h3>'+value.title+'</h3><div>加入购物车</div></div>';
            });
            $('.main').html(results);
        }
    });

    //加入购物车
    $('.main').on('click','.goods div',function () {
        // goods => '{code: ['abc1','abc3','abc6']}'
        if (localStorage.getItem('goods')) {
            var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        } else {
            var codeArr = [];
        }
        var code = $(this).parent().attr('code');//商品编号
        // console.log(code);
        codeArr.push(code);
        var jsonStr = JSON.stringify({"code":codeArr});//转成json字符串
        localStorage.setItem('goods',jsonStr);//存储本地数据
        alert('成功加入购物车');
    })



})



