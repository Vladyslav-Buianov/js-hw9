const array = ['Mango', 'Poly', 'Ajax'];

function logItems(array) {
    let res =``;
    for (let i = 0; i < array.length; i++) {
        if (i > 0 === true) {
            res += ` ${i + 1} - ${array[i]}`;
        }else {
            res += `${i + 1} - ${array[i]}`;
        }
        
    }
    return res;
}

console.log(logItems(array));

function findLongestWord(string) {
    string = string.split(' ');
    let max = string[0].length;
    for (let i = 0; i < string.length; i += 1){
        if (max < string[i].length) {
            max = string[i];
        }
    }
    return max;
}

console.log(findLongestWord('Lorem ipsum dolor sit amet et consectetur adipiscing elit'));

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else if(string.length > 40) {
        const trunk = string.slice(0, 40).padEnd(43, '.');
        return trunk;
    }
}

console.log(formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit.'));

const checkForSpam = function (message) {
    return message.toLowerCase().includes('sale', 'spam') === true;
}

console.log(checkForSpam('Funko pop sale! Not spam.'));

let input = prompt('Insert random numbers without letters and simbols:');
const numbers = [];
let total = 0;

const sumProces = function (mess, nums, tot) {
const isDefined = 
    function (mess) {
        return mess === null;
    };
    if (isDefined(mess) === false) {
        nums = Array.from(mess);
        for (const addend of nums) {
            tot += Number.parseInt(addend);
        }
        return tot;
    }

isDefined(input);
}

console.log(sumProces(input, numbers, total));