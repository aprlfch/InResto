const swRegister = () => {
  if ('serviceWorker' in navigator) {
    import('serviceworker-webpack-plugin/lib/runtime')
      .then((module) => module.default)
      .then(async (runtime) => {
        await runtime.register();
      });
  } else {

  }
};

export default swRegister;
