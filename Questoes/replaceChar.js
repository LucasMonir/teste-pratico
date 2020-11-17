/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */

const replaceChar = (string, times) => {
    let chars = string.split('');
    let counter = 1;

    for (let i = 0; i < chars.length; i++) {
        
        if (chars[i] == '?') {
            
            if (i == 0) {
                
                while (chars.slice(-counter)[0] == '?') {
                    counter++;
                }

                chars[0] = chars.slice(-counter)[0]

            }
            
            counter = 0;

            while (chars[i - counter] == '?') {
                counter++;
            }
            
            chars[i] = chars[i - counter];

            for (let j = 0; j < times - 1; j++) {
                chars.splice(i + j, 0, chars[i]);
            }
    
        }

    }
    
    return chars.join('');
}

export default replaceChar
