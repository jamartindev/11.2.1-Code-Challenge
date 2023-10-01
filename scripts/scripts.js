document.addEventListener('DOMContentLoaded', () => {
    function listeners() {
        document.querySelector('#btn1').addEventListener('click', postData);
    } listeners();


    let arrayData = []
    let userData = document.querySelectorAll('#nombre, #apellido, #fecha');

    function getData() {
        
        for (let i = 0; i < userData.length; i++) {
                arrayData.push(userData[i].value);
            };
        return arrayData;

    }; 

    function clearData() {
        for (let i = 0; i < userData.length; i++) {
            userData[i].value = "";
        };
        arrayData = [];
    }

    function postData() {

        const API = 'https://jsonplaceholder.typicode.com/users';
        
        getData();

        fetch(API, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                Nombre: arrayData[0],
                Apellido: arrayData[1],
                Nacimiento: arrayData[2]
            })
        })
        .then((response) => {
            if (response.status >= 200 && response.status < 400) {
            return response.json();
            } else {
                throw Error(response.statusText);
            };
        
        })
        .then((data) => console.log(data));

        clearData();
        
        
    };
});