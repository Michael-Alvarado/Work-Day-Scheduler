var currentDay = document.getElementById('currentDay');
const workHours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
const compHours = ['09','10','11','12','13','14','15','16','17'];

currentDay.innerText = moment().format('dddd, MMMM Do');
var currentTime = moment().format('HH');

for (var i=0; i<workHours.length; i++) {
    var rowForm = document.createElement('form');
    rowForm.classList.add('row', 'time-block');
    var hourBlock = document.createElement('label');
    hourBlock.textContent = workHours[i];
    hourBlock.setAttribute('for', workHours[i] + 'Input');
    hourBlock.classList.add('hour');
    var detailBlock = document.createElement('input');
    detailBlock.placeholder = 'Add your details';
    detailBlock.name = workHours[i] + 'Input';
    detailBlock.type = 'text';
    detailBlock.classList.add('description');
    detailBlock.setAttribute('id', workHours[i] + 'Input');
    if (currentTime === compHours[i]) {
        detailBlock.classList.add('present');
    } else if (currentTime < compHours[i]) {
        detailBlock.classList.add('future');
    } else {
        detailBlock.classList.add('past');
    }
    var saveBlock = document.createElement('button');
    saveBlock.classList.add('saveBtn');
    saveBlock.setAttribute('id', workHours[i] + 'Button');
    var saveIcon = document.createElement('i');
    saveIcon.classList.add('fas', 'fa-save');
    saveBlock.append(saveIcon);

    rowForm.append(hourBlock);
    rowForm.append(detailBlock);
    rowForm.append(saveBlock);

    document.querySelector('.container').appendChild(rowForm);
}

init();

const nineBtn = document.getElementById('9AMButton');
const tenBtn = document.getElementById('10AMButton');
const elevenBtn = document.getElementById('11AMButton');
const twelveBtn = document.getElementById('12PMButton');
const oneBtn = document.getElementById('1PMButton');
const twoBtn = document.getElementById('2PMButton');
const threeBtn = document.getElementById('3PMButton');
const fourBtn = document.getElementById('4PMButton');
const fiveBtn = document.getElementById('5PMButton');
// var inputElNine = document.querySelector('#9AMInput');

nineBtn.addEventListener('click', function(event) {
    event.preventDefault();

    // var notes = inputElNine.value.trim();
    var inputEl = document.querySelector('#9AMInput')

    // localStorage.setItem('9AM', notes);
    localStorage.setItem('9AM', inputEl.value.trim());
});

tenBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#10AMInput');

    localStorage.setItem('10AM', inputEl.value.trim());
});

elevenBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#11AMInput');

    localStorage.setItem('11AM', inputEl.value.trim());
});

twelveBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#12PMInput');

    localStorage.setItem('12PM', inputEl.value.trim());
});

oneBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#1PMInput');

    localStorage.setItem('1PM', inputEl.value.trim());
});

twoBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#2PMInput');

    localStorage.setItem('2PM', inputEl.value.trim());
});

threeBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#3PMInput');

    localStorage.setItem('3PM', inputEl.value.trim());
});

fourBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#4PMInput');

    localStorage.setItem('4PM', inputEl.value.trim());
});

fiveBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.querySelector('#5PMInput');

    localStorage.setItem('5PM', inputEl.value.trim());
});

function init() {

}