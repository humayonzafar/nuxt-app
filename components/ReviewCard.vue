<template>
  <div class="review-card">
    <div class="image-container">
      <img :src="review.picture.large" alt="" />
    </div>
    <div class="text-container">
      <h6>{{ review.login.username }}</h6>
      <p>
        Not all fire extinguishers are the same. If you need to choose one of these devices, you have to know the various types so you can get the right one for your needs. Fire extinguishers that have an A classification are for ordinary combustibles, while B means they are for flammable liquids. C means that the device will work with electrical equipment, D means they are for metals, and K means they are for combustible cooking materials including oil and fat. They also have number ratings in addition to the letters.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['review'],
}
</script>

<style scoped>
.review-card {
  margin-top: 1.5rem;
  height: 4rem;
  display: flex;
}

.text-container {
  margin-left: 2rem;
}

img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}

p {
  color: grey;
}
</style>
