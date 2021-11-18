<template>
  <div>
    <div class="bg-gradient-to-b from-green-800 to-green-500 h-64 flex flex-col justify-center items-center">
      <h1 class=" text-4xl font-bold uppercase text-gray-100 text-center">Cari Resepnya & <br> Dapatkan Hati Keluarga</h1>
      <form action="#" class="relative mt-4">
        <input type="text" name="search" id="search" class="text-gray-700 px-5 py-2 text-lg outline-none w-96">
        <button class="bg-red-500 px-5 py-2 text-lg text-white" type="submit">Search</button>
      </form>
    </div>

    <div class="container mx-auto tablet:px-0 py-5">
      <div class="grid grid-cols-12 gap-4 mt-5">
        <div class="col-span-8">
          <ul v-if="categoriesRecipe" class="flex gap-4 flex-wrap mb-5">
            <li v-for="item in categoriesRecipe" :key="item.key" class="whitespace-nowrap text-center bg-gradient-to-br from-green-600 to-green-500 px-4 py-2 flex-auto text-white">
              <router-link :to="`/recipe/${item.key}`" class="block">{{ item.title }}</router-link>
            </li>
          </ul>
          <title-tag :text="'Postingan Terbaru'" />
          <div class="grid grid-cols-3 gap-4 mt-5">
            <post v-for="article in articles" :key="article.key" :data="article" :type="article.category == 'resep' ? 'recipe' : 'article'" />
          </div>
        </div>
        <div class="col-span-4">
          <title-tag :text="'Posingan Unggulan'" />
          <ul v-if="features" class="my-5 flex flex-col gap-4">
            <li v-for="feature in features" :key="feature.slug"><router-link :to="`/${feature == 'resep' ? 'recipe' : 'article'}/${feature.category}/${feature.slug}`" class="text-lg font-bold text-gray-700 leading-4">{{ feature.title }}</router-link></li>
          </ul>
          <title-tag :text="'Brand'" />
          <ul class="grid grid-cols-3 gap-4 my-5">
            <li v-for="brand in brands" :key="brand.name" class="border bg-green-700">
              <a :href="brand.url" target="_blank" rel="noopener noreferrer" class="flex flex-col justify-center items-center">
                <img v-bind:src="brand.image" :alt="brand.name" class="object-cover h-12 w-max">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Post from '~/components/Post.vue'
import TitleTag from '~/components/TitleTag.vue'
export default {
  components: { TitleTag, Post },
  head() {
    return {
      title: "Home"
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles.data
    },
    number() {
      return this.$store.state.test.no
    },
    categoriesRecipe() {
      return this.$store.state.categoriesRecipe.data
    },
    features() {
      return this.$store.state.featured.data
    },
    brands() {
      return this.$store.state.brands.data
    }
  },
  methods: {
    // handleClick() {
    //   this.$store.dispatch('test/tambah', {number: 10})
    // }
    ...mapActions({
      tambah: 'test/tambah',
      getArticles: 'articles/getArticles',
      featured: 'featured/featured',
      getBrands: 'brands/getBrands'
    })
  }, 
  created() {
    this.getArticles()
    this.featured()
    this.getBrands()
  }
  // created() {
  //   // this.$store.dispatch('getArticles')
  //   this.getArticles()
  // }
}
</script>
