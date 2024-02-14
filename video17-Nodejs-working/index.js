//call stack

console.log('starting up');

setTimeout(()=>{
  console.log('2 second log');
},2000);

setTimeout(()=>{
  console.log('0 second log');
},0);

console.log('finishing up');

/*

output of this program will be
starting up
finishing up
0 second log
2 second log

even our second timeout fun has 0 second of delay still its running after  2nd console.log. why ?

=> we know that nodejs has written in c, Cpp, & javaScript and bcz setTimeout() is inherited from cpp it will go to the Node API's queue not in Call Stack. And the functions get stored into node api's queue will going to run after main call stack. if the main call stack is empty means main() from the main call stack has finished till the time function stored in node api's will wait in callback queue

//=======================================================================================================

video 17: https://www.youtube.com/watch?v=mGVFltBxLKU&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=18

Node js Architechture (How node js works)

watch video above
*/