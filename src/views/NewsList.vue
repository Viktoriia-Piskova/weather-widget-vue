<template>
  <div class="home">
    <SearchForm />
    <ArticleCard :articles="articles" />
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
        this.articles = Array.from(this.articles);
        console.log(typeof this.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
