<template>
  <div class="hello">
    <div class="article-card">
      <h3>{{ articles }}</h3>
      <p></p>
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
