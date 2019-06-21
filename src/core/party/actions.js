const actions = {
  ADD_CHARACTER: 'PARTY_ADD_CHARACTER',
  addCharacter: payload => ({
    type: actions.ADD_CHARACTER,
    payload,
  }),

  SET_CHARACTERS: 'PARTY_SET_CHARACTERS',
  setCharacters: payload => ({
    type: actions.SET_CHARACTERS,
    payload,
  }),
};

export default actions;
