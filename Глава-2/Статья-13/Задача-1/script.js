let i = 3;

while (i) {
  alert( i-- );
}

// Последним будет 1
// Потому что после alert(i--), где i = 1,
// декримент превратит i = 0, а 0 = false