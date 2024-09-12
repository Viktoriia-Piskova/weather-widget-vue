<template>
  <div class="article-card">
    <div class="photo-container">
      <img
        class="photo"
        :src="article.urlToImage"
        alt=""
        onerror="this.src='https://via.placeholder.com/728x500.png?text=Could+not+find+image%20'"
      />
    </div>

    <div class="article-content">
      <h3 class="title">{{ article.title }}</h3>
      <p class="description">{{ article.description }}</p>
      <p class="content">{{ article.content }}</p>
      <p class="additional-info">
        <a class="more-info" :href="article.url">Read more...</a>
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
  margin: 40px;
  box-shadow: #33343582 1px 1px 14px;
  background-color: #fff;
}

.article-card:nth-child(even) {
  flex-direction: row-reverse;
}
.photo-container {
  width: 50%;
  object-fit: none;
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
  font-weight: 600;
  font-size: 18px;
  padding: 20px;
}

.content {
  font-weight: 400;
  font-size: 16px;
  padding: 20px;
}

.additional-info {
  font-size: smaller;
  color: rgb(77, 75, 75);
  font-style: italic;
}

.more-info {
  display: inline-block;
  font-size: 27px;
  padding: 21px;
  color: #aea8a8;
}

.title {
  font-size: 30px;
  background-image: linear-gradient(
    to right,
    rgba(55, 56, 57, 0.97),
    rgb(0, 0, 0)
  );
  color: #dcd7d7;
  padding: 25px 20%;
  width: 140%;
  transform: translate(0px, -10px);
}

@media only screen and (max-width: 1000px) {
  .title {
    padding: 20px;
    width: 100%;
    transform: none;
  }
  .article-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  .article-card {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    align-items: stretch;
    justify-content: space-around;
    margin: 30px 0px;
    box-shadow: #33343582 1px 1px 14px;
    background-color: #fff;
  }

  .article-card:nth-child(even) {
    flex-direction: column;
  }
  .photo-container {
    width: 100%;
    object-fit: none;
  }
  .content {
    display: none;
  }
}
</style>
