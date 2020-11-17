/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */

const lettersSum = (string1, string2) => {
    let chars1 = string1.toLowerCase().split('').sort();
    let chars2 = string2.toLowerCase().split('').sort();

    let values1 = {
        highest: (chars1[chars1.length - 1].charCodeAt()) - 96,
        lowest: chars1[0].charCodeAt() - 96
    };

    let values2 = {
        highest: (chars2[chars2.length - 1].charCodeAt()) - 96,
        lowest: chars2[0].charCodeAt() - 96
    };

    return (values1.highest * values2.lowest) + (values1.lowest * values2.highest);
}

export default lettersSum;