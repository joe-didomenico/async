'use strict'
const divElData = document.getElementById('divData');
let oReq = new XMLHttpRequest();

//oReq.open("GET", "https://neocities.org/site_files/text_editor/users.json");


function getData() {
    // alert('in getData');
    oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
    oReq.send();
}

oReq.onload = function() {
    // console.log('onload fired' );
    if (oReq.status == 200) {
        // console.log('req.status == 200 got it');
        // console.log (req.response); 
        console.log(JSON.parse(oReq.response));
        let arrOfObjs = JSON.parse(oReq.response);
        let strHTML = '';
        for (let item of arrOfObjs) {
            strHTML = strHTML + `<p>${item['name']}</p>`
        }
        divElData.style.border = '1px solid black';
        divElData.innerHTML = strHTML;
        // debugger;
        // divElData.innerHTML = arrOfObjs;
        // debugger;
        // divElData.innerText = strHTML;
        // debugger;
        // divElData.innerText = arrOfObjs;
        // debugger;

        // debugger;
        // console.log('arrDataXML == em_data ' + arrDataXML == em_data );
        //   doXML(arrDataXML);
    } else {
        // console.log('ERROR', req.statusText); 
        alert("error getting data" + req.status);
    }
};


async function getFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
    divElData.innerHTML = JSON.stringify(myJson);


}