var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const results = [intervals[0]];
    
    for (let interval of intervals) {
      let e1 = results[results.length-1][1]
      let s1 = interval[0]
      let e2 = interval[1]
      if (e1 >= s1) {
        results[results.length - 1][1] = Math.max(e1 , e2);
      } else {
        results.push(interval)
      }
    }
  return results
};