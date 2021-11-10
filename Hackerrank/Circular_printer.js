function cicularPrint(s) {
  let mins = 0;
  let count = 0
  const string = s.toLowerCase().split('')
  const letterTable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  // const letterTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let forwardPoint = 0
  let backwardPoint = 0
  let stringPoint = 0
  while (stringPoint < string.length) {

    if (backwardPoint < 0) {
      backwardPoint = letterTable.length - 1
    } else if (forwardPoint > letterTable.length - 1) {
      forwardPoint = 0
    }

    if (letterTable[forwardPoint] !== string[stringPoint] && letterTable[backwardPoint] !== string[stringPoint]) {
      forwardPoint++
      backwardPoint--
      count++
    }

    if (letterTable[forwardPoint] === string[stringPoint]) {
      mins += count
      backwardPoint = forwardPoint
      stringPoint++
      count = 0
    } else if (letterTable[backwardPoint] === string[stringPoint]) {
      mins += count
      forwardPoint = backwardPoint
      stringPoint++
      count = 0
    }
  }
  return mins
}


console.log(cicularPrint('UXDHVJGKLRLEMCKASKLJHDFLAKHSDF'))


// better optimization

function shortestTime(str) {
const alpha = buildLetterIndex();
	let last = ‘A’;
	let time = 0;
	for (let c of str) {
		time += getShortest(last, c, alpha);
		last = c;
	}
	return time;
}

const buildLetterIndex = () => {
	const alpha = “ABCDEFGHIJKLMNOPQRSTUVWXYZ”;
	const index = {};
	for (let i = 0; i < alpha.length; i++) {
index[alpha[i]] = i;
}
return index;
}

const getShortest = (c1,c2,alpha) => {
	const i1 = alpha[c1];
	const i2 = alpha[c2];
	const dist = Math.abs(i1 - i2); 
	return Math.min(dist, 26 - dist);
}
