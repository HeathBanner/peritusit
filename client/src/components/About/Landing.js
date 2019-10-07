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

import Team from './imgs/ashkan-forouzani.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundImage: `url(${Team})`,
        backgroundSize: 'cover',
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
    aboutHeader: {
        width: '100%',
        marginBottom: 0
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '50%',
        marginBottom: 40,
        backgroundColor: 'rgb(255, 255, 255, 0.2)',
    },
    aboutBody: {
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
                className={classes.aboutHeader}
                align="center"
                variant={media.xs ? 'h4' : 'h3'}
            >
                About Us
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                className={classes.aboutBody}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                Peritus IT Solutions is an innovative and rapidly growing full-service IT consulting firm. 
                We provide our clients with cutting-edge technologies and the know-how to apply them to their 
                individual business models.
            </Typography>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Landing;