const setTokenInSessionStorage = (token) => {
    // console.log('SET LOCAL STORAGE')
    sessionStorage.setItem("access_token", 'Bearer ' + token);
};

const deleteTokenInSessionStorage = () => {
    sessionStorage.removeItem("access_token");
};
export {deleteTokenInSessionStorage, setTokenInSessionStorage}