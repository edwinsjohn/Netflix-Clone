import { atom } from "recoil";

export const triggerBrowse = atom({
  key: "trigger_browse", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
