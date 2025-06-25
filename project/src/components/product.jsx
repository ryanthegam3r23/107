import "./product.css";
import QtyPicker from "./qtyPicker";
import { useEffect } from "react";

function Product(props) {
    useEffect(function(){
        console.log("Hello im a product");
    },[]);


 
    return (
       <div className="product">
            <h5>{props.x.price}</h5>
            <img src={"/images/"+ props.x.image}></img>
            <div className="prices">
                <label>{props.x.price}</label>
                <label>Total</label>
            </div>
            <QtyPicker/>
            <button className="btn btn-sm btn-dark">Add</button>
       </div>
    );
}

export default Product;