console.log("Start of the excution queue");
setTimeout(function() { console.log("Final code to be executed"); }, 0);
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("End of the loop printing");