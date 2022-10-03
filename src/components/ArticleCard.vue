<template>
  <div class="hello">
    <div class="article-card">
      <h3>{{ article.title }}</h3>
      <img class="photo" :src="article.urlToImage" alt="" />
      <p>{{ article.description }}</p>
      <p>{{ article.content }}</p>
      <p class="additional-info">
        <span>{{ article.author }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      //type: Array,
      required: true,
    },
  },
};
</script>
