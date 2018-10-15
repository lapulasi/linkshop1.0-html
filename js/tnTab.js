/**
 * Created by liuyingshi on 16/11/15.
 */
var n = 0;
$(document).ready(function () {
    /*var num = $.frontEngine.getUrlParameter("index")==null?n:$.frontEngine.getUrlParameter("index");//从footer部分直接点进来带的参数
    $(".tnTabContent").eq(num).addClass("current").siblings().removeClass("current");//tab位置初始化
    $(".tnTab li").eq(num).addClass("active").siblings().removeClass("active");*/

    $(".tnTab li a").click(function () {
        n = $(".tnTab li a").index($(this));
        // alert(n)
        $(".tnTabContent").eq(n).addClass("current").siblings().removeClass("current");
        $(".tnTab li").eq(n).addClass("active").siblings().removeClass("active")
    })

    $(".tnTab1 li a").click(function () {
        sc.scrollTop(offSetTop);
        n = $(".tnTab1 li a").index($(this));
        // alert(n)
        $(".tnTabContent1").eq(n).addClass("current1").siblings().removeClass("current1");
        $(".tnTab1 li").eq(n).addClass("active1").siblings().removeClass("active1")
    })

    var nav = $(".tnTab1");
    var win = $(window);
    var sc = $(document);
    var offSetTop = 0;
    setTimeout(function () {
        offSetTop = $(".tnTab1").offset().top;
        console.log('offSetTop==='+offSetTop);
    },500)

    win.scroll(function () {
        if (sc.scrollTop() > offSetTop ) {
            nav.addClass("fixedNav")
        } else {
            nav.removeClass("fixedNav")
        }
    })
});
