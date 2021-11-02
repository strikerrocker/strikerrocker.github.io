<script>
  import Nav from "$lib/Nav.svelte";
  import ThemeSlider from "$lib/ThemeSlider.svelte";
  import { CardGroup, Column, Container, Row } from "sveltestrap";
  import SmallCard from "$lib/SmallCard.svelte";
  import { httpGet, httpGetElement } from "./__layout.svelte";
  import { afterUpdate } from "svelte";

  let json = null;
  let modloader = ["forge", "fabric"];

  let promise = load();
  let updatedDownloads = false;

  const chunk = (arr, size) =>
    arr.reduce(
      (acc, e, i) => (
        i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      ),
      []
    );

  let fabric_mods_list;
  let forge_mods_list;
  let mods;

  async function load() {
    await httpGet("/assets/mods/mods.json", (response) => {
      json = response;
      fabric_mods_list = chunk(json["fabric"], 5);
      forge_mods_list = chunk(json["forge"], 5);
      mods = { fabric: fabric_mods_list, forge: forge_mods_list };
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
    updatedDownloads = true;
  }

  function fillInfoForResponse(element, response) {
    var downloads = element.querySelectorAll(
      "div#" + element.id + " .card-text"
    );
    downloads[0].innerHTML =
      numberWithCommas(response.downloads.total) + " Downloads";
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
        {#each modloader as loader}
          <h3><u>Mods for {loader}</u></h3>
          {#if json != undefined}
            {#each mods[loader] as grp, i}
              <CardGroup class="justify-content-center" id={loader + i}>
                {#each grp as mod}
                  <SmallCard
                    id={mod["slug"]}
                    api={"https://api.cfwidget.com/" + mod["cf_id"]}
                    href={mod["link"]}
                    src={"/assets/mods/" +
                      mod["slug"] +
                      (mod["logo_type"] != null ? mod["logo_type"] : ".png")}
                    alt={mod["name"] + " Logo"}
                    title={mod["name"]}
                    text="? Downloads"
                  />
                {/each}
              </CardGroup>
            {/each}
          {/if}
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
