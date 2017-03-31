var $ = function(selector) {
    return document.querySelector(selector);
};

var promptContent = ['必填，长度为4～16个字符', '请输入密码，长度为6～12个字符', '再次输入相同密码', '请正确输入邮箱', '请正确输入手机号'],
    rightPromptContent = ['名称格式正确', '密码可用', '密码输入一致', '邮箱格式正确', '手机格式正确'],
    errorPromptContent = [
        ['名称不能为空', '名称只能包含中文、英文和数字,字符不能单独出现', '长度只能为4～16个字符'],
        ['密码不能为空', '密码只能包含英文和数字', '长度只能为6～12个字符'],
        ['密码输入不一致'],
        ['邮箱格式不能为空', '邮箱格式错误'],
        ['手机格式不能为空', '手机格式错误']
    ];

var rightCheckColor = function(inputId, promptId) {
    $(inputId).style.borderColor = 'green';
    $(promptId).style.color = 'green';
};

var errorCheckColor = function(inputId, promptId) {
    $(inputId).style.borderColor = 'red';
    $(promptId).style.color = 'red';
}

window.onload = function() {
    var name = $('#name'),
        pName = $('#p-name'),
        password = $('#password'),
        pPassword = $('#p-password'),
        cPassword = $('#confirmPassword'),
        pCPassword = $('#p-cpassword'),
        email = $('#email'),
        pEmail = $('#p-email'),
        phone = $('#phone'),
        pPhone = $('#p-phone'),
        submit = $('#submit');

    //验证名称，显示提示信息
    name.onfocus = function() {
        pName.innerText = promptContent[0];
        pName.style.color = '#a0a0a0';
    };

    name.onblur = function() {
        pName.innerText = checkName(name.value);
        if (checkName(name.value) == rightPromptContent[0]) {
            rightCheckColor('#name', '#p-name');
        } else {
            errorCheckColor('#name', '#p-name');
        }
    };

    //验证密码，显示提示信息
    password.onfocus = function() {
        pPassword.innerText = promptContent[1];
        pPassword.style.color = '#a0a0a0';
    };

    password.onblur = function() {
        pPassword.innerText = checkPassword(password.value);
        if (checkPassword(password.value) == rightPromptContent[1]) {
            rightCheckColor('#password', '#p-password');
        } else {
            errorCheckColor('#password', '#p-password');
        }
    };

    //验证确认密码，显示提示信息
    cPassword.onfocus = function() {
        pCPassword.innerText = promptContent[2];
        pCPassword.style.color = '#a0a0a0';
    };

    cPassword.onblur = function() {
        pCPassword.innerText = checkConfirmPassword(cPassword.value);
        if (checkConfirmPassword(cPassword.value) == rightPromptContent[2]) {
            rightCheckColor('#confirmPassword', '#p-cpassword');
        } else {
            errorCheckColor('#confirmPassword', '#p-cpassword');
        }
    };

    //验证邮箱，显示提示信息
    email.onfocus = function() {
        pEmail.innerText = promptContent[3];
        pEmail.style.color = '#a0a0a0';
    };

    email.onblur = function() {
        pEmail.innerText = checkEmail(email.value);
        if (checkEmail(email.value) == rightPromptContent[3]) {
            rightCheckColor('#email', '#p-email');
        } else {
            errorCheckColor('#email', '#p-email');
        }
    };

    //验证手机，显示提示信息
    phone.onfocus = function() {
        pPhone.innerText = promptContent[3];
        pPhone.style.color = '#a0a0a0';
    };

    phone.onblur = function() {
        pPhone.innerText = checkPhone(phone.value);
        if (checkPhone(phone.value) == rightPromptContent[4]) {
            rightCheckColor('#phone', '#p-phone');
        } else {
            errorCheckColor('#phone', '#p-phone');
        }
    };

    //验证全部
    submit.onclick = function() {
        if (name.style.borderColor == 'green' && password.style.borderColor == 'green' && cPassword.style.borderColor == 'green' && email.style.borderColor == 'green' && phone.style.borderColor == 'green') {
            alert('输入格式正确');
        } else {
            alert('输入格式有误');
        }
    };
};

var checkName = function(str) {
    var newStr = str.replace(/^\s*|\s*|\s*$/g, '').replace(/\u4E00-\u9FA5/g, '**');
    if (newStr === '') {
        return errorPromptContent[0][0];
    } else if (!(/[0-9a-zA-Z\u4E00-\u9FA5]/g.test(newStr))) {
        return errorPromptContent[0][1];
    } else if (newStr.length < 4 || newStr.length > 16) {
        return errorPromptContent[0][2];
    } else {
        return rightPromptContent[0];
    }
};

var checkPassword = function(str) {
    var newStr = str.replace(/^\s*|\s*|\s*$/g, '');
    if (newStr === '') {
        return errorPromptContent[1][0];
    } else if (!(/^[0-9a-zA-Z]/g.test(newStr))) {
        return errorPromptContent[1][1];
    } else if (newStr.length < 6 || newStr.length > 12) {
        return errorPromptContent[1][2];
    } else {
        return rightPromptContent[1];
    }
};

var checkConfirmPassword = function(str) {
    if (str === '' || str !== $('#confirmPassword').value) {
        return errorPromptContent[2][0];
    } else {
        return rightPromptContent[2];
    }
};

var checkEmail = function(str) {
    if (str === '') {
        return errorPromptContent[3][0];
    } else if (/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(str)) {
        return rightPromptContent[3];
    } else {
        return errorPromptContent[3][1];
    }
};

var checkPhone = function(str) {
    if (str === '') {
        return errorPromptContent[4][0];
    } else if (/^1[34578]\d{9}/g.test(str)) {
        return rightPromptContent[4];
    } else {
        return errorPromptContent[4][1];
    }
};