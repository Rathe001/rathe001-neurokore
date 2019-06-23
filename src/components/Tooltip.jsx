import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import iconInfo from 'assets/img/icon-info.png';

const styles = {
  tooltip: {
    position: 'absolute',
    minHeight: 16,
    bottom: 6,
    right: 6,
    width: 150,
    padding: '5px 4px 3px 7px',
    color: '#7da4f4',
    fontSize: 6,
    background: '#031627',
    border: '1px solid #333',
    boxShadow: '0 0 7px rgba(0, 0, 0, 1), 0 0 7px rgba(0, 0, 0, 1)',
    '&::before': {
      position: 'absolute',
      width: 9,
      height: 16,
      background: `#031627 url(${iconInfo}) 50% 50% no-repeat`,
      content: '""',
      top: -1,
      left: -9,
      border: '1px solid #333',
      borderRight: 'none',
    },
  },
  hidden: {
    display: 'none',
  },
};

const Tooltip = ({ classes, stateTooltipShow, stateTooltipText }) => {
  return (
    <div
      className={classnames(classes.tooltip, {
        [classes.hidden]: !stateTooltipShow,
      })}
      dangerouslySetInnerHTML={{ __html: stateTooltipText }}
    />
  );
};

Tooltip.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  stateTooltipShow: PropTypes.bool.isRequired,
  stateTooltipText: PropTypes.node.isRequired,
};

const mapStateToProps = ({ tooltip }) => ({
  stateTooltipShow: tooltip.show,
  stateTooltipText: tooltip.text,
});

const mapDispatchToProps = {};

const StyledTooltip = withStyles(styles)(Tooltip);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledTooltip);
