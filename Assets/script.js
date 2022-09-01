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
    saveBlock.setAttribute('id', workHours[i]);
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

// Button variable to add Event Listeners to
let saveBtn = document.getElementsByClassName('saveBtn');

// Adding event listener to each button in the array
Array.from(saveBtn).forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        eventList(event);
    });
});

// Function to push input to local storage
function eventList (element) {
    var valueToPush = element.path[2][0].value;
    localStorage.setItem(element.path[1].id, valueToPush.trim());
}

// Function to pull content from local storage from previous visit(s)
function init() {
    for (var i=0; i<workHours.length; i++) {
        var notes = document.getElementById(workHours[i] + 'Input');
        notes.value = localStorage.getItem(workHours[i]);
    }
}