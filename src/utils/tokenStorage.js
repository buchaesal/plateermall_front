const setTokenInSessionStorage = (token) => {
    // console.log('SET LOCAL STORAGE')
    sessionStorage.setItem("access_token", 'Bearer ' + token);
};

const deleteTokenInSessionStorage = () => {
    sessionStorage.clear();
};
export {deleteTokenInSessionStorage, setTokenInSessionStorage}