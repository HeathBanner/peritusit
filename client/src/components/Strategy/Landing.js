import React, {
    useContext,
} from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Divider,
} from '@material-ui/core';

import Consultant from './imgs/thomas-drouault.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundImage: `url(${Consultant})`,
        backgroundSize: 'cover',
        height: 'calc(100vh + 130px)',
        color: 'white',
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
        marginBottom: 0
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '50%',
        marginBottom: 30,
        backgroundColor: 'rgb(255, 255, 255, 0.2)',
    },
    stratBody: {
        marginBottom: 20,
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

const Landing = () => {
    
    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.landingHeader}
                align="center"
                variant={media.xs ? 'h5' : 'h4'}
            >
                Our Strategy: Your Path to Success
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                className={classes.stratBody}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                Our time-tested strategy produces sound and sustainable IT solutions for every facet of your business 
                operations, right down to the smallest detail.
            </Typography>

            <Typography
                className={classes.stratBody}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                Our team of professional consultants are held to high standards. In accordance with our many years of 
                experience, we have developed a methodology that has produced consistent results across the board.
            </Typography>

            <Typography
                className={classes.stratBody}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                In most cases, we have analyzed and found cost effective solutions for similiar organizations such as 
                yours. We know what works, and what doesn't.
            </Typography>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Landing;