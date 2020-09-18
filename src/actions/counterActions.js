export default {
  count: 0,
}

export function increaseCount(dispatch) {
  return () => {
    dispatch('counter', (state) => {
      return ({
        count: state.count + 1,
      });
    });
  }
}
