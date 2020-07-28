import React, { useContext } from 'react';
import { MediaContext } from '../../context/Media';

import Landing from '../../components/About/Landing';
import MidSection from '../../components/About/MidSection';
import BottomSection from '../../components/About/BottomSection';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    middleDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '0 100vw 90px 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '0 100vw 40px 0',
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 100vw 130px 0',
        borderColor: 'transparent white transparent transparent',
        backgroundColor: '#0000a2',
        transform: 'scale(1.0001)',
    },
}));

export default () => {

    const classes = useStyles();
    const context = useContext(MediaContext);

    return (
        <Grid container>
            <Landing xs={context.xs} />

            <MidSection context={context} />

            <Grid className={classes.middleDiv} item xs={12} ></Grid>

            <BottomSection xs={context.xs} />
        </Grid>
    );
};
