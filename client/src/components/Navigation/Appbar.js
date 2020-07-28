import React, { Fragment, useContext } from 'react';

import { MediaContext } from '../../context/Media';

import PropTypes from 'prop-types';
import TempDrawer from './Drawer';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Fab,
    Zoom,
    Icon,
    useScrollTrigger,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 5000,
  },
  appbar: {
    backgroundColor: 'transparent',
  },
  appbarTrigger: {
    backgroundColor: 'white',
    color: '#0000a2',
  },
  toolbar: {
    minHeight: 0,
  },
  companyName: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const ScrollTop = ({ children, trigger}) => {

  const classes = useStyles();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default (props) => {

  const window = props.window;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const classes = useStyles();
  const media = useContext(MediaContext);

  return (
      <Fragment>
          <AppBar className={trigger ? classes.appbarTrigger : classes.appbar}>

              <Toolbar>
                  <TempDrawer trigger={trigger} />

                  <Typography
                      className={classes.companyName}
                      variant={media.xs ? 'body1' : 'h6'}
                  >
                      Peritus IT Solutions
                  </Typography>
              </Toolbar>

          </AppBar>

          <Toolbar className={classes.toolbar} id="back-to-top-anchor"/>

          <ScrollTop trigger={trigger} {...props}>

              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                  <Icon>
                      keyboard_arrow_up
                  </Icon>
              </Fab>

          </ScrollTop>
      </Fragment>
  );
};
