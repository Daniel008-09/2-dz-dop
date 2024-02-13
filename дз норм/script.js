const values = [100, 55, 15, 300, 20];

let total = 0;

for (let i = 0; i< values.length; i++){
    console.log(total + " + " + values[i] + " = " + (total + values[i]) + ";");

    total += values[i];
}

console.log("cумма " + total);