let display = document.getElementById('display');

function appendnumber(num) {
    display.value += num;
    console.log(num)
}

function appendoperator(operator) {
    display.value += operator;
}

function appendDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function cleardisplay() {
    display.value = '';
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deletelast() {
    if (!display.value.decrement('--')) {

    }
}

function appendpercent() {
    if (!display.value.includes('100')) {
        display.value = '';
    }
}
