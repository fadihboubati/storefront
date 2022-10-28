import React from 'react'
import { connect } from 'react-redux'
import Cart from './Cart';

import { Grid, Box } from '@mui/material';


import './storefront.scss'
function Products(props) {
    const products = props.products.filter(product => product.category === props.activeCategory);
    let containerHeight = { "minHeight": "493px" }


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
                    {products.map(product => {
                        return (
                            <Grid item key={product.id}>
                                {/* <Cart {...product} /> */}
                                <Cart product={product} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    );
}


const mapStateToProps = (state) => ({
    products: state.productsRreducer,
    activeCategory: state.categoriesReducer.activeCategory
});

export default connect(mapStateToProps)(Products)


