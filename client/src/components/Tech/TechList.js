import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        paddingTop: 100,
        backgroundColor: 'white',
        padding: '60px 25%',
        [theme.breakpoints.down('md')]: {
            padding: '40px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
        },
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        marginBottom: 40,
    },
    listHeaders: {
        width: '100%'
    },
    listBodys: {
        width: '100%',
        marginBottom: 10,
    },
}));

const desktopSystems = [
    {
        text: `Windows 10`,
    },
    {
        text: `Windows 8 & 8.1`,
    },
    {
        text: `Windows 7`,
    },
];

const serverSystems = [
    {
        text: `Windows Server 2016`,
    },
    {
        text: `Windows Server 2012`,
    },
    {
        text: `Windows Server 2008`,
    },
    {
        text: `Windows Terminal Server/Remote Desktop Services`,
    },
    {
        text: `Windows Hyper V`,
    },
];

const microsoftApps = [
    {
        text: `Office 365 and 2013`,
    },
    {
        text:  `Office 2010`,
    },
];

const miscApps = [
    {
        text:  `QuickBooks`,
    },
    {
        text: `ACT`,
    },
    {
        text: `Time Matters`,
    },
    {
        text:  `Sage 50`,
    },
];

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.listHeaders}
                variant={xs ? 'h5' : 'h4'}
                align="center"
            >
                Desktop Operating Systems
            </Typography>

            <Divider className={classes.divider} />

            {desktopSystems.map((item, index) => {
                return (
                    <Typography
                        className={classes.listBodys}
                        align="center"
                        color="textSecondary"
                        variant={xs ? 'body1' : 'h6'}
                        key={`desktop ${index}`}
                    >
                        {item.text}
                    </Typography>
                );
            })}

            <Typography
                className={classes.listHeaders}
                style={{ marginTop: 60 }}
                variant={xs ? 'h5' : 'h4'}
                align="center"
            >
                Server Operating Systems
            </Typography>

            <Divider className={classes.divider} />

            {serverSystems.map((item, index) => {
                return (
                    <Typography
                        className={classes.listBodys}
                        align="center"
                        color="textSecondary"
                        variant={xs ? 'body1' : 'h6'}
                        key={`server ${index}`}
                    >
                        {item.text}
                    </Typography>
                );
            })}

            <Typography
                className={classes.listHeaders}
                style={{ marginTop: 60 }}
                variant={xs ? 'h5' : 'h4'}
                align="center"
            >
                Microsoft Applications
            </Typography>

            <Divider className={classes.divider} />

            {microsoftApps.map((item, index) => {
                return (
                    <Typography
                        className={classes.listBodys}
                        align="center"
                        color="textSecondary"
                        variant={xs ? 'body1' : 'h6'}
                        key={`micro ${index}`}
                    >
                        {item.text}
                    </Typography>
                );
            })}

            <Typography
                className={classes.listHeaders}
                style={{ marginTop: 60 }}
                variant={xs ? 'h5' : 'h4'}
                align="center"
            >
                Miscellaneous Applications
            </Typography>

            <Divider className={classes.divider} />

            {miscApps.map((item, index) => {
                return (
                    <Typography
                        className={classes.listBodys}
                        align="center"
                        color="textSecondary"
                        variant={xs ? 'body1' : 'h6'}
                        key={`misc ${index}`}
                    >
                        {item.text}
                    </Typography>
                );
            })}

        </Grid>
    );
};
