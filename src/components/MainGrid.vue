<template>
  <div class="main-grid">
    <div class="main-grid__col-1">
      <heading-secondary>
        {{ heading }}
      </heading-secondary>
      <p>
        {{ text }}
      </p>
    </div>
    <div class="main-grid__col-2">
      <div class="img-container img-container--1">
        <img class="img" :src="require(`@/assets/fotos/portada/${index}.jpg`)" alt="">
      </div>
      <div class="img-container img-container--2">
        <img class="img" :src="require(`@/assets/fotos/portada/${index}.jpg`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import HeadingSecondary from '@/components/HeadingSecondary'

export default {
  name: 'main-grid',
  props: {
    heading: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  components: {
    HeadingSecondary
  }
}
</script>

<style scoped lang="scss">
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 5rem;

    &:not(:last-child) {
      margin-bottom: 8rem;
    }

    &__col-1 p {
      font-size: 1.8rem;
    }

    &__col-2 {
      display: flex;

      .img-container {
        flex-grow: 1;
      }

      .img-container--1 {
        flex-basis: 40%;
        margin-right: 1.5rem;
      }

      .img-container--2 {
        flex-basis: 60%;
      }

      .img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
