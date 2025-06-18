import Product from "../src/components/product";
import "./catalog.css";

function Catalog() {
    return (
        <div classname="catalog-page">
            <h1>Catalog Page</h1>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}
export default Catalog;