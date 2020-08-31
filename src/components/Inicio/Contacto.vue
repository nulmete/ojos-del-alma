<template>
  <v-container>
    <h2 class="text-h4 text-uppercase mb-6">Contacto</h2>

    <v-card class="pa-4">
      <v-card-title class="mb-3">
        <h3 class="text-h6">¡Envianos un mensaje!</h3>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field color="light-green darken-4" outlined clearable label="Nombre" v-model="name" prepend-icon="mdi-account" :rules="nameRule"></v-text-field>
          <v-text-field color="light-green darken-4" outlined clearable label="Correo electrónico" v-model="email" prepend-icon="mdi-email" :rules="emailRule"></v-text-field>
          <v-textarea color="light-green darken-4" outlined label="Mensaje" v-model="message" prepend-icon="mdi-pencil" :rules="messageRule"></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          x-large
          color="amber darken-4"
          class="white--text"
          :disabled="!valid"
          @click="validate"
        >
          Enviar mensaje
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'contacto',
  data () {
    return {
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
      valid: true
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>
