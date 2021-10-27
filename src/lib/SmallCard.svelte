<script>
  import { getContext } from "svelte";

  import { Card, CardBody, CardImg, CardText, CardTitle } from "sveltestrap";
  export let href;
  export let src;
  export let small = false;
  export let title;
  export let text = undefined;
  export let id;
  export let alt;
  export let api = undefined;
  // Responsible for setting the theme
  let currentTheme = getContext("currentTheme");
  let classes = small === true ? "" : "element ";
  classes = classes  + (currentTheme === "light" ? "bg-light" : "bg-dark");
  classes = classes + " custom-card";
</script>

<Card class={classes} id={small == true ? "" : id} {api}>
  <a {href}>
    <CardImg top {src} {alt} />
    <CardBody class={small === true ? "info_card center" : "mod_card center"}>
      <CardTitle class="card_text">{title}</CardTitle>
      {#if text != null}
        <CardText>{text}</CardText>
      {/if}
    </CardBody>
  </a>
</Card>

<style>
  :global(.info_card) {
    height: 60px;
    margin-top: 0;
    padding: 5px 10px 5px 10px;
  }

  :global(.mod_card) {
    height: 72px;
    margin-top: 0;
    padding: 5px 10px 5px 10px;
  }

  :global(.card_text) {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 150%;
  }

  :global(.bg-dark.card) {
    background-color: #121212;
  }

  :global(.dark .custom-card .card-body) {
    background-color: black;
  }

  
</style>
