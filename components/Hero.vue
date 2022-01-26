<template>
  <div class="Hero container">
    <div class="text-container">
      <h1 class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">
        No matter how careful you might be, there is always the potential for a fire whether at the worksite or at home. Knowing how to deal with small fires that break out is essential if you hope to keep the damage to a minimum. One of the easiest ways to deal with fires when they first begin is with a fire extinguisher. However, you need to make sure you have the right one for the job, and that you know how to use it properly.
      </p>
      <NuxtLink to="/Products" class="button btn">Start Looking</NuxtLink>
    </div>
    <img
      class="image"
      src="~assets/svg/fire-extinguisher.svg"
      alt="fire extinguisher"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.Hero {
  height: 55vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.text-container {
  width: 50%;
  margin-top: 4rem;
}

.header {
  font-weight: 900;
  font-size: 5rem;
}

.snippet {
  color: grey;
  font-size: 1.25rem;
}

.image {
  width: 27.5rem;
  margin-top: 2rem;
}

.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}

.button:hover {
  width: 21.5rem;
}

@media (max-width: 500px) {
  .Hero {
    height: 40vh;
  }
}
</style>
