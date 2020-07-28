import React, { useContext } from 'react';
import { MediaContext } from '../../context/Media';

import Landing from '../../components/Strategy/Landing';
import Pillars from '../../components/Strategy/Pillars';

import { Grid } from '@material-ui/core';

export default () => {

    const context = useContext(MediaContext);

    return (
        <Grid container>
            <Landing xs={context.xs} />

            <Pillars xs={context.xs} />
        </Grid>
    );
};
