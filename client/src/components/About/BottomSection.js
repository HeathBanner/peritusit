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
        backgroundColor: '#0000a2',
        color: 'white',
        padding: '15% 25%',
        [theme.breakpoints.down('md')]: {
            padding: '15% 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
        },
    },
    bottomHeader: {
        width: '100%',
        marginTop: 100,
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '60%',
        marginBottom: 40,
        backgroundColor: 'rgb(255, 255, 255, 0.2)',
    },
    bottomBody: {
        width: '100%',
        marginBottom: 40,
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'inherit',
        width: '100%',
    },
    buttons: {
        padding: 10,
        backgroundColor: 'white',
        color: '#0000a2',
        marginBottom: 20,
    },
}));

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.bottomHeader}
                align="center"
                variant={xs ? 'h4' : 'h3'}
            >
                We're connected
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                className={classes.bottomBody}
                align="center"
                variant={xs ? 'body1' : 'h6'}
            >
                The success of your IT company also lies in its strategic alliances and 
                partnerships. Peritus IT Solutions has cultivated relationships with some 
                of the major industry players to provide you a complete technical support team.
            </Typography>

            <Typography
                className={classes.bottomBody}
                align="center"
                variant={xs ? 'body1' : 'h6'}
            >
                View a list of our professional partnerships, alliances and supported 
                technologies.
            </Typography>

            <a
                href="/partnerships"
                className={classes.links}
            >
                <Button
                    className={classes.buttons}
                >
                    <Typography
                        variant={xs ? 'body1' : 'h6'}
                    >
                        Partnerships
                    </Typography>
                </Button>
            </a>

            <a
                href="/technologies"
                className={classes.links}
            >
                <Button
                    className={classes.buttons}
                >
                    <Typography
                        variant={xs ? 'body1' : 'h6'}
                    >
                        Supported Technologies
                    </Typography>
                </Button>
            </a>

        </Grid>
    );
};
