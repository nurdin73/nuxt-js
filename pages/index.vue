<template>
  <div>
    <router-link to="/about">About</router-link>
    <!-- <ul v-for="article in articles" :key="article.slug">
      <li>{{ article.title }}</li>
    </ul> -->
    <span>{{ this.$store.state.articles.loading }}</span>
    <h1>{{ this.$store.state.articles.error }}</h1>
    <pre>{{ articlesss }}</pre>
    <button @click="tambah({number: 10})">add</button>
    <h1>{{ number }}</h1>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    articlesss() {
      return this.$store.state.articles.data
    },
    number() {
      return this.$store.state.test.no
    }
  },
  methods: {
    // handleClick() {
    //   this.$store.dispatch('test/tambah', {number: 10})
    // }
    ...mapActions({
      tambah: 'test/tambah',
      getArticles: 'articles/getArticles',
      categories: 'categories/getCategories'
    })
  }, 
  mounted() {
    this.getArticles()
    this.categories()
  }
  // created() {
  //   // this.$store.dispatch('getArticles')
  //   this.getArticles()
  // }
}
</script>
