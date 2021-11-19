<template>
  <div>
    <search />
    <div class="container mx-auto tablet:px-0 py-5">
      <div class="grid grid-cols-12 gap-4 mt-5">
        <div class="col-span-8">
          <div v-if="latests.loading">
            <div class="mb-5 animate-pulse">
              <div class="bg-gray-400 h-7 w-1/4"></div>
              <div class="bg-gray-400 h-1"></div>
            </div>
            <ul class="grid grid-cols-3 gap-4">
              <li class="animate-pulse" v-for="load in loader" :key="load">
                <div class="bg-gray-400 h-36 mb-2"></div>
                <div class="bg-gray-400 h-4 mb-2"></div>
                <div class="bg-gray-400 h-4 w-1/2"></div>
              </li>
            </ul>
          </div>
          <div v-if="latests.data">
            <title-tag :text="'Postingan Terbaru'" />
            <div class="grid grid-cols-3 gap-4 mt-5">
              <post v-for="latest in latests.data" :key="latest.key" :data="latest" :type="latest.category == 'resep' ? 'recipe' : 'article'" />
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div v-if="features.loading">
            <div class="mb-5 animate-pulse">
              <div class="bg-gray-400 h-7 w-1/4"></div>
              <div class="bg-gray-400 h-1"></div>
            </div>
            <ul class="flex flex-col gap-4 mb-5">
              <li v-for="load in loader" :key="load" class="animate-pulse">
                <div class="bg-gray-400 h-5"></div>
              </li>
            </ul>
          </div>
          <div v-if="features.data">
            <title-tag :text="'Postingan Unggulan'" />
            <ul class="my-5 flex flex-col gap-4">
              <li v-for="feature in features.data" :key="feature.slug"><router-link :to="`/${feature.category == 'resep' ? 'recipe' : 'article'}/${feature.category}/${feature.slug}`" class="text-lg font-bold text-gray-700 leading-4">{{ feature.title }}</router-link></li>
            </ul>
          </div>
          <div v-if="brands.loading">
            <div class="mb-5 animate-pulse">
              <div class="bg-gray-400 h-7 w-1/4"></div>
              <div class="bg-gray-400 h-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="animate-pulse" v-for="load in loader" :key="load">
                <div class="bg-gray-400 h-10"><span class="sr-only">Loading</span></div>
              </div>
            </div>
          </div>
          <div v-if="brands.data">
            <title-tag :text="'Merek'" />
            <ul class="grid grid-cols-3 gap-4 my-5">
              <li v-for="(brand, index) in brands.data" :key="index" class="border bg-green-700">
                <a :href="brand.url" target="_blank" rel="noopener noreferrer" class="flex flex-col justify-center items-center">
                  <img v-bind:src="brand.image" :alt="brand.name" class="object-cover h-12 w-max">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  head() {
    return {
      title: "Home"
    }
  },
  data() {
    return {
      loader: [0,1,2,3,4]
    }
  },
  computed: {
    latests() {
      return {
        loading: this.$store.state.latest.loading,
        data: this.$store.state.latest.latests,
        error: this.$store.state.latest.error,
      }
    },
    features() {
      return {
        loading: this.$store.state.featured.loading,
        data: this.$store.state.featured.data,
        error: this.$store.state.featured.error
      }
    },
    brands() {
      return {
        loading: this.$store.state.brands.loading,
        data: this.$store.state.brands.data,
        error: this.$store.state.brands.error
      }
    }
  },
  methods: {
    ...mapActions({
      tambah: 'test/tambah',
      getAll: 'latest/getAll',
      featured: 'featured/featured',
      getBrands: 'brands/getBrands'
    })
  }, 
  created() {
    this.getAll()
    this.featured()
    this.getBrands()
  }
  // created() {
  //   // this.$store.dispatch('getArticles')
  //   this.getArticles()
  // }
}
</script>
