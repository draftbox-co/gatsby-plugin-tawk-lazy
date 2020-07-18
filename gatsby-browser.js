"use strict";

exports.__esModule = true;
exports.onInitialClientRender = void 0;

const onInitialClientRender = (_, pluginOptions) => {
  const tawkId = pluginOptions.tawkId;
  const delayLoad = pluginOptions.optimize;
  const source = "https://embed.tawk.to/" + tawkId + "/default";
  const tawkScript = document.createElement("script");
  tawkScript.src = source;
  tawkScript.defer = true;

  const appendScript = () => {
    document.body.appendChild(tawkScript);
  };

  if (!delayLoad) {
    appendScript();
  } else {
    setTimeout(() => {
      window["requestIdleCallback"] ? window.requestIdleCallback(appendScript) : appendScript();
      console.log("added script");
    }, 3000);
  }
};

exports.onInitialClientRender = onInitialClientRender;