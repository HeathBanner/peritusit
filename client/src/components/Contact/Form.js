import React, {
    useState,
    useContext,
} from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Typography,
    Divider,
    TextField,
    Button,
} from '@material-ui/core';

import SuccessNotification from '../Notifications/SuccessNotification';
import ErrorNotification from '../Notifications/ErrorNotification';
import WarningNotification from '../Notifications/WarningNotification';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        paddingTop: 100,
        height: '100vh',
        backgroundColor: 'white',
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        color: '#0000a2',
        padding: 40, 
        [theme.breakpoints.down('xs')]: {
            padding: 20,
        },
    },
    header: {
        width: '100%',
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '60%',
        marginBottom: 20,
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
    textFields: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        padding: 10,
        width: '100%',
        backgroundColor: '#0000a2',
        color: 'white',
    },
}));

const initInfo = {
    name: '',
    email: '',
    message: '',
};

const initNotifications = {
    open: false,
    message: '',
};

const Form = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    const [info, setInfo] = useState({ ...initInfo });
    const [success, setSuccess] = useState({ ...initNotifications });
    const [error, setError] = useState({ ...initNotifications });
    const [warning, setWarning] = useState({ ...initNotifications });

    const closeError = () => { setError({ ...initNotifications }); };
    const closeSuccess = () => { setSuccess({ ...initNotifications }); };
    const closeWarning = () => { setWarning({ ...initNotifications }); };

    const preSubmit = () => {
        switch (true) {
            case info.name.length < 1:
                return setWarning({
                    open: true,
                    message: 'Name must have at least 2 characters'
                })
            case info.email.length < 2:
                return setWarning({
                    open: true,
                    message: 'Incorrect email!',
                });
            case info.message.length < 2:
                return setWarning({
                    open: true,
                    message: 'Message must have at least 2 characters!',
                });
            default:
                return handleSubmit();
        }
    };

    const handleSubmit = () => {
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                if (!result) {
                    return setError({
                        open: true,
                        message: 'Something went wrong!',
                    });
                }
                setSuccess({
                    open: true,
                    message: result.message,
                });
                setInfo({ ...initInfo });
            })
            .catch(() => {
                setError({
                    open: true,
                    message: 'Something went wrong!',
                });
            });
    };

    return (
        <Grid className={classes.container} item xs={12}>

            <Paper className={classes.paper}>

                <Typography
                    className={classes.header}
                    variant={media.xs ? 'h4' : 'h3'}
                    align="center"
                >
                    Contact Us
                </Typography>

                <Divider className={classes.divider} />

                <TextField
                    className={classes.textFields}
                    variant="outlined"
                    label="Name"
                    value={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value})}
                />

                <TextField
                    className={classes.textFields}
                    variant="outlined"
                    label="Email"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value})}
                />

                <TextField
                    className={classes.textFields}
                    variant="outlined"
                    label="Message"
                    rows="5"
                    multiline
                    value={info.message}
                    onChange={(e) => setInfo({ ...info, message: e.target.value})}
                />

                <Button
                    className={classes.button}
                    onClick={preSubmit}
                >
                    <Typography>
                        Submit
                    </Typography>
                </Button>

            </Paper>

            <SuccessNotification
                success={success}
                closeSuccess={closeSuccess}
            />
            <ErrorNotification
                error={error}
                closeError={closeError}
            />
            <WarningNotification
                warning={warning}
                closeWarning={closeWarning}
            />

        </Grid>
    );
};

export default Form;