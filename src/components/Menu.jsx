import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import classnames from 'classnames';
import menuActions from 'core/menu/actions';
import menuButtonBackground from 'assets/img/icon-menu.png';
import { VARIABLES } from 'constants/config';

const styles = {
  menu: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: 1,
    transition: '0.25s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps / 4})`,
  },
  menuList: {
    width: '30%',
    textAlign: 'center',
  },
  menuItem: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '5px 10px 3px 10px',
    margin: '0 0 3px',
    fontSize: 8,
    borderRadius: 3,
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  menuButton: {
    background: `url(${menuButtonBackground}) 0 0 no-repeat`,
    width: 38,
    top: 149,
    right: 34,
    position: 'absolute',
    height: 11,
    cursor: 'pointer',
    boxShadow: '0 0 4px #000',
    outline: '2px solid rgba(0, 0, 0, 0.4)',

    '&:hover': {
      backgroundPosition: '-38px 0',
    },
  },
};

const Menu = ({ classes, toggleMenu, showMenu }) => {
  return (
    <>
      <div onClick={toggleMenu} className={classes.menuButton} />
      <div
        onClick={toggleMenu}
        className={classnames(classes.menu, {
          [classes.hidden]: !showMenu,
        })}
      >
        <ul className={classes.menuList}>
          <li className={classes.menuItem}>Save Game</li>
          <li className={classes.menuItem}>Load Game</li>
          <li className={classes.menuItem}>Disable Sound</li>
          <li className={classes.menuItem}>Disable Music</li>
          <li className={classes.menuItem}>Disable Help</li>
        </ul>
      </div>
    </>
  );
};

Menu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ menu }) => ({
  showMenu: menu.show,
});

const mapDispatchToProps = {
  toggleMenu: menuActions.toggle,
};

const StyledMenu = withStyles(styles)(Menu);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledMenu);
