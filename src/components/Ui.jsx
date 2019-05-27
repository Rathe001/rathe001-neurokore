import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import background from 'assets/img/bg-ui.png';
import logo from 'assets/img/logo.png';
import CharacterCreation from 'components/CharacterCreation';
import Dialog from 'components/Dialog';
import Party from 'components/Party';
import Tooltip from 'components/Tooltip';
import Inventory from 'components/Inventory';

const styles = {
  ui: {
    background: `#000 url(${background}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logo: {
    height: 18,
    top: 2,
    right: 12,
    position: 'absolute',
  },
};

const Ui = ({ classes, showCharacterCreation, showInventory }) => {
  return (
    <div className={classes.ui}>
      <img src={logo} alt="New Game+" className={classes.logo} />
      {showCharacterCreation && <CharacterCreation />}
      {showInventory && <Inventory />}
      <Dialog />
      <Tooltip />
      <Party />
    </div>
  );
};

Ui.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showCharacterCreation: PropTypes.bool.isRequired,
  showInventory: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ characterCreation, inventory }) => ({
  showCharacterCreation: characterCreation.show,
  showInventory: inventory.show,
});
const mapDispatchToProps = {};

const StyledUi = withStyles(styles)(Ui);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledUi);
