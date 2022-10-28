import { connect } from 'react-redux';


import { selectCategory } from '../../store/actions/actions';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import FastfoodIcon from '@mui/icons-material/Fastfood';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';


import { getCategories } from "../../store/actions/actions"

function Categories(props) {


    const [value, setValue] = React.useState(0);


    const pickIcon = (categoryName) => {
        const icon = {
            "electronics": <DevicesOtherIcon />,
            "Food": <FastfoodIcon />,
            "Clothing": <CheckroomIcon />,
            "jewelery": <DiamondIcon />,
            "men's clothing": <CheckroomIcon />,
            "women's clothing": <CheckroomIcon />
        }
        return icon[categoryName];
    }

    React.useEffect(() => {
        props.getCategories()
    }, [])


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

                    {props.categories.map(category =>

                        <BottomNavigationAction
                            key={category}
                            label={category}
                            icon={pickIcon(category)}
                            onClick={() => props.selectedCategory(category)}
                        />


                    )}
                </BottomNavigation>
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.categoriesReducer.categoryList,
});


const mapDispatchToProps = { selectedCategory: selectCategory, getCategories }


export default connect(mapStateToProps, mapDispatchToProps)(Categories);