var tableContent = document.getElementsByClassName('table-contents');
let tabLink = document.getElementsByClassName('tab-links');



function openTab(tableName) {
    for (let i = 0; i < tableContent.length; i++) {
        tableContent[i].classList.remove('active-table');
    }
    document.getElementById(tableName).classList.add('active-table');

    for (let i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove('active-list');
    }

    if(tableName == 'skill'){
        document.getElementById('skill-1').classList.add('active-list');
    }
    if(tableName == 'experience'){
        document.getElementById('experience-1').classList.add('active-list');
    }
    if(tableName == 'education'){
        document.getElementById('education-1').classList.add('active-list');
    }
}

const navBtn = (id) => {
    let navbarA = document.getElementsByClassName('navbar-a');
    let element = document.getElementById(id);
    for (let i = 0; i < navbarA.length; i++) {
        navbarA[i].classList.remove('active-nav');
    }
    if (element) { 
        // element.classList.add('active-nav');
        element.scrollIntoView({behavior: "smooth" });
    } else {
        console.error('Element with ID ' + id + ' not found.');
    }

    if(id == 'home'){
        document.getElementById('home-1').classList.add('active-nav');
    }
    if(id == 'about'){
        document.getElementById('about-1').classList.add('active-nav');
    }
    if(id == 'project'){
        document.getElementById('project-1').classList.add('active-nav');
    }
    if(id == 'contact'){
        document.getElementById('contact-1').classList.add('active-nav');
    }
};

// Listen for scroll events on the window
window.addEventListener('scroll', function() {
    // Get the About section and navbar element by ID
    var aboutSection = document.getElementById('about');
    var aboutNav = document.getElementById('about-1');

    // Calculate the position of the About section relative to the viewport
    var rect = aboutSection.getBoundingClientRect();

    // Check if the About section is in view
    if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // About section is in view, add the active class
        aboutNav.classList.add('active-nav');
    } else {
        // About section is not in view, remove the active class
        aboutNav.classList.remove('active-nav');
    }
});


const rightArrow = () => {
        let cardHolder1 = document.getElementById('card-holder-1');
        let cardHolder2 = document.getElementById('card-holder-2');
        let cardHolder3 = document.getElementById('card-holder-3');
        let cardHolder4 = document.getElementById('card-holder-4');
        let cardHolder5 = document.getElementById('card-holder-5');
        let cardHolder6 = document.getElementById('card-holder-6');
        let leftArrowBtn = document.getElementById('left-arrow');
        let rightArrowBtn = document.getElementById('right-arrow');

        cardHolder1.style.display = 'none';
        cardHolder2.style.display = 'none';
        cardHolder3.style.display = 'none';
        cardHolder4.style.display = 'block';
        cardHolder5.style.display = 'block';
        cardHolder6.style.display = 'block';
        leftArrowBtn.style.visibility = 'visible';
        rightArrowBtn.style.visibility = 'hidden';


}

const leftArrow = () => {
    let cardHolder1 = document.getElementById('card-holder-1');
    let cardHolder2 = document.getElementById('card-holder-2');
    let cardHolder3 = document.getElementById('card-holder-3');
    let cardHolder4 = document.getElementById('card-holder-4');
    let cardHolder5 = document.getElementById('card-holder-5');
    let cardHolder6 = document.getElementById('card-holder-6');
    let rightArrowBtn = document.getElementById('right-arrow');
    let leftArrowBtn = document.getElementById('left-arrow');

    cardHolder1.style.display = 'block';
    cardHolder2.style.display = 'block';
    cardHolder3.style.display = 'block';
    cardHolder4.style.display = 'none';
    cardHolder5.style.display = 'none';
    cardHolder6.style.display = 'none';
    rightArrowBtn.style.visibility = 'visible';
    leftArrowBtn.style.visibility = 'hidden';
}

let projectBtn1 = document.getElementById('project-btn-1');
let projectBtn2 = document.getElementById('project-btn-2');
let projectBtn3 = document.getElementById('project-btn-3');
let projectBtn4 = document.getElementById('project-btn-4');
let projectBtn5 = document.getElementById('project-btn-5');
let projectBtn6 = document.getElementById('project-btn-6');

projectBtn1.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

projectBtn2.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

projectBtn3.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

projectBtn4.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

projectBtn5.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

projectBtn6.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});