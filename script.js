var tableContent = document.getElementsByClassName('table-contents');
// let tableContent = document.getElementsByClassName('table-contents');


function openTab(tableName) {
    for (let i = 0; i < tableContent.length; i++) {
        tableContent[i].classList.remove('active-table');
    }
    document.getElementById(tableName).classList.add('active-table');
}