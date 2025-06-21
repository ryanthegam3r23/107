let catalog = [
    {
        "title":"orange",
        "category":"fruit",
        "price": 15,
        "image":"picture",
        "_id":"1" // the id should be unique
    },
    {
        "title":"chocolate",
        "category":"candy",
        "price": 15,
        "image":"picture",
        "_id":"2" // the id should be unique
    },
    {
        "title":"milk",
        "category":"dairy",
        "price": 15,
        "image":"picture",
        "_id":"3" // the id should be unique
    },
];

class DataService {
    getProducts()
    {
        return catalog;
    }
}

export default DataService;