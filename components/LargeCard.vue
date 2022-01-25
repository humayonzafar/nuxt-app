<template>
  <div class="card">
    <nuxt-link :to="`/products/${card.id}`" class="card-container">
      <img
        class="image"
        :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)"
        alt=""
      />
      <h3 class="header">{{ card.title }}</h3>
      <p class="snippet">
        {{ card.snippet }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: ()=>{}
    }
  },
}
</script>

<style scoped>
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}

.image {
  height: 250px;
  border-radius: 0.5rem;
  max-width: 100%;
}

.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}

.snippet {
  color: grey;
}
</style>
