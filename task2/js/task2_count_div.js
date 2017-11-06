"use strict"

let arr = [];
let absCount = 0,
    tempCount = 0,
    condition = true,
absParent, parent, arrDiv, arrChildren,
    colors;


document.addEventListener("DOMContentLoaded", function () {
    
    absParent = document.body,//глобальный родитель
    parent = document.body;//текущий родитель

    arrChildren = parent.children;// потомки текущего родителя
    
    rec(parent);
    let maxCount = getMax(arr);
    console.log(maxCount);
    colors = transitionColor("111111", "ff67bd", maxCount);
    console.log(colors);

    recColor(parent);
});

function getMax( array ){
   let temp = array[0];
   for(let t = 1; t < array.length; t++){
        if( array[t] > temp){
            temp = array[t];
        }
   }
   return temp;
};
    

function rec(current){
    if ( current.children.length != 0 ){//если есть потомки

        // console.log("у ", current, " есть потомки");
        for( let k = 0; k < current.children.length; k++ ){
            // console.log("мы сейчас в: ", current);
            // console.log("tempCount = ", tempCount);
            if( current.children[k].localName  == "div" ){
                tempCount++;//div - увеличили счётчик вложенности и вышли
                arr[arr.length] = tempCount;
                // console.log("нашли в потомках div, увеличили счётчик = ", tempCount);
            }
            
            rec(current.children[k]);
            // console.log("current.nextElementSibling = ", current.nextElementSibling);
            // console.log("мы сейчас в: ", current);
             if( ( k == current.children.length - 1) && ( current.localName == "div" ) ){
                tempCount--;
            } 
        }
    } else{//если нет потомков, сохраняем счётчик в глобальном массиве и выходим
        // console.log("у ", current, " нет потомков");
        if( current.localName == "div" ){
            tempCount--;
            arr[arr.length] = tempCount;
        }
    }
}

function transitionColor(from, to, count) {
    let div = count + 1;
    let int = parseInt(from, 16); // 100
    let intTo = parseInt(to, 16); // 50
    let list = []; // 5
    let diff = int - intTo; // 50
    let isNegative = diff < 0; // false
    let one = diff / div; // 10
   
    list.push(from);
    for (let i = 1; i <= div; i++) {
      list.push(Math.floor(int - (one * i)).toString(16));
    }
   
    return list;
};


function recColor(current){
    if ( current.children.length != 0 ){//если есть потомки
        for( let k = 0; k < current.children.length; k++ ){
            if( current.children[k].localName  == "div" ){
                tempCount++;//div - увеличили счётчик вложенности и вышли
                arr[arr.length] = tempCount;
                current.children[k].style.border = "5px solid #" + colors[tempCount];
            }
            
            recColor(current.children[k]);
             if( ( k == current.children.length - 1) && ( current.localName == "div" ) ){
                tempCount--;
            } 
        }
    } else{//если нет потомков, сохраняем счётчик в глобальном массиве и выходим
        if( current.localName == "div" ){
            tempCount--;
            arr[arr.length] = tempCount;
        }
    }
}


  