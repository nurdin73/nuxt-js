<template>
  <div>
    <div class="bg-gradient-to-b from-green-800 to-green-500 h-64 flex flex-col justify-center items-center">
      <h1 class=" text-4xl font-bold uppercase text-gray-100 text-center">Cari Resepnya & <br> Dapatkan Hati Keluarga</h1>
      <form action="#" class="relative mt-4" @submit="handleSearch">
        <input type="text" v-model="value" name="search" id="search" class="text-gray-700 px-5 py-2 text-lg outline-none w-96">
        <button class="bg-red-500 px-5 py-2 text-lg text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSearch(e) {
      e.preventDefault();
      this.$router.push({ path: 'search', query: { key: this.value } })
    }
  },
  data() {
    return {
      value: null
    }
  },
}
</script>