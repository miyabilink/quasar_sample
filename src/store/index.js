import { createStore } from 'vuex'
import sample from './module-sample'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function () {
  return createStore({
    modules: {
      sample
    },

    strict: process.env.DEBUGGING
  })
}
