import React from 'react'
import { connect } from 'react-redux'
import Cart from './Cart';

function Products(props) {
    const products = props.store.products.filter(product => product.category === props.store.activeCategory);

    return (
        <div>
            {products.map(product => {
                return <Cart key={product.id} product={product} />

            })}

        </div>
    );
}


const mapStateToProps = (state) => ({
    store: state.productsRreducer
});

export default connect(mapStateToProps)(Products)


