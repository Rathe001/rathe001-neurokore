import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import background from 'assets/img/bg-ui.png';
import logo from 'assets/img/logo-sm.png';
import CharacterCreation from 'components/CharacterCreation';
import Dialog from 'components/Dialog';
import Party from 'components/Party';
import Tooltip from 'components/Tooltip';
import CharacterSheet from 'components/CharacterSheet';

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
    top: 2,
    right: 12,
    position: 'absolute',
  },
};

const Ui = ({ classes }) => {
  return (
    <div className={classes.ui}>
      <img src={logo} alt="New Game+" className={classes.logo} />
      <CharacterCreation />
      <CharacterSheet />
      <Dialog />
      <Tooltip />
      <Party />
    </div>
  );
};

Ui.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

const StyledUi = withStyles(styles)(Ui);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledUi);
