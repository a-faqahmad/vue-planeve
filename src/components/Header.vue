<template>
    
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="navbar.css" />

  <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: rgb(22, 22, 29)"
    >
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/logoOriginal.png" alt="Logo of PlanEve" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/adandmap" class="nav-link">Maps</router-link>
          </li>
 

          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Options
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">See Current Location</a>
              <a class="dropdown-item" href="#">Google Analytics</a>
              <a class="dropdown-item" href="#">Share a Post</a>
            </div>
          </li> -->
        </ul>
        <form @submit.prevent="printsearch" class="form-inline my-2 my-lg-0">
          <input name="search" v-model.lazy.trim="search"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
          <button class="btn btn-outline-success my-2 my-sm-0" @click="logout()" >
              LogOut
          </button>
        </form>
      </div>
    </nav>
</template>

<script>

import firebase from "firebase";

export default {
  methods: {
    printsearch() {
      console.log(this.search);
    },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out');
        this.$router.push('/signup');
      })
      .catch(error => {
        alert(error.message);
      });
  },
  },

  data() {
    return {
      search: "",
    }
  }
}
</script>

<style>
    .logo {
    height: 100px;
    width: 150px;
    }
    .navbar {
    min-height: 32px !important;
    height: 67px !important;
    }
</style>