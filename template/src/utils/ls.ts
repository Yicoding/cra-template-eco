import defaults from "store/plugins/defaults";
import expire from "store/plugins/expire";
import engine from "store/src/store-engine";
import sessionStorage from "store/storages/sessionStorage";
import localStorage from "store/storages/localStorage";
import memoryStorage from "store/storages/memoryStorage";

const localStore = engine.createStore(
  [localStorage, memoryStorage],
  [defaults, expire]
);

const sessionStore = engine.createStore(
  [sessionStorage, memoryStorage],
  [defaults, expire]
);

const ls = localStore.namespace("cra-template-eco");
export const session = sessionStore.namespace("cra-template-eco");

export default ls;
