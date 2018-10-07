import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes, title } = props;

  return (
    <div className={classes.root}>
      <AppBar
          frameborder={0} style={{backgroundColor:"white"}}
          position='relative'>
        <Toolbar>
          <Typography variant="title" color="black">
          {title}
          </Typography>
          <div className={classes.root} />
          <div>
          <IconButton style={{float: 'right',}}>
            <SvgIcon>
              <path fill="#000000" d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z" />
            </SvgIcon>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
