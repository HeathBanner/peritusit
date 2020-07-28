import React, { Fragment } from 'react';

import json from './quotes.json';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: '40px 25%',
        paddingTop: 100,
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    avatars: {
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        },
        height: 120,
        width: 120,
    },
    nameHeaders: {
        width: '100%',
        marginTop: 10,
    },
    dividers: {
        marginBlockStart: '0.5em',
        width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        marginBottom: 30,
    },
    quotes: {
        width: '100%',
        marginBottom: 60,
    },
}));

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>
            {json.quotes.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <Avatar
                            className={classes.avatars}
                            src={`data:image/jpeg;base64,${item.src}`}
                            alt={`${item.name} Profile Photo`}
                        />

                        <Typography
                            className={classes.nameHeaders}
                            align="center"
                            variant={xs ? 'h5' : 'h4'}
                        >
                            {item.name}
                        </Typography>

                        <Divider className={classes.dividers} />

                        <Typography
                            className={classes.quotes}
                            align="center"
                            color="textSecondary"
                            variant={xs ? 'body1' : 'h6'}
                        >
                            {item.quote}
                        </Typography>
                    </Fragment>
                );
            })}
        </Grid>
    );
};
