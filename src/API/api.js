import products from "./products.json";
import categories from "./categories.json";

function getProducts() {
    return (
        Promise.resolve(products)
    )
}

function getProductById(id) {
    const product = products.filter(item => item.id == id);
    return (
        Promise.resolve(product)
    )
}

function getProductsByCategry(category) {
    const products = products.filter(item => item.category == category);
    return (
        Promise.resolve(products)
    )
}

function getCategories() {
    return (
        Promise.resolve(categories)
    )
}

function getCategoryById(id) {
    const category = products.filter(item => item.id == id);
    return (
        Promise.resolve(category)
    )
}

export default {
    getProducts,
    getProductById,
    getCategories,
    getCategoryById
}
