export default {
}

export function updateUserName(dispatch) {
  return (name) => {
    dispatch('user', (state) => {
      return ({
        ...state,
        name: name,
      });
    });
  }
}
