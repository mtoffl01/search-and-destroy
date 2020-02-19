'use strict';

// Complete this algo
const minJumps = arr => {
  if (arr.length === 0){
    return -1;
  }

  let memo = [0];
  for(let i=1; i<arr.length; i++){
    memo[i] = Number.MAX_SAFE_INTEGER;
  }
  for(let i=0; i<arr.length; i++){
    for(let j=i; j<=(i+arr[i]); j++){
      if(j<arr.length){
        memo[j] = Math.min( memo[j], (memo[i]+1) );
      }
    }
  }
  return memo[arr.length-1];
};

module.exports = minJumps
