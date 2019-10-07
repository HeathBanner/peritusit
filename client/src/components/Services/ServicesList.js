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
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        color: '#0000a2',
        padding: '40px 25%',
        paddingTop: 100,
        [theme.breakpoints.down('md')]: {
            padding: '60px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    listHeaders: {
        width: '100%',
    },
    divider: {
        marginBlockStart: '0.5em',
        marginBottom: 40,
        width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
    listBodys: {
        width: '100%',
        marginBottom: 80,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 60,
        },
    },
}));

const servicesContent = [
    {
        title: 'Strategies and Planning',
        body: `Getting reliable results from a network system requires in-depth planning, 
        installation and management. Our team of IT experts understands every aspect of 
        networking — from planning to project management, installation, testing, training 
        and implementation.`,
    },
    {
        title: 'Technology Assessments',
        body: `The quality, performance and security of your network can be vastly improved 
        with our technology audits. Working together with your in-house teams, we analyze 
        your IT infrastructure in order to identify vulnerabilities. Then we set priorities 
        that match your personnel and budget requirements.`,
    },
    {
        title: 'Implementation',
        body: `Installing and testing your new platforms can cause nightmares for even the 
        most seasoned IT professional. Peritus IT Solutions thoroughly tests and re-tests 
        all devices and software prior to your switch-over date. You can rest assured that 
        from the moment you connect your new system, all data and communications will 
        function as you need it to.`,
    },
    {
        title: 'IT Budget Planning',
        body: `The highly trained and experienced project managers at Peritus IT Solutions 
        can help you acquire the technology you require to reach your business objectives 
        within a budget that works for you.`,
    },
];

const ServicesList = () => {
    
    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            {
                servicesContent.map((item) => {
                    return (
                        <Fragment key={item.title}>
                            <Typography
                                className={classes.listHeaders}
                                align="center"
                                variant={media.xs ? 'h5' : 'h4'}
                            >
                                {item.title}
                            </Typography>

                            <Divider className={classes.divider} />

                            <Typography
                                className={classes.listBodys}
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

export default ServicesList;