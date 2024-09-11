/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let count = 0;
    start =  start.toString(2);
    goal =  goal.toString(2);
    // const maxLength = start.length > goal.length ? start : goal; this will store the entire string which has greater length
    const maxLength = Math.max(start.length, goal.length);
    start = start.padStart(maxLength,'0');
    goal = goal.padStart(maxLength,'0');

    console.log(start, goal)
    for(let i = 0; i<=maxLength; i++){
        if(start[i] !== goal[i]){
            
            count++;
        }
    }
    return count;
};