let array=[];
for(let i=0;i<5;i++){
    let input=prompt(`Enter number ${i + 1}:`);
    array.push(input);
}
let asc_Array = [...array].sort((x, y) => x - y);
let desc_Array = [...array].sort((x, y) => y - x);
console.log("Original Array:", array);
console.log("Ascending Order:", asc_Array);
console.log("Descending Order:", desc_Array);