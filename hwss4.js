//exs1 
let inventory = {
    gold: 500,
    pouch: ["flint","twine", "gemstone"],
    backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
}
console.log(inventory)
inventory.pocket= ["seashell", "strange berry", "lint"]
console.log(inventory)
inventory.backpack.splice(1, 1)
console.log(inventory)
inventory.gold=inventory.gold+50
console.log(inventory)
// exs2
let prices={
    banana:4,
    apple:2,
    orange:1.5,
    pear:3
}
let stock={
    banana:6,
    apple:0,
    orange:32,
    pear:15
}
let fruit=["banana", "apple", "orange", "pear"]
fruit.forEach((food, index) => {
        console.log(`${food}:
    price: ${prices[food]}
    stock: ${stock[food]} `);
    })
let total=0
fruit.forEach((food, index)=>{
    x= prices[food]*stock[food]
    console.log(`Value of ${food} = ${x}`);
    total+=x
})
console.log(`Total = ${total}`)