
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/*Importamos bootstrap aqui */
import 'bootstrap/dist/css/bootstrap.min.css'
//importamos pinia
import { createPinia } from 'pinia'
//*********************************** */

const app = createApp(App);

//llamamos a la importacion de pinia
const pinia = createPinia();
//****************************** */
app.use(router);
//usamos pinia
app.use(pinia);
//************** */
app.mount('#app');
