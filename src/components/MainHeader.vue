<template>
  <header class="header">
    <div class="container">
      <div class="header__logo-box">
        <img src="../assets/lyl.png" alt="Cinco Sentidos" class="header__logo">
      </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <router-link to="/" class="header__nav-link">Inicio</router-link>
          </li>
          <li class="header__nav-item header__nav-item--sub">
            <router-link to="/jardines" class="header__nav-link">Jardines</router-link>
            <span class="header__nav-arrow">&#709;</span>
            <ul class="header__nav-list header__nav-list--col">
              <li class="header__nav-item header__nav-item--subitem">
                <router-link to="/proyectos" class="header__nav-link">Proyectos</router-link>
              </li>
              <li class="header__nav-item header__nav-item--subitem">
                <router-link to="/etapas" class="header__nav-link">Etapas</router-link>
              </li>
              <li class="header__nav-item header__nav-item--subitem">
                <router-link to="/medios" class="header__nav-link">Medios</router-link>
              </li>
            </ul>
          </li>
          <li class="header__nav-item">
            <router-link to="/diseniadoras" class="header__nav-link">Las diseñadoras</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/contacto" class="header__nav-link">Contacto</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    background: rgba(0,0,0,.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .container {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
    }

    &__logo-box {
      margin-right: auto;
    }

    &__logo {
      display: block;
      height: 6rem;
    }

    &__nav {
      font-size: 1.6rem;

      &-list {
        display: flex;
        align-items: center;
        list-style: none;

        &--col {
          position: absolute;
          z-index: 200;
          left: 0;
          top: 100%;
          padding: 1rem 0;
          background-color: rgba(0,0,0,.9);
          flex-direction: column;
          align-items: flex-start;
          transform-origin: top;
          transform: scale(1, 0);
          transition: all .2s;
        }
      }

      &-item:not(:last-child) {
        margin-right: 1.5rem;
      }

      &-item {
        padding: 1rem;
        transition: all .2s;

        &:hover {
          background-color: rgba($color-white, .25);
        }

        &--sub {
          position: relative;
        }

        &--subitem {
          width: 100%;
          margin: 0 !important;
        }
      }

      &-item--sub:hover &-list--col {
        transform: scale(1, 1);
      }

      &-link {
        display: inline-block;
        color: $color-white;
        text-decoration: none;
        text-transform: uppercase;
      }

      &-arrow {
        color: $color-white;
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }
</style>
