// "use strict"

document.addEventListener("DOMContentLoaded", function () {
    console.log(1);
    let arr_p_count = document.getElementsByTagName("p").length -1 ;
    let possibleElem = [];

    for(let k = 0; k < arr_p_count; k++){
        possibleElem[k] = k;
    }

    for (let i = 0; i < arr_p_count; i++){
        let num1 = getRandomNum(0, possibleElem.length),
            num2 = getRandomNum(0, possibleElem.length);

        // удалили первый, вставили второй
        let del = document.body.replaceChild(document.body.childNodes[num1], document.body.childNodes[num2]);
        document.body.appendChild(del);//добавили удалённый в конец

        possibleElem.splice(1, num1);
        possibleElem.splice(1, num2);
    }
});

function getRandomNum(start, end){//случайное число в диапазоне
    return Math.floor(Math.random() * (end  + 1));
}
