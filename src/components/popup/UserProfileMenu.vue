<template>
  <OnClickOutside :options="{ ignore: ['.burger', '.user-profile-popup'] }" @trigger="handleProfileMenu">
    <Transition name="bounce">
      <div v-show="isShowProfileMenu" class="user-profile-popup">
        <div v-for="link in menuItems" :key="link.name">
          <div @click="onRouteClick(link.name)" class="user-profile-popup__link">
            <StyledIcon :icon="link.icon" class="icons" />
            <span>{{ link.name }}</span>
          </div>
        </div>
      </div>
    </Transition>
    <LogoutPopup :is-show-logout-popup="isShowLogoutPopupMenu" @cancel="handleLogoutPopup" @confirm="confirmLogout" />
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import StyledIcon from "@/components/icons/StyledIcon.vue";
import LogoutPopup from "@/components/popup/LogoutPopup.vue";
import { ROUTES } from "@/constants/routes";
import { useAppStore } from "@/store/app/appStore";

export interface MENU_ROUTE {
  name: string;
  link: string;
  icon: string;
}

const appStore = useAppStore();
const { isShowProfileMenu } = storeToRefs(appStore);
const { updateProfileMenu } = appStore;

const isShowLogoutPopupMenu = ref<boolean>(false);

const router = useRouter();

const menuItems = ref<MENU_ROUTE[]>([
  { name: "Profile", link: ROUTES.PROFILE.PATH, icon: "Profile" },
  { name: "Transactions", link: ROUTES.USER_TRANSACTIONS.PATH, icon: "Money" },
  { name: "Buy Neurons", link: ROUTES.BUY_NEURONS.PATH, icon: "Neuron" },
  { name: "logout", link: ROUTES.LOGOUT.PATH, icon: "Logout" },
]);

const handleProfileMenu = () => {
  updateProfileMenu(false);
};

const handleLogoutPopup = () => {
  isShowLogoutPopupMenu.value = false;
};

const onRouteClick = (routeName: string) => {
  if (routeName === ROUTES.LOGOUT.NAME) {
    isShowLogoutPopupMenu.value = true;
    return;
  }
  handleProfileMenu();

  const route = menuItems.value.find((route: MENU_ROUTE) => route.name == routeName);

  if (route) {
    router.push({ path: route.link });
  }
};

const confirmLogout = () => {
  isShowLogoutPopupMenu.value = true;
  handleProfileMenu();
  router.push({ path: ROUTES.LOGOUT.PATH });
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.user-profile-popup {
  display: flex;
  position: absolute;
  top: 100px;
  right: 20px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 999;
  border: 2px solid $primary-900;
  border-radius: 8px;
  background-color: $grey-4000;
  padding: 22px 34px;
  width: 270px;

  &__link {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    border-radius: 4px;
    background-color: $grey-5000;
    padding: 10px 16px;
    text-transform: uppercase;
  }
}
</style>
