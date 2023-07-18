



function mergeSort(myArr) {
    let len = myArr.length; 
    if (len < 2) {
        return myArr;
    } else {
        halfLen = Math.ceil(len / 2);
        let first = myArr.slice(0, halfLen);
        let second = myArr.slice(halfLen);
        let left = mergeSort(first);
        let right = mergeSort(second);
        console.log(left);
        console.log(right)
        return orderUp(left, right);
    }
};

function orderUp(left, right) {
    // const lenL = left.length;
    // const lenR = right.length;
    // const lenTotal = lenL + lenR;
    let sorted = [];
    let indexL = 0;
    let indexR = 0;
    while (indexL < left.length && indexR < right.length) {
        if (left[indexL] < right[indexR]) {
            sorted.push(left[indexL]);
            indexL++;
        } else {
            sorted.push(right[indexR]);
            indexR++;
        }
    }
    if (left.length) {
        let goodArray = sorted.concat(left.slice(indexL));
        console.log(goodArray);
        return goodArray;
    } else {
        let goodArray = sorted.concat(right.slice(indexR));
        console.log(goodArray);
        return goodArray;
    }
};


        


// let second = myArr.slice(halfLen);

// console.log(second);
// mergeSort(first);
// let sortedR = mergeSort(second);
// if (sortedL < sortedR) {
//     sortedList.push(sortedL);
//     sortedList.push(sortedR);
// } else {
//     sortedList.push(sortedR);
//     sortedList.push(sortedL);
// }

let list = [8, 5, 4, 3, 7, 6, 2, 1];
let x; 
mergeSort(list);
// console.log(sortedList);
