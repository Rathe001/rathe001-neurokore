import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import background from 'assets/img/bg-create-character.png';

const styles = {
  characterCreation: {
    position: 'absolute',
    cursor: 'pointer',
    padding: 5,
    top: 18,
    fontSize: 13,
    background: `url(${background}) 0 0 no-repeat`,
    backgroundSize: '100% 100%',
    left: 11,
    width: 134,
    height: 134,
  },
};

const CharacterCreation = ({ classes }) => {
  return (
    <div className={classes.characterCreation}>
      <h1>Add a new character</h1>
      <p>Character creation</p>
      <input type="text" />
    </div>
  );
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
