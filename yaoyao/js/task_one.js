var $ = function(selector) {
    return document.querySelector(selector);
};

var lenReg = /^.{4,16}/g, //长度验证
    chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g, //汉字、中文符号验证
    trimReg = /^\s*|\s*$/g; //去除字符串开头和结尾的空格

$('#validate').onclick = function() {
    validate();
    $('#input').value = '';
};

var validate = function() {
    var inputValue = $('#input').value;
    var newStr = inputValue.replace(trimReg, '').replace(chineseReg, '**');
    if (newStr.length === 0) {
        $('span').innerText = '姓名不能为空';
        $('span').style.color = 'red';
        $('input').style.borderColor = 'red';
    } else if (!lenReg.test(newStr)) {
        $('span').innerText = '字符长度必须为4～16个字符';
        $('span').style.color = 'red';
        $('input').style.borderColor = 'red';
    } else {
        $('span').innerText = '名称格式正确';
        $('span').style.color = 'green';
        $('input').style.borderColor = 'green';
    }
};