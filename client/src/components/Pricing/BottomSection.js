import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#0000a2',
        color: 'white',
        padding: '40px 25%',
        paddingTop: 100,
        [theme.breakpoints.down('md')]: {
            padding: '40px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    text: {
        marginBottom: 100,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 60,
        },
    },
}));

const outroText = [
    {
        text: `In addition, for those clients that have server based networks, 
        we provide managed service plans with various monthly fees based 
        on the number of servers and workstations to be supported. Typical 
        fees are 125.00 per server and 35.00 per pc.`,
    },
    {
        text: `Our Managed Services Plan is pretty simple, no contracts, month to 
        month and we provide monitoring/automated proactive maintenence of 
        PC's/Servers. In addition, we can install Webroot Enterprise anti virus, 
        centrally managed to protect devices. We also have remote access tools 
        that allow us to remote into a pc/server and take control to assist with 
        varoius tasks, this is included in the monthly price.`,
    },
    {
        text:  `Once you are on the MSP option, you then get reduced hourly 
        rates if an onsite`,
    },
    {
        text: `We also offer "fixed rate" plans when discounted blocks of time are
        pre-purchased. This allows you to budget accordingly for the year
        based on the average hours of service rendered.`,
    },
    {
        text: `When it comes to hardware and software purchases, we can buy it, 
        add a reasonable margin and resell it, or we can advise and consult with 
        you on what and where to purchase, you buy it and we install and manage 
        it.  Your choice.`,
    },
    {
        text: `Payment is expected at time of service unless other arrangements 
        have been made and we can accept Visa/MC and AMX.`,
    },
];

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>
            {outroText.map((item, index) => {
                return (
                    <Typography
                        className={classes.text}
                        variant={xs ? 'body1' : 'h6'}
                        align="center"
                        key={index}
                    >
                        {item.text}
                    </Typography>
                );
            })}
        </Grid>
    );
};
