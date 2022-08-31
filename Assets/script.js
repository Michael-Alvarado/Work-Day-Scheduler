var currentDay = document.getElementById('currentDay');
var currentTime = moment().format('HH');

// Strings to reference when building out elements and IDs for table
const workHours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
const compHours = ['09','10','11','12','13','14','15','16','17'];

// Setting the current day in header
currentDay.innerText = moment().format('dddd, MMMM Do');

// Creating the work day table
for (var i=0; i<workHours.length; i++) {
    // Creating a new form and assigning row and time-block classes
    var rowForm = document.createElement('form');
    rowForm.classList.add('row', 'time-block');
    
    // Creating the label for the form and assigning the hour class
    var hourBlock = document.createElement('label');
    hourBlock.textContent = workHours[i];
    hourBlock.setAttribute('for', workHours[i] + 'Input');
    hourBlock.classList.add('hour');
    
    // Creating the input for the form and assigning the description class and unique ID
    var detailBlock = document.createElement('input');
    detailBlock.placeholder = 'Add your details';
    detailBlock.name = workHours[i] + 'Input';
    detailBlock.type = 'text';
    detailBlock.classList.add('description');
    detailBlock.setAttribute('id', workHours[i] + 'Input');
    // Adding additional class based on current time of day in comparison to work day times
    if (currentTime === compHours[i]) {
        detailBlock.classList.add('present');
    } else if (currentTime < compHours[i]) {
        detailBlock.classList.add('future');
    } else {
        detailBlock.classList.add('past');
    }

    // Creating the button for the form and assigning it the saveBtn class and a unique ID
    var saveBlock = document.createElement('button');
    saveBlock.classList.add('saveBtn');
    saveBlock.setAttribute('id', workHours[i] + 'Button');
    // Creating the icon for the save button and appending it to the button
    var saveIcon = document.createElement('i');
    saveIcon.classList.add('fas', 'fa-save');
    saveBlock.append(saveIcon);

    // Appending the pieces of the form to the form
    rowForm.append(hourBlock);
    rowForm.append(detailBlock);
    rowForm.append(saveBlock);

    // Appending the form to the container as a row
    document.querySelector('.container').appendChild(rowForm);
}

// Calling function that preloads any saved content in local storage
init();

// Button variables to add Event Listeners to
const nineBtn = document.getElementById('9AMButton');
const tenBtn = document.getElementById('10AMButton');
const elevenBtn = document.getElementById('11AMButton');
const twelveBtn = document.getElementById('12PMButton');
const oneBtn = document.getElementById('1PMButton');
const twoBtn = document.getElementById('2PMButton');
const threeBtn = document.getElementById('3PMButton');
const fourBtn = document.getElementById('4PMButton');
const fiveBtn = document.getElementById('5PMButton');

// Adding Event Listeners to save buttons and storing content to local storage
nineBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('9AMInput');

    localStorage.setItem('9AM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
tenBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('10AMInput');

    localStorage.setItem('10AM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
elevenBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('11AMInput');

    localStorage.setItem('11AM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
twelveBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('12PMInput');

    localStorage.setItem('12PM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
oneBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('1PMInput');

    localStorage.setItem('1PM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
twoBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('2PMInput');

    localStorage.setItem('2PM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
threeBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('3PMInput');

    localStorage.setItem('3PM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
fourBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('4PMInput');

    localStorage.setItem('4PM', inputEl.value.trim());
});

// Adding Event Listeners to save buttons and storing content to local storage
fiveBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputEl = document.getElementById('5PMInput');

    localStorage.setItem('5PM', inputEl.value.trim());
});

// Function to pull content from local storage from previous visit(s)
function init() {
    for (var i=0; i<workHours.length; i++) {
        var notes = document.getElementById(workHours[i] + 'Input');
        notes.value = localStorage.getItem(workHours[i]);
    }
}