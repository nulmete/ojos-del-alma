<template>
  <div class="inicio">
    <hero :hero-heading="heroHeading" />
    <section class="por-que container">
      <main-grid :heading="heading" :text="text" :index="1" />
    </section>
    <section class="testimonios">
      <heading-secondary :style="{ textAlign: 'center' }">
        Testimonios
      </heading-secondary>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in testimonios"
          :key="i"
          :src="item.src"
        >
          <p class="text">
            "{{ item.text }}"
          </p>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section class="contacto container">
      <heading-secondary :style="{ textAlign: 'center' }">
        Contacto
      </heading-secondary>
      <div>
        <div class="contacto__group">
          <form action="#" class="contacto__form">
            <h4 class="contacto__form-heading">¡Envianos un mensaje!</h4>
            <div class="contacto__form-wrapper">
              <div class="contacto__form-group">
                <label for="nombre" class="contacto__form-label">Nombre</label>
                <input type="text" id="nombre" class="contacto__form-input">
              </div>
              <div class="contacto__form-group">
                <label for="email" class="contacto__form-label">E-mail</label>
                <input type="text" id="email" class="contacto__form-input">
              </div>
              <div class="contacto__form-group">
                <label for="mensaje" class="contacto__form-label">Mensaje</label>
                <textarea name="mensaje" id="mensaje" class="contacto__form-textarea"></textarea>
              </div>
            </div>
            <button class="contacto__form-btn">
              Enviar
            </button>
          </form>
        </div>
        <div class="contacto__group contacto__group--social">
          <div class="contacto__icon-container">
            <img src="../assets/facebook.svg" alt="Facebook" class="contacto__icon">
          </div>
          <div class="contacto__icon-container">
            <img src="../assets/instagram.svg" alt="Instagram" class="contacto__icon">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import MainGrid from '@/components/MainGrid'
import HeadingSecondary from '@/components/HeadingSecondary'

export default {
  name: 'inicio',
  components: {
    Hero,
    MainGrid,
    HeadingSecondary
  },
  data () {
    return {
      heroHeading: 'Quien no planta el jardín en su interior, no planta jardines en el exterior y tampoco pasea por ellos',
      heading: 'Por qué "5 Sentidos"',
      text: 'Porque te proponemos mejorar tu vida. Darle oxígeno a tus pulmones, música de hojas que se mecen al compás del viento, admirar la indescriptible belleza de la flor que extiende por primera vez sus pétalos al recibir el calor del sol, deleitar tu paladar con un fruto de tu propio jardín, inspirar el aroma que te atrapa, te hace cerrar los ojos y respirar profundo para colmar tu alma, acariciar tu piel con el roce de tus pies sobre el pasto fresco en el atardecer de tus días. 5 Sentidos construye una nueva versión de ti.',
      testimonios: [
        {
          src: require('../assets/fotos/portada/1.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        },
        {
          src: require('../assets/fotos/portada/2.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        },
        {
          src: require('../assets/fotos/portada/3.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        },
        {
          src: require('../assets/fotos/portada/4.jpg'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique nisi asperiores eligendi, natus quis itaque eveniet voluptatum nam dolores voluptates ducimus repellendus minima quia.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .por-que {
    padding-top: 12rem;
    padding-bottom: 6rem;
  }

  .testimonios {
    padding-top: 6rem;

    .text {
      text-align: center;
      letter-spacing: 2px;
      line-height: 1.3;
      font-size: 2rem;
      padding: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0,0,0,.5);
      color: $color-white;
    }
  }

  .contacto {
    padding-top: 6rem;
    padding-bottom: 6rem;

    &__group--social {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__icon-container:not(:last-child) {
      margin-right: 1.6rem;
    }

    &__icon {
      display: block;
      width: 4rem;
      height: 4rem;
    }

    &__group {
      margin: 0 auto;
      max-width: 70vw;
    }

    &__group:not(:last-child) {
      margin-bottom: 7rem;
    }

    &__heading {
      color: $color-text;
      font-size: 1.6rem;
    }

    &__form {
      background: #fafafa;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
      padding: 3rem;
    }

    &__form-wrapper {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 3rem;
    }

    &__form-group:last-of-type {
      grid-column: 1 / -1;
    }

    &__form-heading {
      color: $color-text;
      font-size: 1.6rem;
      margin-bottom: 3rem;
      text-align: center;
    }

    &__form-label,
    &__form-input,
    &__form-textarea {
      display: block;
      font-size: 1.6rem;
    }

    &__form-input,
    &__form-textarea {
      border: 1px solid #c0c0c0;
      border-radius: 0 2px 4px rgba(0, 0, 0, .25);
      color: $color-text;
      font-family: inherit;
      padding: 1.2rem 1.5rem;
      width: 100%;
    }

    &__form-input:focus,
    &__form-input:active,
    &__form-textarea:focus,
    &__form-textarea:active {
      outline-color: $color-secondary;
    }

    &__form-textarea {
      height: 10rem;
      resize: none;
    }

    &__form-btn {
      backface-visibility: hidden;
      background: $color-secondary;
      border: none;
      border-radius: 4px;
      color: $color-white;
      cursor: pointer;
      display: inline-block;
      font-family: inherit;
      font-size: 1.6rem;
      padding: 1.5rem 2rem;
      text-transform: uppercase;
      transition: all .2s;
    }

    &__form-btn:hover {
      transform: translateY(-2px);
    }
  }
</style>
