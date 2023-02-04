

$(function () {
    // 创建文字

    // 封装一个随机函数方便调用
    function ran(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    timer()
    function timer() {
        return ran(-30, 200)
    }

    function opacitys() {
        let opacity = parseInt($("img").css("opacity"));
        let sum = 0
        if (opacity == sum) {
            sum = 1
            opacity = sum
            $("img").css({
                top: "0vw",
                "opacity": opacity,
            })
        } else if (opacity > 0.999 || opacity == 1) {
            sum = 0
            opacity = sum
            $("img").css({
                top: "-20vw",
                // "opacity": opacity,
            })
        }
        return opacity
    }

    imgCss()
    function imgCss() {
        $("img").each(function (index, element) {
            element == this
            $("img").eq(index).css({
                "transform": "translate(" + ran(-10, 30) + "vw," + ran(-10, 30) + "vw)  scale(" + Math.random() * (1.5 - 1 + 1) + ")",
            })
        }).animate({
            top: "+20vw",
            "opacity": Math.random(),
        }, 5000, "linear");
    }

    // 定时器图片的随机位置
    stl()
    function stl() {
        setInterval(function () {
            imgCss()
        }, 5000)
    }
    // 生成div
    for (let i = 0; i < 150; i++) {
        let text = $(".box").append('<div class="text">I LOVE YOU! ❤</div>');
        // 设置文字盒子的位置
        // $(".text").eq(i).css({
        //     "transform": "translate(" + timer() + "vw," + timer() + "vw)  scale("+ Math.random() * (1.8 - 1 + 1) +")",
        // })
        // // 设置定时器
        // setInterval(function () {
        //     // timer()
        //     $(".text").eq(i).css({
        //         "transform": "translate(" + timer() + "vw," + timer() + "vw) scale("+ Math.random() * (1.8 - 1 + 1) +")",
        //     })
        // }, 5000);
    }

    textRan();
    function textRan() {
        $(".text").each(function (index, element) {
            // element == this
            $(".text").eq(index).css({
                "transform": "translate(" + timer() + "vw," + timer() + "vw)  scale(" + Math.random() * (1.8 - 1 + 1) + ")",
            }).animate({
                "opacity": Math.random(),
            }, 5000, "linear");
        });
    }
        // 设置定时器
    setInterval(function () {
    textRan();
    }, 5000);


    // 时间函数
    function countDown(time) {
        var nowTime = +new Date();  // 返回的时当前时间的总毫秒数 (时间戳)
        var inputTime = +new Date(time);  // 返回的是用户输入的总毫秒数
        var times = (nowTime - inputTime) / 1000;  // times 是剩余的总秒数
        var n, d, h, m, s;
        // n = parseInt(times / 60 / 60 / 24 / 365) // 年
        d = parseInt(times / 60 / 60 / 24);  // 天
        d = Math.abs(d)
        h = parseInt(times / 60 / 60 % 24);  // 小时
        h = Math.abs(h)
        m = parseInt(times / 60 % 60);  // 分
        m = Math.abs(m)
        s = parseInt(times % 60);   // 秒
        s = Math.abs(s)
        return `${p(d)}天` + `${p(h)}小时` + `${p(m)}分` + `${p(s)}秒`
        //+ p(d) + '天' + p(h) + '小时' + p(m) + '分' + p(s) + '秒'; // 调用补0函数
    }
    // console.log(countDown('2022-4-21 17:00:00'));
    //创建补0函数
    function p(s) {
        return s < 10 ? '0' + s : s;
    }

    // if((/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))) {
    // $(".love_time").html(countDown('2020/8/04'));
    // setInterval(function () {
    //     $(".love_time").html(countDown('2020/8/04'));
    // }, 1000)
    // }

    $(".love_time").html(countDown('2020/8/04'));
    setInterval(function () {
        $(".love_time").html(countDown('2020/8/04'));
    }, 1000)


    // 背景音乐
    play()
    function play() {
        let video = document.querySelector('video')
        video.style.display = 'none'
        let t = setInterval(function () {
            video.autoplay = 'false';
            if (video.autoplay === false) {
                clearInterval(t)
            }
        }, 1);

        window.addEventListener('load',function() {
            let video = document.querySelector('video')
            video.autoplay = 'false'
        })
    }
















})







