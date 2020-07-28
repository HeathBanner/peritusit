import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import { Snackbar, SnackbarContent, Typography, Icon, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    warning: {
        paddingTop: 20,
        backgroundColor: amber[600],
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

export default ({ warning, closeWarning}) => {

    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={warning.open}
            autoHideDuration={6000}
            onClose={closeWarning}
        >
            <SnackbarContent
                className={classes.warning}
                classes={{ message: classes.message }}
                action={
                    <Button
                        className={classes.button}
                        onClick={closeWarning}
                    >
                        <Icon>close</Icon>
                    </Button>
                }
                message={
                    <Typography
                        variant="body2"
                        align="center"
                    >
                        <Icon className={classes.icon}>
                            warning
                        </Icon>

                        {warning.message}
                    </Typography>
                }
            />
        </Snackbar>
    );
};
