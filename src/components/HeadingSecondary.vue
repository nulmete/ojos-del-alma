<template>
  <div class="section-heading-wrapper">
    <h2 class="section-heading">
      <slot />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'heading-secondary'
}
</script>

<style scoped lang="scss">
  .section-heading-wrapper {
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  .section-heading {
    font-size: 3rem;
    display: inline-block;
    font-weight: 700;
  }
</style>
