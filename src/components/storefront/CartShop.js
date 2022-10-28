import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { addToCart, RemoveFromCart } from '../../store/reducers/cart';
import { IconButton } from '@mui/material';

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function CartShop(props) {
    let containerHeight = { "minHeight": "549px" }

    const rows = props.cart.map(product => {
        return createRow(product.name, product.qty, product.price)
    })

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
        <div style={containerHeight}>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Desc</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="right">
                                    {/* <IconButton onClick={() => props.removeFromCart(rows.id)}>
                                        <RemoveCircleIcon fontSize='small' color="primary" />
                                    </IconButton> */}

                                    <span style={{ fontSize: "small" }}>
                                        {" "}{row.qty}{" "}
                                    </span>

                                    {/* <IconButton onClick={() => props.addToCart(row)}>
                                        <AddCircleIcon fontSize='small' color="primary" />
                                    </IconButton> */}
                                </TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


const mapStateToProps = state => ({
    cart: state.cartReducer.cart
})

// const mapDispatchToProps = dispath => ({
//     addToCart: (productInfo, qty) => dispath(addToCart(productInfo, qty)),
//     removeFromCart: (id) => dispath(RemoveFromCart(id))
// })

export default connect(mapStateToProps, null)(CartShop)