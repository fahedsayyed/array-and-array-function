//concat() used to add array
const arr1 = ["sayyed" , "fahed" , "neha" , "ripu"];
const arr2 = ["farhan" , "adil" ,"faisal"];
const arr3 = arr1.concat(arr2)
console.log(arr3)

//
const data1 = [1,2,3,4,5];
const data2 = [6,7,8,9,0];
const newdata = data1.concat(data2)
console.log(newdata)

//copywithin() method  use to copy array element to another position in an array,overwriting existing values:
const fruits = ["apple", "banana" ,"mango" , "guava" ,"jackfruit"];
const vegetable = ["brocoli","potato","tomato"];
const newfruits = fruits.copyWithin(1,2,4)
console.log(newfruits)

//the include() method return true/false whether item present in list:
const list =["banana","orange","apple","mango"]
let find = list.includes("mango",3);
console.log(list)

//sort() method is used to sort element from lower to higher
const a = [0,9,8,7,6,5,4,3,2,1];
const newa = a.sort()
console.log(newa)

//reverse() method is used to sort from  lower to higher
const r = [1,2,3,4,5,6,7,8,9];
r.sort()
r.reverse()
console.log(r)

//join() method join the array element into a string:
const c = ["banana","orange", "apple","mango"];
const newc = c.join("*")
console.log(newc)

//pop() method remove the last element from the array;
const element = ["a","b","c","d","e","f"];
element.pop()
console.log(element)

//shift() method remove the first element from the array;
const x = [1,2,3,4,5,6,7,8];
x.shift()
console.log(x)

//push() method add the new element in last position of array;
const p = [1,2,3,4,5,6,7];
const newp = p.push(8)
console.log(p)

//unshift() method add the new element in first position of array:
const u =[1,2,3,4,5];
const newu = u.unshift(0)
console.log(u)

//splice() method use to change whithin element to an array;
const s = [1,2,5,6,7,8,9];
const news = s.splice(2,3,3,4)
console.log(s)

//length method used to find the index within array;
const i = ["apple","banana","watermelon","lemon"];
console.log(i.length)