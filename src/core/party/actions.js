const actions = {
  ADD_CHARACTER: 'PARTY_ADD_CHARACTER',
  PARTY_ADD_CHARACTER_SUCCESS: 'PARTY_ADD_CHARACTER_SUCCESS',
  PARTY_ADD_CHARACTER_FAILURE: 'PARTY_ADD_CHARACTER_FAILURE',
  addCharacter: payload => ({
    type: actions.ADD_CHARACTER,
    payload,
  }),
};

export default actions;
