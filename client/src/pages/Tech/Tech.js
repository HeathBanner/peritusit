import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Tech/Landing';
import TechList from '../../components/Tech/TechList';

const Tech = () => {

    return (
        <Grid container>

            <Nav />

            <Landing />

            <TechList />

        </Grid>
    );
};

export default Tech;