import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Home/Landing';
import MidSection from '../../components/Home/MidSection';
import BottomSection from '../../components/Home/BottomSection';

const useStyles = makeStyles((theme) => ({
    middleDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '0 100vw 90px 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '0 100vw 40px 0',
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 100vw 130px 0',
        borderColor: 'transparent white transparent transparent',
        backgroundColor: '#0000a2',
        transform: 'scale(1.0001)',
        zIndex: 2,
    },
}));

const Home = () => {

    const classes = useStyles();

    return (
        <Grid container>

            <Nav />

            <Landing />

            <MidSection />

            <Grid className={classes.middleDiv} item xs={12} ></Grid>

            <BottomSection />

        </Grid>
    );
};

export default Home;