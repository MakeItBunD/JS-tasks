let map = new Map();

map.set("name", "John");

console.log(map)

//let keys = Array.from(map.keys());
// Или
let keys = [...map.keys()];

console.log(keys)

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys)