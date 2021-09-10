<script>
  import { getContext, onMount } from "svelte";

  const STORAGE_KEY = "theme";
  const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

  const THEMES = {
    DARK: "dark",
    LIGHT: "light",
  };
  let currentTheme = getContext('current-theme');
  //$: $currentTheme = () => window.matchMedia(DARK_PREFERENCE).matches;

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  export function applyTheme() {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;

    currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

    if (currentTheme === THEMES.DARK) {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    }
    switchCardColor();
    switchLogo();
    return "";
  }

  function toggleTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(
        STORAGE_KEY,
        prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
      );
    }

    applyTheme();
  }

  let label = "Dark Theme";
  let fontSize = 20;

  let checked = true;

  const uniqueID = Math.floor(Math.random() * 100);

  function handleClick(event) {
    const target = event.target;

    const state = target.getAttribute("aria-checked");

    checked = state === "true" ? false : true;
    toggleTheme();
  }

  export function switchCardColor() {
    var elements = document.getElementsByClassName("card");
    Array.from(elements).forEach((element) => {
      if (currentTheme === THEMES.DARK) {
        element.classList.toggle("bg-light", false);
        element.classList.toggle("bg-dark", true);
      } else {
        element.classList.toggle("bg-light", true);
        element.classList.toggle("bg-dark", false);
      }
    });
    return "";
  }

  function switchLogo() {
    var element = document.getElementById("github");
    if (element != null) {
      if (currentTheme === THEMES.DARK) {
        document.getElementById("github").src = "./assets/github_dark.png";
        document.getElementById("twitter").src = "./assets/twitter_dark.png";
      } else {
        document.getElementById("github").src = "./assets/github_light.png";
        document.getElementById("twitter").src = "./assets/twitter_light.png";
      }
    }
  }

  onMount(async () => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
  });
</script>

<div class="s--slider" style="font-size:{fontSize}px">
  <span id={`switch-${uniqueID}`}>{label}</span>
  <button
    role="switch"
    aria-checked={checked}
    aria-labelledby={`switch-${uniqueID}`}
    on:click={handleClick}
  />
</div>

<style>
  :root {
    --accent-color: CornflowerBlue;
    --gray: #ccc;
  }

  /* Slider Design Option */

  .s--slider {
    display: flex;
    align-items: center;
    float: right;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .s--slider button {
    width: 3em;
    height: 1.6em;
    position: relative;
    margin: 0 0 0 0.5em;
    background: var(--gray);
    border: none;
  }

  .s--slider button::before {
    content: "";
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    background: #fff;
    top: 0.13em;
    right: 1.5em;
    transition: transform 0.3s;
  }

  .s--slider button[aria-checked="true"] {
    background-color: var(--accent-color);
  }

  .s--slider button[aria-checked="true"]::before {
    transform: translateX(1.3em);
    transition: transform 0.3s;
  }

  .s--slider button:focus {
    box-shadow: 0 0px 0px 1px var(--accent-color);
  }

  /* Slider Design Option */
  .s--slider button {
    border-radius: 1.5em;
  }

  .s--slider button::before {
    border-radius: 100%;
  }

  .s--slider button:focus {
    box-shadow: 0 0px 8px var(--accent-color);
    border-radius: 1.5em;
  }
</style>
