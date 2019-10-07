import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Contact/Landing';
import Form from '../../components/Contact/Form';
import Info from '../../components/Contact/Info';

const Contact = () => {

    return (
        <Grid container>

            <Nav />

            <Landing />

            <Form />

            <Info />

        </Grid>
    );
};

export default Contact;
