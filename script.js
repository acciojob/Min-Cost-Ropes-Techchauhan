function mincost(arr) {
  // Agar array mein 0 ya 1 element ho, to koi jodne ka cost nahi hoga
  if (arr.length <= 1) return 0;

  // Ropes ko sort karte hain (yeh min-heap ka kaam karega)
  let heap = [...arr].sort((a, b) => a - b);

  let totalCost = 0;

  // Jab tak 1 se zyada ropes hain, tab tak loop chalta rahega
  while (heap.length > 1) {
    // Sabse chhoti 2 ropes nikaal lo
    let first = heap.shift(); // Smallest element
    let second = heap.shift(); // Second smallest element

    // Unhe jodne ka cost calculate karo
    let cost = first + second;
    totalCost += cost;

    // Nayi rope ko dobara add karo
    heap.push(cost);

    // Phir se array ko sort karo taaki smallest elements pehle aaye
    heap.sort((a, b) => a - b);
  }

  // Final total cost return karo
  return totalCost;
}
 

module.exports=mincost;
