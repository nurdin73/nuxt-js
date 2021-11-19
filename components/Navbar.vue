<template>
  <div class="dark:bg-gray-800 bg-gray-100 z-40 relative">
    <div class="container tablet:mx-auto tablet:px-0 px-5 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold">Resepku</router-link>
        <ul class="flex space-x-4 items-center">
          <li class="group relative">
            <router-link to="/recipes">Resep</router-link>
            <ul class="hidden group-hover:block absolute bg-white border rounded w-48 overflow-hidden right-0 z-50" v-if="recipeCategories">
              <li class="block px-3 py-2 hover:bg-green-700" v-for="item in recipeCategories" :key="item.key"><router-link :to="`/recipe/${item.key}`" class="block">{{ item.title }}</router-link></li>
            </ul>
          </li>
          <li class="group relative">
            <router-link to="/articles">Artikel</router-link>
            <ul class="hidden group-hover:block absolute bg-white border rounded w-48 overflow-hidden right-0 z-50" v-if="articleCategories">
              <li class="block px-3 py-2 hover:bg-green-700" v-for="item in articleCategories" :key="item.key"><router-link :to="`/article/${item.key}`" class="block">{{ item.title }}</router-link></li>
            </ul>
          </li>
          <li class="group relative">
            <router-link to="/products">Produk</router-link>
            <ul class="hidden group-hover:block absolute bg-white border rounded w-48 overflow-hidden right-0 z-50" v-if="productCategories">
              <li class="block px-3 py-2 hover:bg-green-700" v-for="item in productCategories" :key="item.key"><router-link :to="`/product/${item.key}`" class="block">{{ item.title }}</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  computed: {
    articleCategories() {
      return this.$store.state.categoriesArticle.data
    },
    productCategories() {
      return this.$store.state.categoriesProduct.data
    },
    recipeCategories() {
      return this.$store.state.categoriesRecipe.data
    }
  },
  methods: {
    ...mapActions({
      categoriesArticle: 'categoriesArticle/getCategories',
      categoriesProduct: 'categoriesProduct/getCategories',
      categoriesRecipe: 'categoriesRecipe/getCategories',
    })
  },
  mounted() {
    this.categoriesArticle()
    this.categoriesProduct()
    this.categoriesRecipe()
  }
}
</script>