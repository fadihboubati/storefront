import { connect } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { selectCategory } from '../../store/reducers/products'

function Categories(props) {

    return (
        <div >
            <Typography variant="h5">Browse our Categories</Typography>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                {props.categories.map(cat =>
                    <Button
                        key={cat._id}
                        color="primary"
                        onClick={() => props.selectCategory(cat.name)}
                    >
                        {cat.displayName || cat.name}
                    </Button>
                )}
            </ButtonGroup>
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.productsRreducer.categories,
});


const mapDispatchToProps = { selectCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);