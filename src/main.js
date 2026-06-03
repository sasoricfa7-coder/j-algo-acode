import plugin from "../plugin.json";
import jAlgo from "./language/j_algo.js";

class JAlgoPlugin {
  async init() {
    console.log("Jeanne_Algo chargé");

    if (window.editorManager?.editorLanguages) {
      editorManager.editorLanguages["Jeanne_Algo"] = jAlgo;
      window.toast?.("Jeanne_Algo enregistré");
    } else {
      window.toast?.("editorLanguages introuvable");
    }
  }

  async destroy() {
    if (window.editorManager?.editorLanguages) {
      delete editorManager.editorLanguages["Jeanne_Algo"];
    }
  }
}

if (window.acode) {
  const instance = new JAlgoPlugin();

  acode.setPluginInit(plugin.id, async (baseUrl) => {
    instance.baseUrl = baseUrl;
    await instance.init();
  });

  acode.setPluginUnmount(plugin.id, () => {
    instance.destroy();
  });
}
