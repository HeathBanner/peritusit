import React, { useState, useContext } from 'react';

import { MediaContext } from '../../context/Media';

import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon,
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  button: {
    padding: 10,
    minWidth: 0,
  },
  icon: {
    color: 'white',
  },
  iconTrigger: {
    color: '#0000a2',
  },
  links: {
    textDecoration: 'none',
    color: 'inherit',
    ':&hover': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
});

const drawerContent = [
  {
    text: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    text: 'About',
    icon: 'account_circle',
    link: '/about',
  },
  {
    text: 'Services',
    icon: 'developer_mode',
    link: '/services',
  },
  {
    text: 'Strategy',
    icon: 'insert_chart',
    link: '/strategy',
  },
  {
    text: 'Pricing',
    icon: 'local_atm',
    link: '/pricing',
  },
  {
    text: 'Technologies',
    icon: 'timeline',
    link: '/technologies',
  },
  {
    text: 'Partnerships',
    icon: 'group',
    link: '/partnerships',
  },
  {
    text: 'Testimonials',
    icon: 'chat',
    link: '/testimonials',
  },
  {
    text: 'Contact Us',
    icon: 'phone',
    link: '/contact',
  },
];

export default ({ trigger }) => {

  const classes = useStyles();
  const media = useContext(MediaContext);

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerContent.map((item) => (
            <a
              className={classes.links}
              href={item.link}
              key={item.text}
            >
              <ListItem button key={item.text}>
                <ListItemIcon>
                  <Icon
                    fontSize={media.xs ? 'small' : 'large'}
                  >
                    {item.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    variant: media.xs ? 'body1' : 'h6'
                  }}
                />
              </ListItem>
            </a>
          ))}
      </List>
    </div>
  );

  return (
    <div>
        <Button
            className={classes.button}
            onClick={toggleDrawer(true)}
        >
            <Icon
              className={trigger ? classes.iconTrigger : classes.icon}
              fontSize={media.xs ? 'small' : 'large'}
            >
                menu
            </Icon>
        </Button>

        <Drawer open={state} onClose={toggleDrawer(false)}>
            {sideList()}
        </Drawer>
    </div>
  );
};
