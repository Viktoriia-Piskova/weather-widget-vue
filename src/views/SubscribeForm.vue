<template>
  <div class="about">
    <h1>This project is made for you to stay updatet</h1>
  </div>
  <div>
    <h2>Subscribe to receive more news</h2>
    <form>
      <h3>Your personal data</h3>

      <label>Name</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Name"
        class="field"
      />

      <label>Email</label>
      <input
        v-model="event.email"
        type="text"
        placeholder="email"
        class="field"
      />

      <label>Select a category</label>
      <select v-model="event.category">
        Select a category
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>What country are you interested in?</h3>

      <label>Country</label>
      <input
        v-model="event.country"
        type="text"
        placeholder="Country"
        class="field"
      />

      <h3>Would you like to receive our promo emails?</h3>
      <div>
        <input type="radio" v-model="event.promo" :value="1" name="promo" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.promo" :value="0" name="promo" />
        <label>No</label>
      </div>

      <h3>Extra emails</h3>
      <div>
        <input type="checkbox" v-model="event.extras.daily" class="field" />
        <label>Daily</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.weekly" class="field" />
        <label>Weekly</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.monthly" class="field" />
        <label>Monthly</label>
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["business", "entertainment", "science", "technology"],
      event: {
        category: "technology",
        name: "",
        email: "",
        country: "",
        promo: 1,
        extras: {
          daily: false,
          weekly: false,
          monthly: false,
        },
      },
    };
  },
};
</script>

<style scoped></style>
