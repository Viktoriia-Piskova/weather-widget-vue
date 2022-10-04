<template>
  <div class="article-card">
    <div class="photo-container">
      <img class="photo" :src="article.urlToImage" alt="" />
    </div>

    <div class="article-content">
      <h3 class="title">{{ article.title }}</h3>
      <p class="description">{{ article.description }}</p>
      <p class="content">{{ article.content }}</p>
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

<style>
.article-card {
  display: flex;
  /* flex-wrap: wrap; */
  align-items: stretch;
  justify-content: space-around;
  border: 1px gray solid;
  margin: 20px;
  box-shadow: #052653 5px 5px 14px;
}

.article-card:nth-child(even) {
  flex-direction: row-reverse;
}
.photo-container {
  width: 50%;
  object-fit: none;
  box-shadow: #052653 5px 5px 14px;
}

.photo {
  height: 100%;
}

.article-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 20px;
}

.description {
  font-style: italic;
  padding: 20px;
}

.content {
  font-weight: 600;
  padding: 20px;
}

.additional-info {
  font-size: smaller;
  color: rgb(77, 75, 75);
  font-style: italic;
}

.title {
  font-size: 2rem;
  background-image: linear-gradient(to right, rgb(22 39 192), rgb(0, 0, 0));
  color: white;
  padding: 20px;
  width: 100%;
}
</style>
