import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import background from 'assets/img/bg-ui.png';
import logo from 'assets/img/logo.png';
import CharacterCreation from './CharacterCreation';

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
    height: 21,
    left: 40,
    top: -2,
    position: 'absolute',
  },
};

const Ui = ({ classes, showCharacterCreation }) => {
  return (
    <div className={classes.ui}>
      <img src={logo} alt="New Game+" className={classes.logo} />
      {showCharacterCreation && <CharacterCreation />}
    </div>
  );
};

Ui.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showCharacterCreation: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ characterCreation }) => ({
  showCharacterCreation: characterCreation.show,
});
const mapDispatchToProps = {};

const StyledUi = withStyles(styles)(Ui);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledUi);
