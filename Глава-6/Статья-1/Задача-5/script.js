let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function printList(list) {
//     let arr = [];
//
//     while (list) {
//         arr.push(list.value);
//         list = list.next;
//     }
//
//     for (let i of arr.reverse()) {
//         console.log(i);
//     }
// }

function printList(list) {
    if (list.next) {
        printList(list.next);
    } 

    console.log(list.value);
}

console.log( printList(list) );