import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '100vh',
        color: 'white',
        backgroundColor: '#0000a2',
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
        backgroundColor: 'rgb(255, 255, 255, 0.2)',
    },
    bottLink: {
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
    bottButton: {
        width: '60%',
        padding: 10,
        backgroundColor: 'white',
        color: '#0000a2',
    },
}));

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.midHeader}
                align="center"
                variant={xs ? 'h5' : 'h4'}
            >
                Leave IT to us and get down to business
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                align="center"
                variant={xs ? 'body1' : 'h6'}
            >
                Migrating to a new platform? Need help planning your IT budget? Lack the resources to develop 
                new software? You've come to the right place. Click below to discover our full range of services 
                and find out how we can make technology work for you.
            </Typography>

            <a
                className={classes.bottLink}
                href="/services"
            >
                <Button
                    className={classes.bottButton}
                >
                    <Typography
                        variant={xs ? 'body1' : 'h6'}
                    >
                        More
                    </Typography>
                </Button>
            </a>

        </Grid>
    );
};
