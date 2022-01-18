<script context="module">
  import { writable } from "svelte/store";

  export async function httpGet(url, callback) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => console.log(error));
  }

  export const currentPageTheme = writable("light");
</script>

<slot />

<style>
  :global(.container) {
    max-width: 1140px;
  }

  :global(body:not(.dark)) {
    background-color: azure;
  }

  :global(body.dark) {
    background-color: #003c3c;
    color: white;
  }

  :global(.card a) {
    text-decoration: none;
  }

  :global(.card-body) {
    font-size: 0.75rem;
  }

  :global(.center.card-body) {
    text-align: center;
  }

  :global(.card.bg-dark a) {
    color: white;
  }

  :global(.card:hover) {
    transform: scale(1.05);
  }

  :global(.card) {
    margin: 10px;
    border-radius: 5px;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
  }
</style>
