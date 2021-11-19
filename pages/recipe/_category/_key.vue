<template>
  <div class="container mx-auto tablet:px-0 px-5 mt-5">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-8">
        <div v-if="detail.error">{{ detail.error }}</div>
        <div v-if="detail.loading">
          <div class="animate-pulse flex flex-col space-y-4 justify-center items-center">
            <div class="bg-gray-400 h-8 w-3/4 mb-1"></div>
            <div class="bg-gray-400 h-8 w-2/4 mb-3"></div>
            <div class="bg-gray-400 h-3 w-full mb-1"></div>
            <div class="bg-gray-400 h-3 w-1/2 mb-1"></div>
            <div class="flex items-center space-x-3">
              <div class="bg-gray-400 h-6 w-24"></div>
              <div class="bg-gray-400 h-6 w-24"></div>
              <div class="bg-gray-400 h-6 w-24"></div>
            </div>
            <div class="bg-gray-400 h-3 w-52 mb-5"></div>
            <div class="bg-gray-400 h-96 w-full"></div>
            <div class="flex flex-col space-y-5 mt-5 w-full">
              <div class="flex flex-col space-y-2 w-full">
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-3/4"></div>
              </div>
              <div class="flex flex-col space-y-2 w-full">
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-3/4"></div>
              </div>
              <div class="flex flex-col space-y-2 w-full">
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-full"></div>
                <div class="bg-gray-400 h-3 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="detail.detail">
          <h1 class="text-4xl font-bold text-center text-gray-700">{{ detail.detail.title }}</h1>
          <p class="text-center text-gray-700 my-5 text-md">{{ detail.detail.excerpt }}</p>
          <div class="flex space-x-4 items-center justify-center">
            <div class="flex items-center space-x-1 bg-green-100 rounded py-2 px-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-green-700 text-sm whitespace-nowrap truncate">{{ detail.detail.times }}</span>
            </div>
            <div class="flex items-center space-x-1 bg-green-100 rounded py-2 px-5">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="concierge-bell" class="svg-inline--fa fa-concierge-bell text-green-700 h-5 w-5 fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
              </svg>
              <span class="text-green-700 text-sm whitespace-nowrap truncate">{{ detail.detail.servings }}</span>
            </div>
            <div class="flex items-center space-x-1 bg-green-100 rounded py-2 px-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="text-green-700 text-sm whitespace-nowrap truncate">{{ detail.detail.difficulty }}</span>
            </div>
          </div>
          <p class="text-center text-sm text-gray-700 my-3">
            {{ detail.detail.author.name }} | {{ detail.detail.author.created_at }}
          </p>
          <thumbnail :alt="detail.detail.thumbnail.alt" :src="detail.detail.thumbnail.src" :height="'96'" />
          <p class="text-gray-600 text-sm">{{ detail.detail.thumbnail.alt }}</p>
          <div class="mt-5 text-gray-700 flex flex-col space-y-5 text-md text-justify" v-html="detail.detail.description"></div>
          <h2 class="text-2xl font-bold text-gray-600 my-3">Bahan Tambahan</h2>
          <div class="grid tablet:grid-cols-2 grid-cols-1 gap-4">
            <div v-for="needItem in detail.detail.need_items" :key="needItem.name" class="flex items-start space-x-2 border p-2">
              <img v-bind:src="needItem.image" :alt="needItem.name" class="w-32 h-32" />
              <div class="flex flex-col space-y-1">
                <span class="text-sm text-gray-600">Yang diperlukan</span>
                <span class="text-lg font-bold text-gray-600">{{ needItem.name }}</span>
              </div>
            </div>
          </div>
          <h2 class="text-4xl font-bold text-green-600 my-3">Bahan</h2>
          <ul class="grid tablet:grid-cols-2 grid-cols-1 gap-4">
            <li v-for="(ingredient, i) in detail.detail.ingredients" :key="i" class="flex items-center space-x-2">
              <span class="text-3xl font-bold text-green-500">{{ ingredient.quantity == "" ? 1 : ingredient.quantity }}</span>
              <div v-html="ingredient.ingredient" class="text-gray-700"></div>
            </li>
          </ul>
          <h2 class="text-4xl font-bold text-red-500 my-3">Cara Membuat</h2>
          <ul class="flex flex-col space-y-2">
            <li class="flex space-x-2 justify-start items-start" v-for="(step, i) in detail.detail.steps" :key="i">
              <span class="text-3xl font-bold text-red-500">{{ step.number }}</span>
              <div v-html="step.desc" class="text-gray-700"></div>
            </li>
          </ul>
          <h2 class="text-4xl font-bold text-green-600 my-3">Tags</h2>
          <ul class="flex flex-wrap justify-start items-center gap-2">
            <li v-for="tag in detail.detail.tags" :key="tag.key">
              <router-link :to="`/tag/${tag.key}`" class="bg-green-300 text-center text-sm text-green-900 py-1 rounded px-4">{{ tag.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-4">
        <div v-if="relates.loading">
          <div class="mb-5 animate-pulse">
            <div class="bg-gray-400 h-7 w-1/4"></div>
            <div class="bg-gray-400 h-1"></div>
          </div>
          <div class="flex flex-col mt-5 gap-4 animate-pulse">
            <div class="grid grid-cols-3 gap-2 border" v-for="load in loader" :key="load">
              <div class="col-span-1 bg-gray-400 h-20"></div>
              <div class="col-span-2 pr-2">
                <div class="bg-gray-400 h-5 my-2"></div>
                <div class="bg-gray-400 h-5 my-2 w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="relates.error">{{ relates.error }}</div>
        <div v-if="relates.recipes">
          <title-tag :text="'Resep Terkait'" />
          <div class="flex flex-col gap-4 mt-5">
            <router-link class="grid grid-cols-3 gap-2 border" v-for="(relate, i) in relates.recipes" :key="i" :to="`/recipe/${relate.category}/${relate.slug}`">
              <div class="col-span-1">
                <thumbnail :src="relate.thumbnail" :alt="relate.title" :height="'20'" />
              </div>
              <div class="col-span-2">
                <h2 class="text-lg font-bold text-gray-700 line-clamp-2">{{ relate.title }}</h2>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import Thumbnail from '~/components/Thumbnail.vue'
import TitleTag from '~/components/TitleTag.vue'
import { BASE_URL } from "~/configs/app"

export default {
  components: { Thumbnail, TitleTag },
  async asyncData({ params }) {
    const req = await fetch(`${BASE_URL}/recipe/${params.key}`)
    const post = await req.json()
    return { post }
  },
  data() {
    return {
      loader: [1,2,3,4]
    }
  },
  head() {
    console.log('masuk sini head');
    return {
      title: this.post.title,
      meta: [
        {
          name: 'description',
          content: this.post.excerpt
        },
        {
          name: 'og:title',
          content: this.post.title
        },
        {
          name: 'og:image',
          content: this.post.thumbnail.src
        },
        {
          name: 'og:url',
          name: this.$route.path
        },
        {
          name: 'og:description',
          content: this.post.excerpt
        },
        {
          name: 'keywords',
          content: this.post.tags.map(tag => tag.key).join(',')
        }
      ]
    }
  },
  computed: {
    detail() {
      return this.$store.state.recipe
    },
    relates() {
      return this.$store.state.related
    }
  },
  methods: {
    ...mapActions({
      recipe: 'recipe/recipe',
      getRecipes: 'related/getRecipes'
    })
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('recipe/recipe', null)
      vm.$store.commit('related/recipes', null)
      vm.recipe(to.params.key);
      vm.getRecipes(to.params.category, to.params.key)
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit('recipe/recipe', null)
    this.$store.commit('related/recipes', null)
    this.recipe(to.params.key);
    this.getRecipes(to.params.category, to.params.key)
    next();
  },
  
}
</script>