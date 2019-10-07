import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Testimonials/Landing';
import Vouchers from '../../components/Testimonials/Vouchers';

const Testimonials = () => {

    return (
        <Grid container>

            <Nav />

            <Landing />

            <Vouchers />

        </Grid>
    );
};

export default Testimonials;
