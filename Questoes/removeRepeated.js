/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */

const removeRepeated = (string, limit) => {
    let chars = string.split('');

    for (let i = 0; i < chars.length; i++) {
        
        for (let j = 0; j < chars.length; j++) {
            
            if (chars[i] == chars[j]) {
                
                if (chars[i + limit] == chars[j]) {
                    chars.splice(i, 1);
                }

            }

        }

    }

    return chars.join('');
}

export default removeRepeated;