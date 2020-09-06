<template>
  <v-col cols="12" md="6">
    <v-card color="transparent" flat>
      <v-row dense class="flex-column">
        <v-col class="d-flex justify-center align-center">
          <v-avatar size="200">
            <v-img :src="imagePath(diseniadora.avatar)" />
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
import imageMixin from '@/mixins/images'

export default {
  mixins: [imageMixin],
  props: {
    diseniadora: {
      type: Object,
      required: true
    }
  }
}
</script>
