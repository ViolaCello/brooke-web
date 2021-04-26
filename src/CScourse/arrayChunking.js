// Given an array and a Chunk size, 
// divide the array into many subarrays where 
// each subarray is of the provided size

function chunk(array, size) {
    let result = []
    if (array.length <= size) return result.push(array)
    while(result.length < size) {
        for (let i = 0; i<size-1; i++) {
            result.push(array.splice(0, size-1))
        }
    }
    return result
}