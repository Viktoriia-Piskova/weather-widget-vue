<template>
  <div class="hello">
    <div class="article-card">
      <h3>{{ article.title }}</h3>
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
