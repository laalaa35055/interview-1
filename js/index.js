// 檢查登入
let loggin = false;
let myVar;
let UserName = 'test0001', Money = '4,600.00';

function Echo(Message) {
    alert(Message);
}


function Login() {
    let text;
    btn = $("#LogBtn")
    if (loggin === false) {
        text = '登入成功'
        btn.hide();
        $(".Fun-List").show();
        $(".Signout").text('登出');
        $("#Info").css('display', 'flex');
        $('#InfoUName').text(UserName);
        $('#InfoUMoney').text(" $ "+Money);
    } else {
        text = '登出成功'
        btn.show();
        $("#Money").text('');
        $(".Fun-List").hide();
        $(".Signout").text('未登入');
        $("#Info").hide();
    }
    loggin = !loggin;
    Tip(text);
}

for (let i = 0; i < $('.check').length; i++) {
    $('.check')[i].addEventListener('click', () => {
        clearTimeout(myVar);
        if (loggin === true) {
            Tip('敬請期待');
        } else {
            Tip('請先登入');
        }
    });
}
$('.hub')[0].addEventListener('click', () => {
    $('#items').css('right', Math.round((window.innerWidth - 768) / 2));
    let SH = $('#items').css('display');
    if (loggin === true) {
        $("#UserName").text(UserName);
        $('#Money').text("💰"+Money+"( TWD ) ");

    } else {
        $("#UserName").text('尚未登入');
    }
    if (SH === 'none') {
        $('#items').stop().fadeIn(500).css({
            'z-index': 5,
        });

    } else {
        $('#items').stop().fadeOut(500).css({
            'z-index': -3,
        });
    }
});


// 提示
function Tip(Message) {
    $('#LogginTip').css('display', 'flex');
    $('.TipText').text(Message);
    myVar = setTimeout(() => {
        $('#LogginTip').hide();
    }, 1500);
}

// 點擊其他區域取消
window.addEventListener('click', function (e) {
    if (e.target != $('.hub')[0] && e.target != $('.next')[0]) {
        $('#items').stop().fadeOut(500).css({
            'z-index': -3,
        });
    }
});