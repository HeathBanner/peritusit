import React, {
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
        height: '100vh',
        backgroundColor: 'white',
        color: '#0000a2',
        padding: '0 25%',
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
        },
    },
    aboutBody: {
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '60%',
        marginBottom: 40,
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
}));

const MidSection = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.aboutBody}
                align="center"
                style={{ marginBottom: 40 }}
                variant={media.xs ? 'body1' : 'h6'}
            >
                For years, we have been providing reliable IT solutions to businesses 
                in the Charlotte area and beyond. Our comprehensive services provide 
                clients with unique technology solutions that are customized to meet 
                the specific demands of their business.
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                className={classes.aboutBody}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                Look to our experts for strategic IT guidance, management and support 
                that allows you to take your mind off technology and concentrate on your 
                core area of business. Peritus IT Solutions provides cost-efficient 
                solutions that simply make good sense.
            </Typography>

        </Grid>
    );
};

export default MidSection;