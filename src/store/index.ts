import { createStore } from "vuex";
import { INavigationsState, navigations } from "./navigations";

export interface IRootState {
  navigations: INavigationsState;
}

export default createStore({
  modules: {
    navigations,
  },
});
