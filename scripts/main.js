
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.png'){
        myImage.setAttribute('src', 'images/maxresdefault.jpg')
    } else {
        myImage.setAttribute('src', 'images/download.png')
        
    }   
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myHeading.textContent = localStorage.getItem('name') + ' Enjoys Youtube'

function setUserName() {
    let myName = prompt('Please Enter Your Name');
    if(myName!==null){
    myHeading.textContent = myName + ' Enjoys Youtube!';
    localStorage.setItem('name', myName);
    } else {
        myHeading.textContent = 'Do you ❤️ Youtube?'

    }
}

myButton.onclick = function(){
    setUserName();
}
let savedName = localStorage.getItem('name');