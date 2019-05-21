import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import background from 'assets/img/bg-create-character.png';

const styles = {
  characterCreation: {
    position: 'absolute',
    cursor: 'pointer',
    top: 7,
    fontSize: 13,
    background: `url(${background}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    left: 10,
    width: 136,
    height: 145,
  },
};

const CharacterCreation = ({ classes }) => {
  return <div className={classes.characterCreation}>CHARACTER CREATION</div>;
};

CharacterCreation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

const StyledCharacterCreation = withStyles(styles)(CharacterCreation);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCharacterCreation);
