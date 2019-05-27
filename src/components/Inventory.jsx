import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import inventoryActions from 'core/inventory/actions';

const styles = {
  inventory: {
    position: 'absolute',
    padding: 5,
    fontSize: 13,
    background: '#fff',
    backgroundSize: '100% 100%',
    top: 7,
    left: 10,
    width: 145,
    height: 145,
  },
};

const Inventory = ({ classes, character, toggleInventory }) => {
  return (
    <div className={classes.inventory}>
      {character.name}
      <br />
      Inventory screen here
      <button type="button" onClick={() => toggleInventory({})}>
        Close
      </button>
    </div>
  );
};

Inventory.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  character: PropTypes.shape({}).isRequired,
  toggleInventory: PropTypes.func.isRequired,
};

const mapStateToProps = ({ inventory }) => ({
  character: inventory.character,
});

const mapDispatchToProps = {
  toggleInventory: inventoryActions.toggle,
};

const StyledInventory = withStyles(styles)(Inventory);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledInventory);
