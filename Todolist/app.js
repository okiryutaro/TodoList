$(function (){
    setInterval(function(){
        let Now = new Date();
        let y = Now.getFullYear();
        let m = Now.getMonth() + 1;
        let d = Now.getDate();
        let w = Now.getDay();
        let wd = ['日', '月', '火', '水', '木', '金', '土'];
        let h = Now.getHours();
        let mi = Now.getMinutes();
        let s = Now.getSeconds();
        $('#now').text(`${y}年${m}月${d}日${h}時${mi}分${s}秒(${wd[w]})`);
    });

    // 追加機能
    let timerIds=[];
    let ids = []
    let i = 0
    $('#add').on('click',function(){
        let endDateTime = new Date($('#time').val());
        let y = endDateTime.getFullYear();
        let m = endDateTime.getMonth() + 1;
        let d = endDateTime.getDate();
        let h = endDateTime.getHours();
        let mi = endDateTime.getMinutes();
        let time = `${y}年${m}月${d}日${h}時${mi}分`;
        $('#accordion_one').append(`<div class="item"><label class="ECM_CheckboxInput"><input class="ECM_CheckboxInput-Input" type="checkbox"><span class="ECM_CheckboxInput-DummyInput"></span><span class="ECM_CheckboxInput-LabelText"></span></label><li class="object">${$('#text').val()}</li><p>期限:${time}</p><button id="remove">削除</button></div>`)
        $(function (){
            $('.object').each(function(i){
                $(this).attr('id','item' + (i+1))
                ids[i]= $(this).attr('id')
                console.log(i);
                console.log(ids[i]);
            })
                clearInterval(timerIds[i])
                timerIds[i] = setInterval(function(){
                    let startDateTime = new Date();
                    console.log(startDateTime);
                    console.log(endDateTime);
                    //過ぎたとき
                    if(startDateTime >= endDateTime){
                        clearInterval(timerIds[i])
                        // console.log(timerIds[i]);
                        // console.log('終了');
                        // let connectCount = $('.item').index(this)
                        // console.log(connectCount);
                        // let showCount = connectCount+ i+2
                        // console.log(showCount);
                        // console.log(ids);
                        $('#'+ids[i]).append('期限が過ぎました!').css('color','red')
                    }
                },1000);
                // 削除機能
                $('body').on('click','#remove',function(){
                    $(this).parent().remove()
                    clearInterval(timerIds[i])
                });
                i++
            });
            $('#text').val('')
            $('#time').val('')
        });
        // チェックしたら削除
        $('body').on('click','.ECM_CheckboxInput-DummyInput',function(){
            $(this).parent().parent().delay(2000).fadeOut("slow")
        });

    // 詳細メニュー
    $(function(){
        //.accordion_oneの中の.itemがクリックされたら
        $('.accordion_one .item').click(function(){
          //クリックされた.accordion_oneの中の.itemに隣接する.accordion_innerが開いたり閉じたりする。
          $(this).next('.accordion_inner').slideToggle();
          $(this).toggleClass("open");
          //クリックされた.accordion_oneの中の.item以外の.accordion_oneの中の.itemに隣接する.accordion_oneの中の.accordion_innerを閉じる
          $('.accordion_one .item').not($(this)).next('.accordion_one .accordion_inner').slideUp();
          $('.accordion_one .item').not($(this)).removeClass("open");
        });
      });

    
});
 
