import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Icon,
    Divider,
} from '@material-ui/core';

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
            padding: '60px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    listHeader: {
        width: '100%',
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '60%',
        marginBottom: 40,
        backgroundColor: 'rgb(255, 255, 255, 0.1)',
    },
}));

const additionalList = [
    {
        text: `Onsite Service and Troubleshooting`,
        icon: 'live_help',
    },
    {
        text: `Shop Service`,
        icon: 'local_hospital',
    },
    {
        text: `Network Printer & Scanner Setup`,
        icon: 'scanner',
    },
    {
        text: `E-Mail and Acceptable Use Policies`,
        icon: 'policy',
    },
    {
        text: `Remote and Managed Services`,
        icon: 'network_check',
    },
    {
        text: `Network Cabling`,
        icon: 'account_tree',
    },
    {
        text: `Backup and Disaster Recovery Solutions`,
        icon: 'storage'
    },
    {
        text: `Hardware and Software Sales `,
        icon: 'monetization_on',
    },
];

export default ({ xs }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.listHeader}
                align="center"
                variant={xs ? 'h5' : 'h4'}
            >
                Additional Services
            </Typography>

            <Divider className={classes.divider} />

            <List>
                {additionalList.map((item) => {
                    return (
                        <ListItem key={item.text}>

                            <ListItemAvatar>
                                <Icon>
                                    {item.icon}
                                </Icon>
                            </ListItemAvatar>

                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    variant: xs ? 'body1' : 'h6'
                                }}
                            />

                        </ListItem>
                    );
                })}
            </List>

        </Grid>
    );
};
