import React, { useState } from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './style';
const List = ({setImage}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('restaurants');
    const places = [
        {name: 'Best Rated', image: 'https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg'},
        {name: 'Best View', image: 'https://a.cdn-hotels.com/gdcs/production175/d1863/601426b3-ae2b-4264-8437-84985f33e5b0.jpg'},
        {name: 'Best Food', image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg'},
        {name: 'Best Service', image: 'https://www.attractionsofamerica.com/images/thingstodo/20210916130650_best-amusement-parks-usa.jpg'},
    ]

    const chooseType = (type)=>{
        
    }
    const clickPlace = (p)=>{
        console.log(p)
        setImage(p.image);
    }

    return (
        <div className={classes.container}>
            <Typography variant = "h4"> Find your Restaurants and Hotels</Typography>
            <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target)}>
                  <MenuItem value = "restaurant" onClick={()=>chooseType("g")}>Restaurant</MenuItem>
                  <MenuItem value = "hotels">Hotels</MenuItem>
                  <MenuItem value = "Attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select value={rating} onChange={(e) => setRating(e.target)}>
                  <MenuItem value = "0">All</MenuItem>
                  <MenuItem value = "3">Above 3.0</MenuItem>
                  <MenuItem value = "4">Above 4.0</MenuItem>
                  <MenuItem value = "5">Above 5.0</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing = {3} className={classes.list}>
                {places ?. map((place, i) =>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} onClickItem={clickPlace}/>
                        </Grid>
                ))}
            </Grid>



        </div>
    );
}
export default List;