import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import reactDOM from "react-dom";
import{CssBaseline, Grid} from "@material-ui/core";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import { useState } from "react";

const App = () => {
    const [image, setImage] = useState('https://www.travelandleisure.com/thmb/5mAnQaxbAwQjFt5bTi7VV8x4pJQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rangali-finolhu-family-island-maldives-GOWHERE221121-a0f317f4fc984aa7aed5d55aa5432e21.jpg');

    return (
        <>
    
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style ={{width : '100%'}}>
                <Grid item xs={12} md={4}>
                    <List setImage={setImage}/>
                    
                </Grid>
                <Grid item xs={12} md={4}>
                <img src={image} alt="Destination Image"  style={{ width: '800px', height: '500px' }}/>
                
                    <Map/>
                </Grid>
            </Grid>
            
        
        </>
    );
}
export default App;