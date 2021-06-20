<template>
  <div class="rest-card">
      <div class="title">
        <h2> {{detail.name}} </h2>
        <p class="rating"> ({{detail.rating}}) </p>
      </div>
      <p class="location"> {{detail.location}} </p>
      <p class="description"> {{detail.description}} </p>
      <a href="#">Share a post</a>
  </div>
</template>

<script>
export default {
    props: {
        detail: Object,
    }
}
</script>

<style>

.rest-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: solid 1px darkgray;
    padding: 25px;
    margin: 0px;
}

.title {
    display: flex;
    justify-content: center;
    align-items: baseline;
}

.rating {
    size: 5px;
    color: #272727;
    padding-left: 10px;
    margin: 0px;
}

.location {
    size: 9px;
    padding: none;
    margin: 1px;
}

.description {
    size: 15px;
}

</style>