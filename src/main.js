import plugin from "../plugin.json";

class JAlgoPlugin {
  async init() {
    console.log("J_Algo chargé");
    window.toast?.("J_Algo chargé");
  }

  async destroy() {
    console.log("J_Algo déchargé");
  }
}

if (window.acode) {
  const instance = new JAlgoPlugin();

  acode.setPluginInit(
    plugin.id,
    async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
      if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
      }

      instance.baseUrl = baseUrl;
      await instance.init($page, cacheFile, cacheFileUrl);
    }
  );

  acode.setPluginUnmount(plugin.id, () => {
    instance.destroy();
  });
}
