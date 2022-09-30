<template>
  <div class="hello">
    <div class="article-card">
      <h3>{{ articles }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>
