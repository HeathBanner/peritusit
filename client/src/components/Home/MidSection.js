import React, {
    useContext,
} from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Divider,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        height: '100vh',
        color: 'rgb(6, 62, 153)',
        padding: '0 25%',
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
        },
    },
    midHeader: {
        width: '100%',
        marginBottom: 10,
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '50%',
        marginBottom: 60,
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
    midLink: {
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
    midButton: {
        width: '60%',
        padding: 10,
        backgroundColor: '#0000a2',
        color: 'white',
    },
}));

const MidSection = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.midHeader}
                align="center"
                variant={media.xs ? 'h5' : 'h4'}
            >
                Unique solutions for your business
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                No two businesses are the same. We believe the technology supporting your business operations 
                should reflect the specific needs of your company. That's why we offer unique IT solutions.
                Click below to learn more about us and how our individual solutions can work for you.
            </Typography>

            <a
                className={classes.midLink}
                href="/about"
            >
                <Button
                    className={classes.midButton}
                >
                    <Typography
                        variant={media.xs ? 'body1' : 'h6'}
                    >
                        More
                    </Typography>
                </Button>
            </a>

        </Grid>
    );
};

export default MidSection;