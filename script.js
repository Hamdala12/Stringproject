let statement = "A long time ago in a country far away from Nigeria...";
var worldlen=statement.length
console.log(worldlen)
// for A
console.log(statement.slice(0, 1));
console.log(statement.substring(0, 1));
console.log(statement.substr(0, 1))
// for ago
console.log(statement.slice(12, 16));
console.log(statement.substring(12, 16));
console.log(statement.substr(12, 3))
//for country
console.log(statement.slice(21, 29));
console.log(statement.substring(21, 29));
console.log(statement.substr(21, 8))
//for away
console.log(statement.slice(33, 38));
console.log(statement.substring(33, 38));
console.log(statement.substr(33, 5))
//for Nigeria
console.log(statement.slice(43, 50));
console.log(statement.substring(43, 50));
console.log(statement.substr(43, 7))
//for ...
console.log(statement.slice(50, 53));
console.log(statement.substring(50, 53));
console.log(statement.substr(50, 3))
