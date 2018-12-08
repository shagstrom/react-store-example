export function setNumberOfBalls(getDispatch) {
  return (number) => {
    getDispatch('ball')(() => {
      return ({
        number
      })
    });
  }
}
