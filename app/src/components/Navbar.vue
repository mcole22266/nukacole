<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <!-- Home Link -->
        <router-link class="navbar-brand" to="/">Nuka Cole</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          v-bind:class="{ active: isPage('Home') }"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Other Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Login Link -->
            <li class="nav-item">
              <router-link
                class="nav-link"
                v-bind:class="{ active: isPage('Login') }"
                to="/login"
                >Login</router-link
              >
            </li>
            <!-- Register Link -->
            <li class="nav-item">
              <router-link
                class="nav-link"
                v-bind:class="{ active: isPage('Register') }"
                to="/register"
                >Register</router-link
              >
            </li>
            <!-- Minibank Link -->
            <li class="nav-item">
              <router-link
                class="nav-link"
                v-bind:class="{ active: isPage('Minibank') }"
                to="/minibank"
                >Mini Bank</router-link
              >
            </li>
            <!-- Task Manager Link -->
            <li class="nav-item">
              <router-link
                class="nav-link"
                v-bind:class="{ active: isPage('Taskmanager') }"
                to="/taskmanager"
                >Task Manager</router-link
              >
            </li>
            <!-- About Link -->
            <li class="nav-item">
              <router-link
                class="nav-link"
                v-bind:class="{ active: isPage('About') }"
                to="/about"
                >About</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    isPage(pagename) {
      // Returns true if pagename matches the routename
      return pagename === this.$route.name;
    },
  },
};
</script>

<style>
</style>
