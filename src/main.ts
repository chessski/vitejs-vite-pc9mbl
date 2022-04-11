import { createApp } from 'vue';
import MainPage from './components/Login.vue';
import router from './router';
import * as Vue from 'vue';
(<any>window).Vue = Vue;

createApp(MainPage).mount('#app');
