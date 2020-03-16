console.log('helo wrld');

let theList = document.querySelector('.todo');
let item = document.querySelector('.new-item');
let addBttn = document.querySelector('.add-item');
let leftCount = document.querySelector('.total');
let doneCount = document.querySelector('.done-total');
let importCount = document.querySelector('.import-total');
let banishComplete = document.querySelector('.clear-finished');
// let todo = []; // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
// let finished = []; // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work

leftCount.innerText = '0';

let updateItemCount = () => {
    // leftCount.innerText = todo.length - finished.length; // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
    leftCount.innerText = document.querySelectorAll('li:not(.finished').length;
    doneCount.innerText = document.querySelectorAll('li.finished').length;
    importCount.innerText = document.querySelectorAll('li.important').length;
};
updateItemCount();

let isFieldValid = () => {
    if (item.value.trim() === '') {
        alert("I'm sorry Chris, I'm afraid I Can't do that... Dasiy, Dais..");
        return false;
    }
    return true;
};

let addItem = () => {
    if (isFieldValid()) {
        let newItem = document.createElement('li');
        let checkyBox = document.createElement('button');
        let important = document.createElement('div');

        // todo.push(newItem); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
        checkyBox.innerText = '❌';
        important.innerText = '❕';

        checkyBox.addEventListener('click', function() {
            newItem.classList.toggle('finished');
            if (newItem.classList.contains('finished')) {
                // newItem.classList.remove("important"); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                checkyBox.innerText = '✅';
                // important.innerText = "❕"; // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                // important.classList.remove("important"); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                // if (finished.indexOf(newItem) === -1) { // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                //     finished.push(newItem); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                // } // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                updateItemCount();
            } else {
                checkyBox.innerText = '❌';
                // let foundItemIndex = finished.indexOf(newItem); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                // finished.splice(foundItemIndex, 1); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
                updateItemCount();
            }
            // console.log("finished", finished); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
        });
        important.addEventListener('click', () => {
            newItem.classList.toggle('important');
            // if (newItem.classList.contains("finished")) { // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
            //     newItem.classList.remove("important"); // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
            // } else // I Have Left This Bit of Array Work a Memorial to My Hard Work Getting it to Work
            if (newItem.classList.contains('important')) {
                important.innerText = '❗';
            } else {
                important.innerText = '❕';
            }
            updateItemCount();
        });

        newItem.innerText = item.value;
        theList.appendChild(newItem);
        newItem.appendChild(checkyBox);
        newItem.appendChild(important);
        item.value = '';
        item.placeholder = 'Please Enter New Item';
        item.focus();

        updateItemCount();
    }
};

let removeItems = () => {
    let markForBanish = document.querySelectorAll('.finished');
    for (var i = 0; i < markForBanish.length; i++) {
        markForBanish[i].remove();
    }
    updateItemCount();
};

addBttn.addEventListener('click', addItem);
window.addEventListener('keyup', function() {
    if (event.code === 'Enter') {
        addItem();
    }
});

banishComplete.addEventListener('click', removeItems);
