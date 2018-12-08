export function updateUser(getDispatch) {
  return (user) => {
    getDispatch('user')((state) => {
      return ({
        ...state,
        ...user
      })
    });
  }
}

export function updateUserCountry(getDispatch) {
  return (country) => {
    getDispatch('user')((state) => ({
      ...state,
      country
    }));
  }
}
