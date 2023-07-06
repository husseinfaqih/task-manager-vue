<template>
  <header>
    <h1 class="text-2xl font-bold">{{ title }}</h1>
  </header>
</template>

<script>
/**
 * HeaderComponent represents the header component of the application.
 * It displays the provided title.
 */
export default {
  name: 'HeaderComponent',
  props: {
    /**
     * The title to be displayed in the header.
     */
    title: String,
  },
}
</script>

<style >

</style>
