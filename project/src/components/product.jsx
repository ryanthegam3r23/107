import "./product.css";
import QtyPicker from "./qtyPicker";
import { useEffect } from "react";

function Product() {
    useEffect(function(){
        console.log("Hello im a product");
    },[]);
} 

function Product() {
    return (
       <div className="product">
            <h5>title goes here</h5>
            <img src="https://picsum.photos/200/200"></img>
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
            <QtyPicker/>
            <button className="btn btn-sm btn-dark">Add</button>
       </div>
    );
}

export default Product;