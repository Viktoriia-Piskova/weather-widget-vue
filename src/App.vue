<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <svg
          id="svg7"
          width="5em"
          height="auto"
          version="1.1"
          viewBox="-3 -119 374 412"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="kopimi"
            fill="#fff"
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="6"
          >
            <path
              d="m0 0 41 29 41-29-41-29zm41 29 41 29 41-29-41-29zm41 29 41 29 41-29-41-29zm41 29 41 29 41-29-41-29zm41 29 41 29 41-29-41-29zm-41-87 41 29 41-29-41-29zm82 0 41 29 41-29-41-29zm82 0 41 29 41-29-41-29zm-164-58 41 29 41-29-41-29zm0-58 41 29 41-29-41-29z"
            />
            <path
              d="m0 0v145l205 145v-145zm205 290 41-29v-145l-41 29m-82-174 41-29-41-29zm0 58 41-29-41-29zm41-29 41 29v-58zm0-58 41 29v-58zm0 116 82 58v87l41-29 41 29 41-29v-145l-41 29-41-29-41 29-41-29z"
              fill="#000"
            />
          </g>
        </svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Main</router-link>
          <router-link to="/subscribe" class="nav-link">Subscribe</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
body {
  background-color: rgba(36, 36, 36, 0.19);
}

body * {
  box-sizing: border-box;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  height: 40px;
  width: 50%;
  border: 1px solid grey;
  padding: 10px;
}

input:focus {
  border: 3px solid #303031;
  background-color: white;
}

button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  height: auto;
  width: auto;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
form {
  width: 50%;
  margin: auto;
}

button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
  appearance: none;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #252525;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
input.error,
select.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  margin-right: 0.5rem;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
}
[type="text"]:focus,
[type="number"]:focus,
[type="search"]:focus,
[type="password"]:focus {
  border-color: #252525;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
.error {
  border: 1px solid red;
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #190602;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}
.field {
  margin-bottom: 24px;
}
.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button + .button {
  margin-left: 1em;
}
.button.-fill-gradient {
  background: linear-gradient(to right, rgb(34, 34, 34), rgb(0, 0, 0));
  color: #ffffff;
}
.button.-fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}

.nav-link {
  font-size: 2rem;
  margin: 20px;
}
</style>
