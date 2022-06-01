let lines = gets().split('\n');
var N = parseInt(lines.shift());
let resultado;
for (let i = 1; i <= N; i++) {
	if (i % 2 === 0 ) {
	
	    resultado=i*i;
	  
        print(`${i}^2 = ${resultado}`);
	}                
}