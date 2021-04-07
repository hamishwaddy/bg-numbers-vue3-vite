import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";

export default createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: false,
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  }
})
