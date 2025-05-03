export function getOptimalItems(items, minCalories, maxWeight) {
    const n = items.length;
    let bestCombination = [];
    let bestWeight = Infinity;
  
    const totalCombos = 1 << n;
  
    for (let mask = 0; mask < totalCombos; mask++) {
      const current = [];
      let totalCalories = 0;
      let totalWeight = 0;
  
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          current.push(items[i]);
          totalCalories += items[i].calories;
          totalWeight += items[i].weight;
        }
      }
  
      if (
        totalCalories >= minCalories &&
        totalWeight <= maxWeight &&
        totalWeight < bestWeight
      ) {
        bestWeight = totalWeight;
        bestCombination = current;
      }
    }
  
    return bestCombination;
  }
  