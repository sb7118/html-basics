console.log("hello world!");

// let box1 = document.querySelector(".pics1");
let box1 = document.querySelector(".pics1");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get all the images within the pics1 div
let images = Array.from(box1.getElementsByTagName("img"));

// Randomize the order of the images
shuffle(images);

// Clear the current content of the pics1 div
box1.innerHTML = "";

// Append the images back to the pics1 div in the new randomized order
images.forEach(image => {
    box1.appendChild(image);
});

let box2 = document.querySelector(".pics2");

function shuffle2(array) {
    for (let i = 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get all the images within the pics1 div
let images2 = Array.from(box2.getElementsByTagName("img"));

// Randomize the order of the images
shuffle2(images2);

// Clear the current content of the pics1 div
box2.innerHTML = "";

// Append the images back to the pics1 div in the new randomized order
images2.forEach(image => {
    box2.appendChild(image);
});

let box3 = document.querySelector(".pics3");

function shuffle3(array) {
    for (let i = 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get all the images within the pics1 div
let images3 = Array.from(box3.getElementsByTagName("img"));

// Randomize the order of the images
shuffle3(images3);

// Clear the current content of the pics1 div
box3.innerHTML = "";

// Append the images back to the pics1 div in the new randomized order
images3.forEach(image => {
    box3.appendChild(image);
});

let box4 = document.querySelector(".pics4");

function shuffle4(array) {
    for (let i = 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get all the images within the pics1 div
let images4 = Array.from(box4.getElementsByTagName("img"));

// Randomize the order of the images
shuffle4(images4);

// Clear the current content of the pics1 div
box4.innerHTML = "";

// Append the images back to the pics1 div in the new randomized order
images4.forEach(image => {
    box4.appendChild(image);
});