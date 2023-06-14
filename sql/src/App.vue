<script>
// import router from './router'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="web-heading">
    <RouterView />
    <div class="links-div">
      <div class="title">
        <h1 class="web-title">Volleyball Team Builder</h1>
      </div>
      <nav>
        <RouterLink class="link links" to="/">Home</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link links" to="/about">About Us</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link links" to="/HousekeepersView">Players</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style>
.web-heading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #301934;
  padding: 30px;
}

.title {
  color: #5c1ad9;
}
.web-title {
  border-right: white 4px solid;
  padding: 30px;
  background-color: pink;
  color: #5c1ad9;
  font-weight: bold;
}

.link {
  border: black 3px solid;
  padding: 5px;
  margin-top: 5%;
  border-radius: 1px;
  background-color: #5c1ad9;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  margin: 50px;
}

.links {
  border-right: black 3px solid;
}

.links-div {
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: space-evenly;
}

.login {
  margin-left: 100px;
}

.signup {
  margin-right: 100px;
}

.user {
  border: black 3px solid;
  padding: 5px;
  margin-top: 5%;
  border-radius: 1px;
  background-color: #452784;
  border-radius: 20px;
  color: violet;
}
</style>
