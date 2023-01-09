// set Datastructure don't allow duplication.
// set has to be uniqued

// 0. Definition
const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto"]);

console.log(new Set("Jonas"));
console.log(orderSet.size);

// 1. Check
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

// 2. Add & Delete & clear
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

// 3. loop
for (const order of orderSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set("jonasschmedtamann").size);
