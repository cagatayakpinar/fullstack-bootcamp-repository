<template>
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <SideBarToggleTopbar></SideBarToggleTopbar>

    <!-- Topbar Search -->
    <top-search></top-search>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <SearchDropdown></SearchDropdown>

      <!-- Nav Item - Alerts -->
      <NavItemAlert></NavItemAlert>

      <!-- Nav Item - Messages -->
      <NavItemMessages></NavItemMessages>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <NavItemUserInfo></NavItemUserInfo>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavTopbar",
};
</script>
