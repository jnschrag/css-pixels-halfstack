export const changeSize = (store, e) => {
  store.setState({ size: e.target.value });
  document.documentElement.style.setProperty("--size", e.target.value+'px');
};

export const changeColor = (store, e) => {
    document.documentElement.style.setProperty("--" + e.target.name, e.target.value);
    store.setState({
        colors:{
            ...store.colors,
            [e.target.name]: e.target.value
        }
    });
}