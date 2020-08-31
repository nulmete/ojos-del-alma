<template>
  <v-col cols="6">
    <v-card color="transparent" flat tile>
      <v-row dense class="flex-column">
        <v-col class="d-flex justify-center align-center">
          <v-avatar size="165">
            <v-img :src="diseniadora.avatar" />
          </v-avatar>
        </v-col>
        <v-col>
          <v-card-title class="justify-center">
            {{ diseniadora.name }}
          </v-card-title>
          <v-card-subtitle class="text-center text-uppercase">
            {{ diseniadora.job }}
          </v-card-subtitle>
          <v-card-text class="text-center">
            {{ diseniadora.profile }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    diseniadora: {
      type: Object,
      required: true
    }
  }
}
</script>
