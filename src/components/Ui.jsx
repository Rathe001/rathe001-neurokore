import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import background from 'assets/img/bg-ui.png';
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
};

const Ui = ({ classes, showCharacterCreation }) => {
  return <div className={classes.ui}>{showCharacterCreation && <CharacterCreation />}</div>;
};

Ui.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showCharacterCreation: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  showCharacterCreation: ui.showCharacterCreation,
});
const mapDispatchToProps = {};

const StyledUi = withStyles(styles)(Ui);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledUi);
