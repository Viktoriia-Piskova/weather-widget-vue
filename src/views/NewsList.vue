<template>
  <div class="home">
    <NewsCarousel />
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
import NewsCarousel from "@/components/NewsCarousel.vue";

export default {
  name: "NewsList",
  components: {
    SearchForm,
    ArticleCard,
    NewsCarousel,
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
