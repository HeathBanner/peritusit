import React, { useContext } from 'react';
import { MediaContext } from '../../context/Media';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Testimonials/Landing';
import Vouchers from '../../components/Testimonials/Vouchers';

import { Grid } from '@material-ui/core';

export default () => {

    const context = useContext(MediaContext);

    return (
        <Grid container>
            <Landing xs={context.xs} />

            <Vouchers xs={context.xs} />
        </Grid>
    );
};
