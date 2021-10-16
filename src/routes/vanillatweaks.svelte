<script>
  import ThemeSlider from "$lib/ThemeSlider.svelte";
  import VtModule from "$lib/WikiModule.svelte";
  import { Column, Container, Nav, NavLink, Row } from "sveltestrap";
  import { httpGet } from "./__layout.svelte";

  var moduleJson;
  var modules = null;
  let promise = load();

  async function load() {
    await httpGet("/assets/vanillatweaks/features.json", (response) => {
      moduleJson = JSON.parse(response);
      modules = [];
      for (var module in moduleJson) {
        modules.push(module);
      }
    });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function loadModule(event) {
    var target = event.target;
    var links = Array.from(document.getElementsByClassName("nav-link"));
    links.forEach((element) => {
      element.classList.remove("active");
    });
    target.classList.add("active");
    document.getElementById("home-module").hidden = true;
    modules.forEach(
      (module) => (document.getElementById(module + "-module").hidden = true)
    );
    document.getElementById(target.id + "-module").hidden = false;
    if (target.id == "home") {
      document.getElementById("header").hidden = false;
    } else {
      document.getElementById("header").hidden = true;
    }
  }
</script>

<div id="header">
  <header class="container-fluid splash" />
  <Container fluid>
    <Row>
      <div class="col-12 mt-4 mb-5 text-center">
        <h3 class="display-1" id="title">VanillaTweaks</h3>
      </div>
    </Row>
  </Container>
</div>
<Container>
  <Row>
    <Column>
      <Nav class="nav-pills nav-fill justify-content-center mb-5 vt-nav">
        <NavLink active id="home" on:click={loadModule}>Home</NavLink>
        {#if modules != null}
          {#each modules as id}
            <NavLink {id} on:click={loadModule}
              >{capitalizeFirstLetter(id)}</NavLink
            >
          {/each}
        {/if}
      </Nav>
      <div id="home-module">
        <p>
          <strong>VanillaTweaks</strong> is a mod for Minecraft ported from
          <a href="https://minecraft.curseforge.com/projects/craft-by-anon10w1z"
            >Craft++</a
          > mod. Many more feautures were added. This mod aims to enhance Minecraft
          without going overboard.
        </p>
        <p>
          VanillaTweaks is extremely configurable. Everything from enabling and
          disabling enchantments to hoe as sickle can be configured straight
          from the config GUI, accessible from the mods menu or the game menu.
          It is advised to delete your config file every time you update Vanilla
          Tweaks, for the configuration options may have changed.
        </p>
        <p>
          I hope you enjoy playing this mod as much as I have enjoyed learning
          about modding and building it!
        </p>
        <p>
          <em> -- StrikerRocker </em>
        </p>
        <br />
        <h3>How to install</h3>
        <ol>
          <li>
            VanillaTweaks requires Minecraft with forge. Download the forge
            install from <a href="http://files.minecraftforge.net/">here</a> and
            run it.
          </li>
          <li>
            Download the latest version of VanillaTweaks from curseforge.com and
            put the .jar file in your mods folder. This normally lives in the
            same folder as your resourcepacks folder.
          </li>
          <li>
            Run the game from your Minecraft launcher using your <strong
              >new Forge</strong
            > profile.
          </li>
        </ol>
        (There are tutorials on how to set up Forge<a
          href="https://minecraft.gamepedia.com/Mods/Installing_Forge_mods"
          >here</a
        >
        and <a href="https://www.wikihow.com/Install-Minecraft-Forge">here</a>
        if you're stuck.)
        <br /><br /><br />
        <h3>Links</h3>
        <ul>
          <li>
            <a href="https://minecraft.curseforge.com/projects/vanillatweaks"
              >CurseForge</a
            >
          </li>
          <li>
            <a href="https://github.com/StrikerRockers-Mods/VanillaTweaks/"
              >Source code on github</a
            >
          </li>
        </ul>
      </div>
      {#if modules != null && moduleJson != null}
        {#await promise then result}
          {#each modules as id}
            <VtModule moduleName={id} json={moduleJson[id]} />
          {/each}
        {/await}
      {/if}
      <ThemeSlider />
    </Column>
  </Row>
</Container>

<style>
  header {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 500px;
    min-height: 500px;
  }

  header.splash {
    background-image: url("/assets/vanillatweaks/home.png");
  }

  a,
  a:hover,
  a:focus {
    color: #37c562;
  }

  :global(.nav-pills a) {
    color: #37c562 !important;
    cursor: pointer;
  }

  :global(.nav-pills .nav-link.active) {
    background-color: #37c562;
    color: white !important;
  }

  :global(.dark .nav-pills .nav-link.active) {
    color: #323232 !important;
  }

  :global(.nav) {
    font-size: 1.5rem;
  }

  /** Sets the nav buttons to be closed to each other*/
  :global(.nav-link) {
    flex: unset !important;
  }

  :global(.vt-nav) {
    padding-top: 30px;
  }
</style>
