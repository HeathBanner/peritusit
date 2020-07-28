import React from 'react';

import GroupPhoto from './imgs/mario-gogh.jpg';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundImage: `url(${GroupPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        color: 'white',
        height: 'calc(100vh + 130px)',
        padding: '0 25%',
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh + 90px)', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            height: 'calc(100vh + 40px)',
        },
    },
    landingHeader: {
        marginBottom: 10,
        width: '100%',
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '50%',
        marginBottom: 60,
        backgroundColor: 'rgb(255, 255, 255, 0.2)',
    },
    landingLink: {
        marginTop: 30,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'inherit',
        ':&hover': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    landingButton: {
        width: '60%',
        padding: 10,
        backgroundColor: 'white',
        color: '#0000a2',
    },
    topDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '90px 100vw 0 0',
            bottom: -90,
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '40px 100vw 0 0', 
            bottom: -40
        },
        bottom: -130,
        position: 'absolute',
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '130px 100vw 0 0',
        borderColor: 'transparent white transparent transparent',
        transform: 'scale(1.0001)',
    },
}));

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.landingHeader}
                align="center"
                variant={xs ? 'h5' : 'h4'}
            >
                Our Strategic Partners
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                align="center"
                variant={xs ? 'body1' : 'h6'}
            >
                When you contract Peritus IT Solutions as your IT solutions firm, you 
                not only get our expert staff, but you also reap the benefits of the 
                strategic alliances with various local and national vendors that provide 
                all the hardware, software and services you need to be up and running.
            </Typography>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};
