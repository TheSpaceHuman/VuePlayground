import { IMenuItem } from "@/components/ui/AppMenu.vue";
import { Module } from "vuex";
import { IRootState } from "@/store/index";

export interface INavigationsState {
  menu: IMenuItem[];
}

export const navigations: Module<INavigationsState, IRootState> = {
  namespaced: true,
  state: {
    menu: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
    ],
  },
  getters: {
    menu: (state: INavigationsState): IMenuItem[] => state.menu,
  },
};
