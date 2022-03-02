document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const form = document.querySelector('.needs-validation');
    let result = document.createElement('div');
    result.classList.add('result');
    document.body.appendChild(result);


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        function formValidity() {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }
        formValidity();


        const nodeList = form.querySelectorAll('.form-control');
        const isGender = form.querySelectorAll('[type="radio"]');
        const isAge = form.querySelector('#invalidCheck');
        const array = Array.from(nodeList);
        const isBoolean = isAge.checked;


        function createDiv() {
            const arrayList = array.map((item) => ({
                name: item.name,
                value: item.value
            }));
            const resultList = arrayList.map(item => `<div>${item.name}: ${item.value}</div>`);
            result.innerHTML = resultList.join('');

        }
        createDiv();

        function radioValidity(a) {
            for (let i = 0; i < a.length; i++) {
                if (a[i].checked) {
                    result.innerHTML += `<div>${a[i].name} : ${a[i].value}</div>`;
                }
            }
        }
        radioValidity(isGender);

        function checkboxValidity(a, b) {
            if (a) {
                result.innerHTML += `<div>${b.name} :${a}</div>`;
            }
        }
        checkboxValidity(isBoolean,isAge);

        function correctName(a) {
            let reg = /[1-5]/g;
            for (let key in a.slice(0, 2)) {
                a[key].value = a[key].value.replace(reg, '');
            }
        }
        correctName(array);
        

    });


});