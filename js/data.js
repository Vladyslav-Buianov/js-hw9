const array = ['Mango', 'Poly', 'Ajax'];

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        const res = `${i + 1} - ${array[i]}`;
        console.log(res);
    }
    return; 
}

logItems(array);

function findLongestWord(string) {
    string = string.split(' ');
    let max = string[0].length;
    for (let i = 0; i < string.length; i += 1){
        if (max < string[i].length) {
            max = string[i];
        }
    }
    console.log(max);
    return;
}

findLongestWord('Lorem ipsum dolor sit amet et consectetur adipiscing elit');

function formatString(string) {
    if (string.length <= 40) {
        console.log(string);
    } else if(string.length > 40) {
        const trunk = string.slice(0, 40).padEnd(43, '.');
        console.log(trunk);
    }
    return;
}

formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit.');

const checkForSpam = function (message) {
    return message.toLowerCase().includes('sale', 'spam') === true;
}

checkForSpam(' Not spam.')

let input = prompt('Insert random numbers without letters and simbols:');
const numbers = [];
let total = 0;

const sumProces = function (mess, nums, tot) {
const isFormatted = 
    function (mess) {
        return mess === null;
    };
    if (isFormatted(mess) === false) {
        nums = Array.from(mess);
        for (const addend of nums) {
            tot += Number.parseInt(addend);
        }
        return console.log(tot);
    }

isFormatted(input);
}

sumProces(input, numbers, total);