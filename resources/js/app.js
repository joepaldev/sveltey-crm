//require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-svelte'
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Svelte and other libraries. It is a great starting point when
 * building robust, powerful web applications using Svelte and Laravel.
 */

// (the followign bootstrap require not needed for svelte

// TODO how to fix login routes (basic svelte components) to use inertia
// import App from "./components/App.svelte";
//
//const app = new App({
//  target: document.body
//});

//window.app = app;
// export default app;
//

// let app = document.getElementById('app')

const app = document.getElementById('app')

new InertiaApp({
  target: app,
  props: {
    initialPage: JSON.parse(app.dataset.page),
    resolveComponent: name =>
     /* require(`./Pages/${name}.svelte`).default,*/
    import(`./Pages/${name}.svelte`).then(module => module.default),
  }
})
