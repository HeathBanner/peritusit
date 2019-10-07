import React, {
    Fragment,
    useContext,
} from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Divider,
    Icon,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        color: '#0000a2',
        padding: '60px 25%',
        [theme.breakpoints.down('md')]: {
            padding: '40px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
        },
    },
    pillarsIntro: {
        width: '100%',
        marginTop: 40,
        marginBottom: 60,
    },
    pillarsHeaders: {
        width: '100%',
        marginBottom: 0,
    },
    icons: {
        fontSize: 100,
        width: '100%',
        textAlign: 'center',
        color: 'black',
    },
    pillarsBody: {
        marginBottom: 100,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 60,
        },
    },
    divider: {
        width: '60%',
        marginBlockStart: '0.5em',
        marginBottom: 40,
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
}));

const pillarContent = [
    {
        title: 'Assess',
        icon: 'equalizer',
        body: `Our case-specific technology audit and data gathering provides us with a detailed and 
        comprehensive picture of your existing network architecture, IT infrastructure and working 
        environment. Our goal is to make state-of-the-art technology work for you.`,
    },
    {
        title: 'Recommend',
        icon: 'menu_book',
        body: `Our research and analysis is summarized in a proposal for individually designed solutions 
        that suit your business. Our report will recommend a course of action with clearly defined 
        objectives, an architecture map and a detailed plan.`,
    },
    {
        title: 'Implement',
        icon: 'cloud_upload',
        body: `Peritus IT Solutions manages all aspects of the implementation process, including design, 
        procurement, project management, testing, training and documentation. During the implementation 
        process, we make sure to work closely with your existing IT team to produce the best possible results.`,
    },
    {
        title: 'Monitor',
        icon: 'cast',
        body: `Ensuring that your technology performs optimally and securely at all times is our job. 
        Peritus IT Solutions provides solutions that continuously monitor, assess and track the performance 
        and security of your network and applications.`,
    },
    {
        title: 'Manage',
        icon: 'speed',
        body: `Our uniquely designed approach to systems maintenance and support helps you to reduce costs by 
        managing your systems with greater efficiency. We provide enhanced system stability with scheduled 
        visits and round-the-clock troubleshooting that's just a phone call or a network alert away.`,
    },
];

const Pillars = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.pillarsIntro}
                align="center"
                variant={media.xs ? 'h6' : 'h5'}
            >
                These are the five pillars of our successful IT strategy:
            </Typography>

            {
                pillarContent.map((item) => {
                    return (
                        <Fragment key={item.title}>
                            <Typography
                                className={classes.pillarsHeaders}
                                align="center"
                                variant={media.xs ? 'h4' : 'h3'}
                            >
                                {item.title}
                            </Typography>
                
                            <Icon
                                className={classes.icons}
                                fontSize={media.xs ? 'small' : 'large'}
                            >
                                {item.icon}
                            </Icon>
                
                            <Divider className={classes.divider} />
                
                            <Typography
                                className={classes.pillarsBody}
                                align="center"
                                variant={media.xs ? 'body1' : 'h6'}
                            >
                                {item.body}
                            </Typography>
                        </Fragment>
                    );
                })
            }

        </Grid>
    );
};

export default Pillars;