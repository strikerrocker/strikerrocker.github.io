<script>
  import Nav from "$lib/Nav.svelte";
  import ThemeSlider from "$lib/ThemeSlider.svelte";
  import { CardGroup, Column, Container, Row } from "sveltestrap";
  import SmallCard from "$lib/SmallCard.svelte";
  import { httpGet, httpGetElement } from "./__layout.svelte";
  import { afterUpdate, tick } from "svelte";

  let json = null;
  let modloader = ["forge", "fabric"];

  let promise = load();
  let updatedDownloads = false;

  async function load() {
    await httpGet("../assets/mods/mods.json", (response) => {
      json = JSON.parse(response);
    });
  }

  afterUpdate(() => {
    if (!updatedDownloads) {
      var elements = document.getElementsByClassName("element");
      var array = Array.from(elements);
      array.forEach(getDataForElement);
    }
  });

  function getDataForElement(element) {
    var id = element.id;
    if (id != "") {
      httpGetElement(element, element.getAttribute("api"), fillInfoForResponse);
    }
    updatedDownloads=true
  }

  function fillInfoForResponse(element, response) {
    var downloads = element.querySelectorAll(
      "div#" + element.id + " .card-text"
    );
    var obj = JSON.parse(response);
    downloads[0].innerHTML =
      numberWithCommas(obj.downloads.total) + " Downloads";
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<Nav current_page="My Mods" />
<Container>
  <Row>
    <Column>
      {#await promise}
        Loading the page please wait
      {:then result}
        <h1 id="title">My Mods</h1>
        {#each modloader as loader, i}
          <h3><u>Mods for {loader}</u></h3>
          <CardGroup class="justify-content-center" id={loader}>
            {#if json != undefined}
              {#each json[loader] as mod, i}
                <SmallCard
                  id={mod["slug"]}
                  api={"https://api.cfwidget.com/"+mod["cf_id"]}
                  href={mod["link"]}
                  src={"/assets/mods/" +
                    mod["slug"] +
                    (mod["logo_type"] != null ? mod["logo_type"] : ".png")}
                  alt={mod["name"] + " Logo"}
                  title={mod["name"]}
                  text="? Downloads"
                />
              {/each}
            {/if}
          </CardGroup>
        {/each}
      {/await}
      <ThemeSlider />
    </Column>
  </Row>
</Container>

<style>
  h1 {
    text-align: center;
  }
</style>
