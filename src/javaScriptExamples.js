// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

const defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]')
}

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Follow up: Your solution should run in O(log n) time and O(1) space.

const singleNonDuplicate = function(nums) {
    let size = nums.length
    let found = false
    while (!found) {
        if (nums[0]===nums[1]) {
            let removed = nums.shift()
            let removeAgain = nums.shift()
        } else {
            found = true
        }
      
    }
    return nums[0]
}

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerNumbersThanCurrent = function(nums) {
    let result = []
    let count = 0
    for (let i = 0; i<nums.length; i++) {
        count = 0
        for (let j = 0; j<nums.length; j++) {
            if (i != j && nums[i]>nums[j]) {
                count++
            }
            
        }
        result.push(count)
    }
    return result
}

// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

const countSmaller = function(nums) {
    let result = []
    let count = 0
    for (let i = 0; i<nums.length - 1; i++) {
        count = 0
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i]>nums[j]) {
                count++
            }
        }
        result.push(count)
    }
    result.push(0)
    return result
}

// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = function(num) {
    let count = 0
  
    const helper = (number) => {
        if(number===0) {
            return count
        }
        count++
        if(number % 2 == 0) {
            return helper(number/2)
        } else {
            return helper(number-1)
        }
    }
    let result = helper(num)
    return result
}

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

const merge = function(intervals) {
    if (intervals.length<=1) return intervals
    intervals.sort((a,b) => (a[0] - b[0]))
    let i = 0
    while (i<intervals.length - 1) {
        let j = i + 1
        let swapped = false
        let newArr = []
        if (intervals[i][0]>=intervals[j][0]) {
            intervals[i][0] = intervals[j][0]
            swapped = true
        }
        if (intervals[i][1]>=intervals[j][0]) {
            swapped = true
            if (intervals[i][1]<intervals[j][1]) {
                intervals[i][1] = intervals[j][1]
            }
        }
        if (!!swapped) {
            newArr[0] = intervals[i][0]
            newArr[1] = intervals[i][1]
            intervals[i] = newArr
            let removed = intervals.splice(j,1)
          //  result.push(newArr)
         //   i = i + 2
            // if (i>=intervals.length - 1 && j!=intervals.length-1) {
              //  result.push(intervals.pop())
            //     break
            //     }
        } else {
            i++
        }
    }
      


       return intervals
}

// weakest chain problem
// O(n^2) solution
function solution(A) {
    let subResults = []
    for (let p=1; p < A.length - 3; p++) {
        let q = A.length - 2
        while (q-p>1) {
            subResults.push(A[p]+A[q])
            q--
        }
    }
    let result = Math.min(...subResults)
    return result
}

// let r = Array.from({length: 99999}, () => Math.floor(Math.random() * 999999));


// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
//Constraints:
// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.


var checkIfPangram = function(sentence) {
    let letters = []
    for(let i = 97; i<123; i++) {
        letters.push(i)
    }
    for(let i=0; i<sentence.length; i++) {
       
        let char = sentence.charCodeAt(i)
        let alph = letters.indexOf(char)
        console.log(sentence[i], !!alph, char, alph)
        if (alph != -1) {
           letters.splice(alph, 1)
        } 
    }
    console.log(letters)
    if (letters.length===0) {
        return true
    } else 
        return false
};

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

const countMatches = function(items, ruleKey, ruleValue) {
    let key;
    let value;
    switch(ruleKey) {
        case 'type':
            key = 0
            break;
        case 'color':
            key = 1
            break;
        case 'name':
            key = 2
            break;
        default:
            console.log("BAD!!!")
    }
        let count = 0
        for(let i = 0; i<items.length; i++) {
            if (items[i][key]==ruleValue) {
                count++
            }
        }
    return count
};

// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.

const maxIceCream = function(costs, coins) {
    let sorted = bubbleSortOptimized(costs)

}

// helpter to maxIceCream
function bubbleSortOptimized(arr) {
    // let temp;
    for (let i = 0; i<arr.length; i++) {
        let swapped = false
        for (let j = 0; j<(arr.length-1-i); j++) {
            if (arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true
            }
        }
        if (swapped==false) break
    }
    return arr
}