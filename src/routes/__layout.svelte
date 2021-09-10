<script>
import { setContext } from "svelte";

import { writable } from "svelte/store";


  let currentTheme = writable("light");
  setContext("current-theme", currentTheme);
</script>
<script context="module">
  export function httpGetElement(element, theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(element, xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send();
  }

  export function httpGet(url , callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
  }
</script>
<slot></slot>
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

  :global(.card a){
    text-decoration: none;
  }

  :global(.card-body){
    font-size: 0.75rem;
  }

  :global(.center.card-body){
    text-align: center;
  }

  :global(.card.bg-dark a){
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