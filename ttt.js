function getRandom() {
    return parseInt(90 * Math.random() + 10, 10)
}
t = (new Date).getTime() + getRandom().toString();
n = Number(t).toString(16);
i = n.length;
s = n.slice(i - 6, i).toUpperCase()+"01";
console.log(s);