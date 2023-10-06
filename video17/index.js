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
video 17: https://www.youtube.com/watch?v=mGVFltBxLKU&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=18

Node js Architechture (How node js works)

watch video above
*/