<script>
  import { currentPageTheme } from "../routes/__layout.svelte";

  import { Card, CardBody, CardImg, CardText, CardTitle } from "sveltestrap";
  export let href;
  export let src;
  export let small = false;
  export let title;
  export let text = undefined;
  export let id;
  export let alt;
  export let cf_id = undefined;
  // Responsible for setting the theme
  let currentTheme;
  currentPageTheme.subscribe((value) => (currentTheme = value));
  let classes = small === true ? "" : "element ";
  classes = classes + (currentTheme === "light" ? "bg-light" : "bg-dark");
  classes = classes + " custom-card";
  let imgcss = "border-top-left-radius:20px;border-top-right-radius:20px;";
  let bodycss =
    "border-bottom-left-radius:20px;border-bottom-right-radius:20px;";
</script>

<Card
  class={classes}
  id={small == true ? "" : id}
  {cf_id}
  style="border-radius:20px;"
>
  <a {href} target="_blank">
    <CardImg top {src} {alt} style={imgcss} />

    <CardBody
      class={small === true ? "info_card center" : "mod_card center"}
      style={bodycss}
    >
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
