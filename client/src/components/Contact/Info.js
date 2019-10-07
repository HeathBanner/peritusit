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
        background: '#0000a2',
        color: 'white',
        padding: '40px 25%',
        paddingTop: 80,
        [theme.breakpoints.down('md')]: {
            padding: '40px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    mailHeader: {
        marginTop: 40,
        width: '100%',
    },
    divider: {
        width: '60%',
        backgroundColor: 'rgb(255, 255, 255, 0.1)',
        marginBottom: 20,
    },
    mailInfo: {
        width: '100%',
        marginBottom: 10,
    },

}));

const mailInfo = [
    {
        text: 'Peritus IT Solutions',
    },
    {
        text: 'PO Box 480835',
    },
    {
        text: 'Charlotte NC 28269',
    },
];

const Info = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.mailHeader}
                align="center"
                variant={media.xs ? 'h6' : 'h5'}
            >
                Email
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                className={classes.mailInfo}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                info@peritusit.com
            </Typography>

            <Typography
                className={classes.mailHeader}
                align="center"
                variant={media.xs ? 'h6' : 'h5'}
            >
                Mailing Address
            </Typography>

            <Divider className={classes.divider} />

            {
                mailInfo.map((item, index) => {
                    return (
                        <Typography
                            className={classes.mailInfo}
                            align="center"
                            variant={media.xs ? 'body1' : 'h6'}
                            key={index}
                        >
                            {item.text}
                        </Typography>
                    )
                })
            }
            
        </Grid>
    );
};

export default Info;