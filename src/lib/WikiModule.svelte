<script>
  import { getContext } from "svelte";

  import { Badge, Card, CardBody, Row } from "sveltestrap";
  export let moduleName;
  export let json;

  function removeImageRegion(event) {
    var image = event.srcElement;
    image.onerror = null;
    var imageRegion = image.parentElement;
    imageRegion.parentElement.removeChild(imageRegion);
    console.log(
      "Removed image region because image src=" +
        image.getAttribute("src") +
        " was not found."
    );
  }

  function pause(event) {
    event.target.pause();
  }

  function play(event) {
    if (event.target.paused) event.target.play();
  }

  let currentTheme = getContext("currentTheme");
  let theme =
    currentTheme === "light" ? "bg-light wiki-card" : "bg-dark wiki-card";
</script>

<div id={moduleName + "-module"} hidden>
  {#each json as feature}
    <Card class={theme}>
      <CardBody class="p-0">
        <Row noGutters>
          <div class="image-region col-md-3">
            {#if feature["video"] == null || feature["video"] == false}
              <img
                src={"/assets/vanillatweaks/" +
                  moduleName +
                  "/" +
                  feature["id"] +
                  ".png"}
                alt={"Represents " + feature["name"]}
                class=" m-sm-2"
                on:error={removeImageRegion}
              />
            {:else}
              <!-- svelte-ignore a11y-mouse-events-have-key-events -->
              <!-- svelte-ignore a11y-media-has-caption -->
              <video
              class=" m-sm-2"
                on:error={removeImageRegion}
                loop
                on:mouseover={play}
                on:mouseout={pause}
                width="267"
                >Your browser does not support HTML5 video.<source
                  src={"/assets/vanillatweaks/" +
                    moduleName +
                    "/" +
                    feature["id"] +
                    ".webm"}
                  type="video/webm"
                /></video
              >
            {/if}
          </div>
          <div class="text-region col-md-9 p-4">
            <h3><b>{feature["name"]}</b></h3>
            <div name="description"><h6>{@html feature["desc"]}<br /></h6></div>
            {#if feature["advDesc"] != null}
              <h6>{@html feature["advDesc"]}</h6>
            {/if}
            <h6>
              {#each feature["versions"] as forge_version, i}
                {#if i == 0}
                  Supported Forge Versions :
                {/if}<Badge color="primary">{forge_version}</Badge>&ensp;
              {/each}
            </h6>
            <h6>
              {#each feature["fabric_versions"] as forge_version, i}
                {#if i == 0}
                  Supported Fabric Versions :
                {/if}<Badge color="primary">{forge_version}</Badge>&ensp;
              {/each}
            </h6>
          </div>
        </Row>
      </CardBody>
    </Card>
  {/each}
</div>

<style>
  :global(.card .text-region) {
    position: relative;
  }
  :global(.card a) {
    text-decoration: none;
  }
  :global(.card .text-region h3) {
    font-size: 1.4em;
  }

  :global(.bg-dark.card.wiki-card) {
    background-color: rgb(27, 30, 31) !important;
  }

  :global(.card img) {
    width: 100%;
    height: auto;
  }

  :global(.badge) {
    background-color: #37c562 !important;
  }

  :global(.bg-dark .badge) {
    color: #323232;
  }

  video{
    height:max-content;
  }

  @media (min-width: 768px) {
    :global(.card img) {
      max-width: 300px;
    }
  }
</style>
