import React from 'react'
import { connect } from 'react-redux'
import Cart from './Cart';

import { Grid, Box } from '@mui/material';

function Products(props) {
    // min - height: 400px;
    const styleCards = { "min-height": "400px" }
    const products = props.store.products.filter(product => product.category === props.store.activeCategory);

    return (
        <div className='cards' style={styleCards}>


            <Box p={5}>
                <Grid container spacing={5}>

                    {products.map(product => {
                        return (
                            <Grid item key={product.id}>
                                <Cart {...product} />
                            </Grid>
                        )
                    })}
                </Grid>

            </Box>
        </div>
    );
}


const mapStateToProps = (state) => ({
    store: state.productsRreducer
});

export default connect(mapStateToProps)(Products)


