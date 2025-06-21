import { useState,useEffect } from "react";
import Product from "../components/product";
import "./catalog.css";
import DataService from "../services/data";

function Catalog() {
    const [items, setitems] = useState([]);
    
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService;
        let productEnd = service.getProducts();
        console.log(productEnd);
        setitems(productEnd);
    }

    return (
        <div classname="catalog-page">
            <h1>Catalog Page</h1>
            <h5>Hello we have {items.legnth} new products</h5>
            {/* render products according to the amount of items you have */}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}
export default Catalog;