import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import reactDOM from "react-dom";
import{CssBaseline, Grid} from "@material-ui/core";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

const App = () => {
    return (
        <>
    
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style ={{width : '100%'}}>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Map/>
                </Grid>
            </Grid>
        
        </>
    );
}
export default App;