var h2 = document.querySelector('.answer');
var elSelect = document.querySelector('#numberchoose');
var elInp = document.querySelector('#input');

function calculator() {
    var selectValue = elSelect.value
    var inpValue = elInp.value
    var result = inpValue * selectValue

    h2.textContent = "Answer : " + result
}