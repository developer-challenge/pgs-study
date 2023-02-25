function solution(food) {
  let setFood = '';
  for(let i = 1; i < food.length; i++) {
      if (food[i] < 2) continue;

      const half = Math.floor(food[i] / 2);
      setFood += String(i).repeat(half);
  }

  const reverseSetFood = setFood.split('').reverse().join('');

  return setFood + '0' + reverseSetFood;
}