// форма

function incr() {
    let numGuests = document.querySelector('.price__input');
    let x = numGuests.value;
    if (x >= 1 || x == 0) {
        let pluseGuests = Number(x) + Number(1);
        console.log(pluseGuests);
        numGuests.value = pluseGuests;
    }
}

function decr() {
    let numGuests = document.querySelector('.price__input');
    let x = numGuests.value;
    if (x >= 1) {
        let pluseGuests = Number(x) - Number(1);
        console.log(pluseGuests);
        numGuests.value = pluseGuests;
    }
}

function tourdate() {
    let dateIllusion = document.querySelector('.input__date-illusion');
    let dateInput = document.querySelector('.input__date');
    dateIllusion.innerHTML = dateInput.value;
}


//маска для номера тел
let phoneInput = document.querySelector('.input__tel');
phoneInput.addEventListener('keydown', function(event) {
    if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    var mask = '+7 (111) 111-11-11'; // Задаем маску

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i=currentLength; i<mask.length; i++) {
                    if (mask[i] == '1') {
                        this.value = currentString + event.key;
                        break;
                    }
                    currentString += mask[i];
                }
            }
        }
    }
});
