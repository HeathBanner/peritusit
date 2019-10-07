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

import PhonePhoto from './imgs/peter-g.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundImage: `url(${PhonePhoto})`,
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
        width: '100%',
        marginBottom: 10,
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
                Clients Rely on Us for Their Success
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                What are our clients saying about us? Read these testimonials to find out 
                how Peritus IT Solutions has helped other businesses.
            </Typography>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Landing;
