let lines = gets().split("\n");
let t = 5;
let todas = 0;
let line = lines.shift().split(' ');
for(let i = 1; i < t; i++){
  todas = todas + parseInt(line.slice(-i));
}
todas = todas - 3;

console.log(todas);