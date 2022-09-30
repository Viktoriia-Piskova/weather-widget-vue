<template>
  <div class="home">
    <SearchForm />
    <ArticleCard
      :article="article"
      v-for="article in articles"
      :key="article"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue";
import SearchNews from "@/services/SearchNews";
import ArticleCard from "@/components/ArticleCard.vue";

export default {
  name: "NewsList",
  components: {
    SearchForm,
    ArticleCard,
  },
  data() {
    return {
      articles: null,
    };
  },

  created() {
    SearchNews.getNews()
      .then((response) => {
        this.articles = response.data.articles;
        console.log(this.articles);
        //this.articles = JSON.parse(this.articles);
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
