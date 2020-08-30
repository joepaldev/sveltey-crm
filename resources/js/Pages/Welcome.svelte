<script>
  import { InertiaLink } from '@inertiajs/inertia-svelte'
  import Layout from '@/Shared/Layout.svelte'
</script>

<Layout title="Dashboard">
  <h1 class="mb-8 font-bold text-3xl">Dashboard</h1>
  <p class="mb-8 leading-normal">
    Hey there! This is just a demo of how Welcome page would load using
    <a class="text-indigo-500 underline hover:text-orange-600" href="https://inertiajs.com">
      Inertia.js
    </a>
    works.
  </p>
  <div class="mb-8 flex">
    <InertiaLink class="btn-indigo" href="/500">500 error</InertiaLink>
    <InertiaLink class="btn-indigo ml-1" href="/404">404 error</InertiaLink>
  </div>
</Layout>
