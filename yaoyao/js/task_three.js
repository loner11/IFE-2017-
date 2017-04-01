var $ = function(selector) {
    return document.querySelector(selector);
};

var data = {
    '北京': ['北京大学', '清华大学'],
    '大连': ['大连理工大学', '大连海事大学', '大连东软信息学院'],
    '上海': ['上海交通大学', '复旦大学']
};

var sChecked = $('#sChecked'),
    cChecked = $('#cChecked'),
    selectCity = $('#selectCity'),
    selectSchool = $('#selectSchool'),
    school = $('#school'),
    career = $('#career');

//切换城市学校随之切换显示
var changeSchool = function() {
    //获取点击城市的名称
    var selectName = selectCity[selectCity.selectedIndex].value;
    selectSchool.innerHTML = '';
    //显示与城市相对应的学校
    for (var i = 0; i < data[selectName].length; i++) {
        var option = document.createElement('option');
        option.innerHTML = data[selectName][i];
        selectSchool.appendChild(option);
    }
}

selectCity.onchange = function() {
    changeSchool();
}

//显示切换的选项
var changeOption = function() {
    if (sChecked.checked) {
        school.style.display = 'table-row';
        career.style.display = 'none';
    } else {
        school.style.display = 'none';
        career.style.display = 'table-row';
    }
}

sChecked.onchange = function() {
    changeOption();
}

cChecked.onchange = function() {
    changeOption();
}