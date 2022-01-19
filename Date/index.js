const date = new Date();

console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

const before = new Date("March 3 2019");
const now = new Date();

const different = now.getTime() - before.getTime();

const mins = Math.round(different / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const weeks = Math.round(days / 7);
const months = Math.round(weeks / 4);
const years = Math.round(months / 12);

console.log('This Video was create ' + years + " years ago");
