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