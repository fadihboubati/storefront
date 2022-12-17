import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { connect } from 'react-redux';
import { addProductToCart } from '../../store/actions/actions';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';


// function Cart({ name, price }) {
function Cart(props) {

    function getRandomDate() {
        const maxDate = Date.now();
        const timestamp = Math.floor(Math.random() * maxDate);
        return new Date(timestamp);
    }

    return (
        <Card sx={{ maxWidth: 300 }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {props.product.title.charAt(0)}
                    </Avatar>
                }

                title={props.product.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={props.product.image}
                // image={`https://source.unsplash.com/random?${props.product.name}`}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => {

                    props.addProductToCart(props.product)
                }
                } aria-label="add to favorites">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="share">
                    {props.product.price}<AttachMoneyIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

const mapDispatchToProps = { addProductToCart }

export default connect(null, mapDispatchToProps)(Cart)