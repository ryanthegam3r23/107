//please create this component, just render a message "Catalog Page"
//use h1 and provide a className "catalog-page"
//please try this but in the the products
import { useState, useEffect } from "react";
import Product from "../components/product";
import "./catalog.css";
import DataService from "../service/data";

function Catalog() {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState([]);
    const [filterV, setFilter] = useState([]);

    useEffect(function () {
        console.log("component loaded");
        loadCatalog();
    }, []);

    function loadCatalog() {
        //get the products
        let service = new DataService();
        let productEnd = service.getProducts();
        console.log(productEnd);
        setItems(productEnd);
        console.log(items);
        let categoryEnd = ["fruit", "candy", "dairy"];
        setCategory(categoryEnd);
    }
    function filter(cat) {
        let list = [];
        for (let i = 0; i < items.length; i++) {
            let temp = items[i];
            if (temp.category === cat) {
                list.push(temp);
            }
        }
        setFilter(list);
    }
    //useEffect is a hook that allows you to run code when the component is loaded
    return (
        <div className="catalog-page">
            <h1>Catalog Page</h1>
            <h5>Hello we have {items.length} new products</h5>
            {/* render products according to the amouth of items that you have */}
            <br />
            {category.map((tempCat) => (
                <button onClick={()=>filter(tempCat)} className="btn btn-sm btn-secundary btn-filter">
                    {" "}
                    {tempCat}{" "}
                </button>
            ))}
            <br />
            {filterV.map((temp) => (
                <Product x={temp} key={temp._id}></Product>
            ))}
            {/* for each element that i have on an {array} i want
to create a temporal variable that will be transform into something*/}
            {/* props its something that comes with react that helps me to share data between 
component */}
        </div>
    );
}
export default Catalog;