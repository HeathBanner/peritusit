import React, { useContext } from 'react';
import { MediaContext } from '../../context/Media';

import Landing from '../../components/Tech/Landing';
import TechList from '../../components/Tech/TechList';

import { Grid } from '@material-ui/core';

export default () => {

    const context = useContext(MediaContext);

    return (
        <Grid container>
            <Landing xs={context.xs} />

            <TechList xs={context.xs} />
        </Grid>
    );
};
