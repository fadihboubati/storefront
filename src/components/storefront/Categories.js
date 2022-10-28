import { connect } from 'react-redux';


import { selectCategory } from '../../store/reducers/categories';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import FastfoodIcon from '@mui/icons-material/Fastfood';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CheckroomIcon from '@mui/icons-material/Checkroom';

function Categories(props) {


    const [value, setValue] = React.useState(0);


    const pickIcon = (categoryName) => {
        const icon = {
            "Elecronics": <DevicesOtherIcon />,
            "Food": <FastfoodIcon />,
            "Clothing": <CheckroomIcon />
        }
        return icon[categoryName];
    }

    return (
        <div >
            <Box sx={{ width: "100%" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >

                    {props.categories.map(cat =>

                        <BottomNavigationAction
                            key={cat._id}
                            label={cat.displayName}
                            icon={pickIcon(cat.displayName)}
                            onClick={() => props.selectedCategory(cat.name)}
                        />
                    )}
                </BottomNavigation>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.categoriesReducer.categories,
});


// const mapDispatchToProps = { selectCategory }
// const mapDispatchToProps = { selectedCategory:selectCategory }

const mapDispatchToProps = (dispatch) => ({
    selectedCategory: (categoryName) => dispatch(selectCategory(categoryName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);