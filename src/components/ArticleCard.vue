<template>
  <div class="hello">
    <div class="article-card">
      <h3>{{ news }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    news: {
      type: String,
      required: true,
    },
  },
};
</script>
