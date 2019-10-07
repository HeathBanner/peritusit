import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Strategy/Landing';
import Pillars from '../../components/Strategy/Pillars';

const Strategy = () => {

    return(
        <Grid container>

            <Nav />

            <Landing />

            <Pillars />

        </Grid>
    );
};

export default Strategy;