/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const hashMap = {};
    let count = words.length;

    for(let h = 0; h< allowed.length; h++){
        hashMap[allowed[h]] = true;
    }

    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(!hashMap[words[i][j]]){
                count -=1;
                break;
            }
        }
    }

    return count;
};