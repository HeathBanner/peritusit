import React, {
    useContext,
} from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: '100px 25%',
        paddingTop: 100,
        [theme.breakpoints.down('md')]: {
            padding: '40px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    body: {
        width: '100%',
        marginBottom: 60,
    },
}));

const Description = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.body}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                We are NOT a reseller of hardware, does not fit our business model. Instead, 
                we work with vendors such as: Dell/HP/IBM for PC's and Servers, Synology for 
                NAS (network storage devices) HP/Brother for printers, Sonicwall/Fortinet for 
                firewalls/routers, Ubiquiti UniFi for wireless equipment and many other 
                providers of equipment.  We make suggestions, and you buy it, this way you 
                get the best price, no mark ups and all warranties are in your name.
            </Typography>

            <Typography
                className={classes.body}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                We also partner with various SaS (software as servcie) vendors: Cloudscale365 
                for Office365, Cloudberry for managed back up, along with Backblaze for offsite 
                data retention.  Again, you are the account holder of these services, not us, 
                this keeps you in control without being locked into position of not being able 
                or going thru the hassle of transferring ownership.
            </Typography>

            <Typography
                className={classes.body}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                After all, it is YOUR business and we are here to assist, facilitate, be of 
                service and help your business operate effeciently and profitably.
            </Typography>

            <Typography
                className={classes.body}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                We make our monies off services income.
            </Typography>

        </Grid>
    );
};

export default Description;
