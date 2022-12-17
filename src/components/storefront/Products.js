import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Cart from './Cart';

import { Grid, Box } from '@mui/material';


import './storefront.scss'
import { getProducts } from '../../store/actions/actions';
function Products(props) {

    // mapStateToProps, mapDispatchToProps
    const { products, activeCategory, getProducts } = props;

    // PS: this way is faster on loading, 
    // to do teh filtering here instade of doing it in redux part
    const featuredProducts = products.filter(product => product.category === activeCategory);
    let containerHeight = { "minHeight": "493px" }


    useEffect(() => {
        getProducts(activeCategory)
    }, [activeCategory])



    // function styleCards() {
    //     let style = { "min-height": "493px" }
    //     let userAgent = navigator.userAgent;
    //     if (userAgent.match(/chrome|chromium|crios/i) {
    //         style = { "min-height": "412px" }
    //         alert("chrome")
    //     } else if (userAgent.match(/firefox|fxios/i)) {
    //         style = { "min-height": "493px" }
    //     } else if (userAgent.match(/safari/i)) {
    //         style = { "min-height": "493px" }
    //     } else if (userAgent.match(/opr\//i)) {
    //         style = { "min-height": "493px" }
    //     } else if (userAgent.match(/edg/i)) {
    //         style = { "min-height": "493px" }
    //         alert("Edge")
    //     } else {
    //         style = { "min-height": "493px" }
    //     }
    //     return style
    // }

    return (
        <div className='cards' style={containerHeight}>
            <Box p={5}>
                <Grid container spacing={5}>
                    {products && products.map(product => {
                        return (
                            <Grid item key={product.id}>
                                <Cart product={product} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    );
}


const mapDispatchToProps = { getProducts }

const mapStateToProps = (state) => ({
    products: state.productsRreducer,
    activeCategory: state.categoriesReducer.activeCategory
});

export default connect(mapStateToProps, mapDispatchToProps)(Products)


