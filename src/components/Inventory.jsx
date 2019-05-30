import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import inventoryActions from 'core/inventory/actions';
import { VARIABLES } from 'constants/config';
import inventoryBg from 'assets/img/bg-inventory.png';

const styles = {
  inventory: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    color: '#fff',
    background: `url(${inventoryBg}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    top: 7,
    left: 10,
    width: 145,
    height: 145,
    zIndex: 9999,
    opacity: 1,
    transition: '0.25s all',
    transitionTimingFunction: `steps(${VARIABLES.ui.fps / 4})`,
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  btnClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2px',
  },
};

const Inventory = ({ classes, character, toggleInventory, showInventory }) => {
  return (
    <div
      className={classnames(classes.inventory, {
        [classes.hidden]: !showInventory,
      })}
    >
      {character.name}
      <button className={classes.btnClose} type="button" onClick={() => toggleInventory({})}>
        X
      </button>
    </div>
  );
};

Inventory.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  character: PropTypes.shape({}).isRequired,
  toggleInventory: PropTypes.func.isRequired,
  showInventory: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ inventory }) => ({
  character: inventory.character,
  showInventory: inventory.show,
});

const mapDispatchToProps = {
  toggleInventory: inventoryActions.toggle,
};

const StyledInventory = withStyles(styles)(Inventory);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledInventory);
