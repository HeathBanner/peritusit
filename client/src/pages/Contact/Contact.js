import React, { useContext } from 'react';
import { MediaContext } from '../../context/Media';

import Landing from '../../components/Contact/Landing';
import Form from '../../components/Contact/Form';
import Info from '../../components/Contact/Info';

import { Grid } from '@material-ui/core';

export default () => {

    const context = useContext(MediaContext);

    return (
        <Grid container>
            <Landing xs={context.xs} />

            <Form xs={context.xs} />

            <Info xs={context.xs} />
        </Grid>
    );
};
