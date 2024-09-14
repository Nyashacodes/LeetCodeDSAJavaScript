function xorQueries(arr, queries) {
    const result = [];
    
    // Process each query
    for (let [left, right] of queries) {
        let xorResult = 0;
        // Compute XOR from arr[left] to arr[right]
        for (let i = left; i <= right; i++) {
            xorResult ^= arr[i];
        }
        result.push(xorResult);
    }
    
    return result;
}