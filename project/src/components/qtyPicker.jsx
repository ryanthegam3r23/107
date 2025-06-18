import "./qtyPicker.css";
import { useState } from "react";
//Here goes the logic for the quantity picker component
function QtyPicker() {
 //create the stateVariable
 let [quantity, setQuantity] = useState(1);
 //setQuantity(100); // this is how you set the state variable
 //quantity = 100; //this is not how you set the state variable, it will not work

   function decrement() {
    console.log("Decrementing quantity");
    let newQuantity = quantity - 1; //decrement the quantity by 1
    if (newQuantity < 1) {
      newQuantity = 1; //prevent the quantity from going below 1
    }
    //minichallenge:
    // find a way to disable the decrement button when quantity is 1
    setQuantity(newQuantity); //update the state variable with the new quantity
  }
  //create a new function called increment and use it to log "Incrementing quantity" to the console
  function increment() {
    console.log("Incrementing quantity");
    let newQuantity = quantity + 1; //increment the quantity by 1
    setQuantity(newQuantity); //update the state variable with the new quantity

    }
  return (
    <div className="qty-picker">
      <button disabled={quantity===1} onClick={decrement}>-</button>
      {/* = this is an assigment
          == this is a comparative
          === this also compare values but it also returns a false or true value */}
      <label>{quantity}</label>
      <button onClick={increment}>+</button>
    </div>
  );
}
// this is the export for the quantity picker component
export default QtyPicker;