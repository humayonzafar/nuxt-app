<template>
  <div class="container">
    <large-card-display
      v-for="cardInfo in largeCardInfo.slice(0, 1)"
      :key="cardInfo.id"
      :cards-section="cardInfo"
    />
    <small-card-display
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cards-section="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
import LargeCardDisplay from '@/components/LargeCardDisplay'
import SmallCardDisplay from '@/components/SmallCardDisplay'
export default {
  components: { SmallCardDisplay, LargeCardDisplay },
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections,
    }
  },
}
</script>

<style scoped></style>
