<template>
  <div id="page-top">
    <FooterPage> </FooterPage>
    <LogOut> </LogOut>
    <NavAlert> </NavAlert>
    <NavMessage> </NavMessage>
    <NavSearch> </NavSearch>
    <SidebarChats> </SidebarChats>
    <SidebarDashboard> </SidebarDashboard>
    <SidebarHeadings> </SidebarHeadings>
    <SidebarPagesCollapse> </SidebarPagesCollapse>
    <SidebarTables> </SidebarTables>
    <SidebarToggler> </SidebarToggler>
    <SidebarUtilities> </SidebarUtilities>
    <NavTopbar> </NavTopbar>
    <UserInfo> </UserInfo>
  </div>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
import LogOut from "./components/LogOut.vue";
import NavAlert from "./components/NavAlert.vue";
import NavMessage from "./components/NavMessage.vue";
import NavSearch from "./components/NavSearch.vue";
import SidebarChats from "./components/NavBar/SidebarChats.vue";
import SidebarDashboard from "./components/SidebarDashboard.vue";
import SidebarHeadings from "./components/SidebarHeadings.vue";
import SidebarPagesCollapse from "./components/SidebarPagesCollapse.vue";
import SidebarTables from "./components/SidebarTables.vue";
import SidebarToggler from "./components/SidebarToggler.vue";
import SidebarUtilities from "./components/SidebarUtilities.vue";
import NavTopbar from "./components/NavTopbar.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  name: "App",
  components: {
    FooterPage,
    LogOut,
    NavAlert,
    NavMessage,
    NavSearch,
    SidebarChats,
    SidebarDashboard,
    SidebarHeadings,
    SidebarPagesCollapse,
    SidebarTables,
    SidebarToggler,
    SidebarUtilities,
    NavTopbar,
    UserInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>