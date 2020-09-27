<template>
  <v-footer class="py-16 grey darken-4 white--text contact-footer" v-if="$route.path !== '/proyectos'">
    <v-container>
      <v-row class="justify-center mb-16">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 font-weight-light mb-6">Contáctenos</h2>
        </v-col>

        <v-col cols="12" v-if="sent" class="d-flex justify-center mb-3">
          <span :class="[error ? 'error' : 'light-green darken-4', 'message white--text px-4 py-2']">{{ sendEmailRes }}</span>
        </v-col>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                dark
                clearable
                label="Nombre"
                v-model="name"
                prepend-icon="mdi-account"
                :rules="nameRule"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                dark
                clearable
                label="Correo electrónico"
                v-model="email"
                prepend-icon="mdi-email"
                :rules="emailRule"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                dark
                label="Mensaje"
                v-model="message"
                prepend-icon="mdi-pencil"
                :rules="messageRule"
              />
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn
                x-large
                :loading="isSending"
                outlined
                dark
                :disabled="!valid"
                @click="validate"
              >
                Enviar mensaje
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" class="d-flex justify-center">
          <v-img :src="imagePath('/logo.png')" max-width="150"></v-img>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-center align-center social">
          <v-btn
            v-for="social in socials"
            :key="social.to"
            class="white--text"
            icon
            :href="social.to"
          >
            <v-icon size="26px">{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import axios from 'axios'
import imageMixin from '@/mixins/images'

export default {
  name: 'Footer',
  mixins: [imageMixin],
  data () {
    return {
      socials: [
        {
          icon: 'mdi-facebook',
          to: 'https://www.facebook.com/ojosdelalma.paisajistas.3'
        },
        {
          icon: 'mdi-instagram',
          to: 'https://www.instagram.com/ojosdelalma2020/?hl=es-la'
        }
      ],
      name: '',
      nameRule: [
        v => !!v || 'Es necesario que ingreses tu nombre.',
        v => v.length >= 2 || 'Ingresá al menos 2 caracteres.'
      ],
      email: '',
      emailRule: [
        v => !!v || 'Es necesario que ingreses tu dirección de correo electrónico.',
        v => /.+@.+/.test(v) || 'La dirección de correo electrónico no es válida. Asegurate de que tenga un formato como este: ejemplo@email.com'
      ],
      message: '',
      messageRule: [
        v => !!v || 'Es necesario que ingreses un mensaje.',
        v => v.length >= 10 || 'Ingresá al menos 10 caracteres.'
      ],
      valid: true,
      isSending: false,
      sent: false,
      error: false,
      sendEmailRes: ''
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.isSending = true

        axios
          .post('https://mu68lsh7gf.execute-api.us-east-1.amazonaws.com/prod/mail', {
            email: this.email,
            subject: 'Nuevo e-mail | ' + this.name,
            text: this.message
          })
          .then(res => {
            this.isSending = false
            this.sent = true
            this.error = false
            this.sendEmailRes = 'Su mensaje ha sido enviado!'
            this.$refs.form.resetValidation()
            this.name = ''
            this.email = ''
            this.message = ''
          })
          .catch(err => {
            this.isSending = false
            this.sent = true
            this.error = true
            this.sendEmailRes = 'Error al enviar el mensaje.'
            console.warn(err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .message {
    border-radius: 4px;
  }
</style>
