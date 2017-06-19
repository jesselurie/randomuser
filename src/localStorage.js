export const loadState = (stateName) => {
  try {
    const serializedState = localStorage.getItem(stateName);
    console.log(serializedState)
    if (serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState)
  }catch(err){
    //log error
    console.log(err)
    return undefined;
  }

}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState)
  }catch(err){
    console.log(err);
  }
};
