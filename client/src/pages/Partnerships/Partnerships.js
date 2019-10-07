import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Partnerships/Landing';
import Description from '../../components/Partnerships/Description';

const Partnerships = () => {

    return (
        <Grid container>

            <Nav />

            <Landing />

            <Description />

        </Grid>
    );
};

export default Partnerships;
