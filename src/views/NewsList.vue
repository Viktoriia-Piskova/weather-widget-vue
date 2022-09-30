<template>
  <div class="home">
    <SearchForm />
    <ArticleCard />
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
      news: null,
    };
  },

  created() {
    SearchNews.getNews()
      .then((response) => {
        this.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
