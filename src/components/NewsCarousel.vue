<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img :src="images[0]" id="img1" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img :src="images[1]" id="img2" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="images[2]" id="img3" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://images.wsj.net/im-636192/social",
        "https://image.cnbcfm.com/api/v1/image/107125171-1664297547498-nys.jpg?v=1664890983&w=1920&h=1080",
        "https://s.yimg.com/os/creatr-uploaded-images/2022-10/8e1cec50-43c2-11ed-af67-9481692c9ed7",
      ],
    };
  },
  name: "NewsCarousel",
  props: {
    topThreeArticles: {
      //type: Array,
      //required: true,
    },
  },
};
</script>

<style scoped>
#carouselExampleDark {
  height: 50vh;
  overflow: hidden;
}

#img1,
#img2,
#img3 {
  object-fit: cover;
}

.carousel-item {
  width: 100%;
  height: 100%;
}

.carousel-inner {
  height: 100%;
}

h5 {
  color: #fff;
  font-size: 7rem;
}

p {
  color: #fff;
  font-size: 2rem;
}

img {
  filter: grayscale(100%);
}
</style>
