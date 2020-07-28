import React, { useContext } from 'react';
import { MediaContext } from '../../context/Media';

import Nav from '../../components/Navigation/Appbar';
import Landing from '../../components/Partnerships/Landing';
import Description from '../../components/Partnerships/Description';

import { Grid } from '@material-ui/core';

export default () => {

    const context = useContext(MediaContext);

    return (
        <Grid container>
            <Landing xs={context.xs} />

            <Description xs={context.xs} />
        </Grid>
    );
};
