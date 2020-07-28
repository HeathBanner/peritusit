import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Icon,
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
        padding: '100px 25%',
        paddingTop: 100,
        [theme.breakpoints.down('md')]: {
            padding: '100px 15%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            paddingTop: 100,
        },
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    listText: {
        width: '100%',
        textAlign: 'center',
        marginTop: 80,
        [theme.breakpoints.down('xs')]: {
            marginTop: 40,
        },
    },
    expand: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        marginBottom: 40,
    },
    listDivider: {
        marginBlockStart: '0.5em',
        width: '60%',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        marginBottom: 30,
    },
    nested: {
        width: '100%',
        color: 'black',
        textAlign: 'center',
    }
}));

const onSiteList = [
    {
        text: `New computer installation`,
    },
    {
        text: `E-Mail setup`,
    },
    {
        text: `Software installation`,
    },
    {
        text: `Data backup and migrations`,
    },
    {
        text: `Network toubleshooting`,
    },
    {
        text: `Network Storage Device installation`,
    },
    {
        text: `Server installations and migrations`,
    },
    {
        text: `Network printers/scanner deployments`,
    },
    {
        text: `Router/Firewall configuration`,
    },
    {
        text: `Fiber/Cable/T1 implementations`,
    },
];

const shopList = [
    {
        text: `Computer troubleshooting and repair`,
    },
    {
        text: `Operating System installations and upgrades`
    },
    {
        text: `Hardware upgrades`,
    },
    {
        text: `Data backup & recovery`
    },
];

const remoteList = [
    {
        text: `Assisted software installation`,
    },
    {
        text: `Basic printer installation`,
    },
    {
        text: `Simple e-mail setup`,
    },
    {
        text: `Minor troubleshooting`,
    },
    {
        text: `Training`,
    },
];

export default ({ xs }) => {
    
    const classes = useStyles();

    const [onsite, setOnsite] = useState(true);
    const [shop, setShop] = useState(true);
    const [remote, setRemote] = useState(true);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                style={{ width: '100%' }}
                variant={xs ? 'h5' : 'h4'}
                align="center"
            >
                We offer various levels of service
            </Typography>

            <Divider className={classes.divider} />

            <List className={classes.list}>

                <ListItem
                    button
                    onClick={() => setOnsite(!onsite)}
                    style={{ flexWrap: 'wrap' }}
                >
                    <ListItemText
                        className={classes.listText}
                        primary="Onsite service at an hourly rate of $95.00 billed to the 
                        1/2 hour."
                        primaryTypographyProps={{
                            variant: xs ? 'h6' : 'h5',
                        }}
                    />
                    <div className={classes.expand}>
                        <Typography>
                            {onsite ? 'See less' : 'See more'}
                        </Typography>
                        <Icon>
                            {onsite ? 'expand_less' : 'expand_more'}
                        </Icon>
                    </div>
                </ListItem>

                <Divider className={classes.listDivider} />

                <Collapse
                    in={onsite}
                    timeout="auto"
                    unmountOnExit
                    style={{ width: '100%' }}
                >
                    {onSiteList.map((item) => {
                        return (
                            <ListItem
                                className={classes.nested}
                                key={item.text}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        variant: xs ? 'body1' : 'h6'
                                    }}
                                />
                            </ListItem>
                        )
                    })}
                </Collapse>

                <ListItem
                    button
                    onClick={() => setShop(!shop)}
                    style={{ flexWrap: 'wrap' }}
                >
                    <ListItemText
                        className={classes.listText}
                        primary="Shop service at $80.00 per hour or fixed rate projects"
                        primaryTypographyProps={{
                            variant: xs ? 'h6' : 'h5'
                        }}
                    />
                    <div className={classes.expand}>
                        <Typography>
                            {shop ? 'See less' : 'See more'}
                        </Typography>
                        <Icon>
                            {shop ? 'expand_less' : 'expand_more'}
                        </Icon>
                    </div>                
                </ListItem>

                <Divider className={classes.listDivider} />

                <Collapse
                    in={shop}
                    timeout="auto"
                    unmountOnExit
                    style={{ width: '100%' }}
                >
                    {shopList.map((item) => {
                        return (
                            <ListItem
                                className={classes.nested}
                                key={item.text}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        variant: xs ? 'body1' : 'h6'
                                    }}
                                />
                            </ListItem>
                        )
                    })}
                </Collapse>

                <ListItem
                    button
                    onClick={() => setRemote(!remote)}
                    style={{ flexWrap: 'wrap' }}
                >
                    <ListItemText
                        className={classes.listText}
                        primary="Remote Service at $70.00 per session"
                        primaryTypographyProps={{
                            variant: xs ? 'h6' : 'h5'
                        }}
                    />
                    <div className={classes.expand}>
                        <Typography>
                            {remote ? 'See less' : 'See more'}
                        </Typography>
                        <Icon>
                            {remote ? 'expand_less' : 'expand_more'}
                        </Icon>
                    </div>
                </ListItem>

                <Divider className={classes.listDivider} />

                <Collapse
                    in={remote}
                    timeout="auto"
                    unmountOnExit
                    style={{ width: '100%' }}
                >
                    {remoteList.map((item) => {
                        return (
                            <ListItem
                                className={classes.nested}
                                key={item.text}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        variant: xs ? 'body1' : 'h6'
                                    }}
                                />
                            </ListItem>
                        )
                    })}
                </Collapse>

            </List>

        </Grid>
    );
};
