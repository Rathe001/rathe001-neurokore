const actions = {
  ADD_CHARACTER: 'PARTY_ADD_CHARACTER',
  addCharacter: payload => ({
    type: actions.ADD_CHARACTER,
    payload,
  }),
};

export default actions;
