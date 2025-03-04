// let pancakeOrderButtonHTML = document.getElementById("pancakeOrderButton")
// pancakeOrderButtonHTML.addEventListener("click", function() {

//     //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
//     let orderElementDiv = document.createElement("div")
//     orderElementDiv.className = "order"
//     let orderElementImage = document.createElement("img")
//     orderElementImage.src = "./assets/pancakes.png"
//     orderElementDiv.appendChild(orderElementImage)

//     //👇PART 2 CODE SNIPPET HERE👇
//     let readyButton = document.createElement("button")
//     readyButton.innerText = "Ready"
//     readyButton.addEventListener("click", function(event) {
//         let parentElement = event.target.parentElement
//         parentElement.remove()
//     })
//     orderElementDiv.appendChild(readyButton)
    
//     let ordersHTML = document.getElementById("orders") // This line selects the orders div and save it to a variable

//     ordersHTML.appendChild(orderElementDiv)  // This line injects the new order element into the orders div using innerHTML

// })



// let coffeeOrderButtonHTML = document.getElementById("coffeeOrderButton")
// coffeeOrderButtonHTML.addEventListener("click", function() {
//     //*** YOUR JAVASCRIPT CODE HERE ***

//     //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
//     let orderElementDiv = document.createElement("div")
//     orderElementDiv.className = "order"
//     let orderElementImage = document.createElement("img")
//     orderElementImage.src = "./assets/coffee.png"
//     orderElementDiv.appendChild(orderElementImage)

//     //👇PART 2 CODE SNIPPET HERE👇
//     let readyButton = document.createElement("button")
//     readyButton.innerText = "Ready"
//     readyButton.addEventListener("click", function(event) {
//         let parentElement = event.target.parentElement
//         parentElement.remove()
//     })
//     orderElementDiv.appendChild(readyButton)
    
//     let ordersHTML = document.getElementById("orders") // This line selects the orders div and save it to a variable

//     ordersHTML.appendChild(orderElementDiv)  // This line injects the new order element into the orders div using innerHTML

// })


// // select the "Create 2 orders button" for the pancakes and save it a variable
// let create2PancakeOrdersButtonHTML = document.getElementById("create2pancakeOrderButton")
// //add an onclick event-listener that adds two pancake orders instead of just one
// create2PancakeOrdersButtonHTML.addEventListener("click", function(){
    
//     //make a loop that repeats 2 times
//     for(let i = 0; i < 2; i++){
//         //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
//         let orderElementDiv = document.createElement("div")
//         orderElementDiv.className = "order"
//         let orderElementImage = document.createElement("img")
//         orderElementImage.src = "./assets/pancakes.png"
//         orderElementDiv.appendChild(orderElementImage)

//         //👇PART 2 CODE SNIPPET HERE👇
//         let readyButton = document.createElement("button")
//         readyButton.innerText = "Ready"
//         readyButton.addEventListener("click", function(event) {
//             let parentElement = event.target.parentElement
//             parentElement.remove()
//         })
//         orderElementDiv.appendChild(readyButton)
        
//         let ordersHTML = document.getElementById("orders") // This line selects the orders div and save it to a variable

//         ordersHTML.appendChild(orderElementDiv)  // This line injects the new order element into the orders div using innerHTML
        
//     }


// })


// //select the "Create 2 orders" button for the coffee element
// let create2CoffeeOrdersButtonHTML = document.getElementById("create2coffeeOrderButton")

// //add an onclick event-listener that creates 2 coffee elements insteads 1
// create2CoffeeOrdersButtonHTML.addEventListener("click", function(){
    
//     //MAKE A for-loop that repeats twice
//     for (let i = 0; i < 2; i++){
//         //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
//         let orderElementDiv = document.createElement("div")
//         orderElementDiv.className = "order"
//         let orderElementImage = document.createElement("img")
//         orderElementImage.src = "./assets/coffee.png"
//         orderElementDiv.appendChild(orderElementImage)

//         //👇PART 2 CODE SNIPPET HERE👇
//         let readyButton = document.createElement("button")
//         readyButton.innerText = "Ready"
//         readyButton.addEventListener("click", function(event) {
//             let parentElement = event.target.parentElement
//             parentElement.remove()
//         })
//         orderElementDiv.appendChild(readyButton)
        
//         let ordersHTML = document.getElementById("orders") // This line selects the orders div and save it to a variable

//         ordersHTML.appendChild(orderElementDiv)  // This line injects the new order element into the orders div using innerHTML
//     }
    
    

// })


// select the "Create Orders" button and save to a variable
let createPancakeOrdersButtonHTML = document.getElementById("createPancakeOrdersButton")

//add an onclick event-listner that adds a number of orders to the page equal to the value inside the input element
createPancakeOrdersButtonHTML.addEventListener("click", function(){

    //select the input element for the pancakeOrderCard and save it to a variable
    let pancakeInputHTML = document.getElementById("pancakeInput")

    //get the "value" inside the input element and save it a variable
    let numberOfPancakeOrders = pancakeInputHTML.value

    //create a number of pancake orders equal to the value of numberOfPancakeOrders
    for(let i = 0; i < numberOfPancakeOrders; i++){
        //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "asset4/pancakes.png"
        orderElementImage.alt = "Pancakes"
        orderElementDiv.appendChild(orderElementImage)

        //👇PART 2 CODE SNIPPET HERE👇
        let readyButton = document.createElement("button")
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event) {
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        
        let ordersHTML = document.getElementById("orders") // This line selects the orders div and save it to a variable

        ordersHTML.appendChild(orderElementDiv)  // This line injects the new order element into the orders div using innerHTML
    }

    

})

let createCoffeeOrdersButtonHTML = document.getElementById("createCoffeeOrdersButton")

//add an onclick event-listner that adds a number of orders to the page equal to the value inside the input element
createCoffeeOrdersButtonHTML.addEventListener("click", function(){

    //select the input element for the pancakeOrderCard and save it to a variable
    let coffeeInputHTML = document.getElementById("coffeeInput")

    //get the "value" inside the input element and save it a variable
    let numberOfCoffeeOrders = coffeeInputHTML.value

    //create a number of pancake orders equal to the value of numberOfPancakeOrders
    for(let i = 0; i < numberOfCoffeeOrders; i++){
        //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./asset4/coffee.png"
        orderElementDiv.appendChild(orderElementImage)

        //👇PART 2 CODE SNIPPET HERE👇
        let readyButton = document.createElement("button")
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event) {
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        
        let ordersHTML = document.getElementById("orders") // This line selects the orders div and save it to a variable

        ordersHTML.appendChild(orderElementDiv)  // This line injects the new order element into the orders div using innerHTML
    }

    

})