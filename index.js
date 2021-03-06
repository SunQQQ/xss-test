function MessageBox() {}

// 封装请求数据的方法，实现重用
MessageBox.prototype.myAjax = function (para) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", para.url, true);

    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(para.data ? para.data : '');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
            para.success(xhr.responseText);
        }
    };
};

function set(){
    var messageBox = new MessageBox();

    var para = JSON.stringify({
        userName: '大圣',
        score: 1.5,
        gameTime: '50s',
        createTime: '2021/09/15'
    });

    console.log('jj');

    messageBox.myAjax({
        // url: 'http://39.104.22.73:8081/ScoreCreate/foreend',
        // url: 'localhost:8081/ScoreCreate/foreend',
        url: 'localhost:71/ScoreCreate/foreend',
        data: para,
        success: function (data) {
            // 重载英雄榜
            document.getElementsByClassName('callback')[0].append(data + '<br/>');
        }
    });
};

document.getElementById('begin').addEventListener('click',set);

var messageBox = new MessageBox();

var para = JSON.stringify({
    userName: 'script',
    score: 450,
    gameTime: '80s',
    createTime: '2021/09/15'
});

console.log('jj');

messageBox.myAjax({
    url: 'http://39.104.22.73:8081/ScoreCreate/foreend',
    // url: 'localhost:8081/ScoreCreate/foreend',
    // url: 'http://localhost:71/api/ScoreCreate/foreend',
    url: 'http://localhost:71/api/MessageCreate/foreend',
    data:para,
    success: function (data) {
        // 重载英雄榜
        document.getElementsByClassName('callback')[0].append(data + '<br/>');
    }
});