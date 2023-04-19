let n = "name";
let a = "age";

const user1 = {
    [n]: "Hector",
    [a]: 30,
};

console.log(user1);

function makeObj(key, val){
    return {
        [key]: val 
    };
}

const obj = makeObj("성별","male");

console.log(obj);

const user = {
    name: "Hector",
    age:30,    
}

const asign = Object.assign({}, user); // 객체 복제
const key = Object.keys(user); // 키값만 반환
const value = Object.values(user); // 결과값만 반환
const entrie = Object.entries(user); // 두개의 배열로 반환(배열안의 배열)

console.log(asign);
console.log(key);
console.log(value);
console.log(entrie);

let arr = [
    ['mon','월'],
    ['tue','화']    
]

let result = Object.fromEntries(arr); // 배열을 객체로 반환

console.log(result);


