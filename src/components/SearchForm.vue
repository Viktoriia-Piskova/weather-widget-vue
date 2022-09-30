<template>
  <div class="hello">
    <h1>I'm searching for news about...</h1>
    <form action="" id="searchForm">
      <input type="text" name="query" id="query" placeholder="e.g. animals" />
      <select name="category" id="category">
        <option value="business">business</option>
        <option value="entertainment">entertainment</option>
        <option value="science">science</option>
        <option value="technology">technology</option>
      </select>

      <button id="submit" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

select {
  width: 50%;
  height: 40px;
  padding: 10px;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
