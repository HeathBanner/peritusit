import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Snackbar,
    SnackbarContent,
    Typography,
    Icon,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    error: {
        backgroundColor: theme.palette.error.dark,
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        paddingTop: 15,
        width: '100%',
    },
    icon: {
        position: 'absolute',
        top: 5,
        left: '50%',
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
}));

export default ({ error, closeError}) => {

    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={error.open}
            autoHideDuration={6000}
            onClose={closeError}
        >
            <SnackbarContent
                className={classes.error}
                classes={{ message: classes.message }}
                message={
                    <Typography
                        variant="body2"
                        align="center"
                    >
                        <Icon className={classes.icon}>
                            error
                        </Icon>
                        {error.message}
                    </Typography>
                }
                action={
                    <Button
                        className={classes.button}
                        onClick={closeError}
                    >
                        <Icon>close</Icon>
                    </Button>
                }
            />
        </Snackbar>
    );
};
