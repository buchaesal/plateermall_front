const setTokenInLocalStorage = (token) => {
    // console.log('SET LOCAL STORAGE')
    localStorage.setItem("access_token", 'Bearer ' + token);
};

const deleteTokenInLocalStorage = () => {
    localStorage.removeItem("access_token");
};
export {deleteTokenInLocalStorage, setTokenInLocalStorage}