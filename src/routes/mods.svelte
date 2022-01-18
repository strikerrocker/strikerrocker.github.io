<script>
  import Nav from "$lib/Nav.svelte";
  import ThemeSlider from "$lib/ThemeSlider.svelte";
  import { Column, Container, Row } from "sveltestrap";
  import SmallCard from "$lib/SmallCard.svelte";
  import { httpGet } from "./__layout.svelte";
  import { afterUpdate } from "svelte";

  let json = null;
  let modloader = ["forge", "fabric"];

  let promise = load();
  let updatedDownloads = false;
  let mods;

  async function load() {
    await httpGet("/assets/mods/mods.json", (response) => {
      json = response;
      mods = json;
    });
  }

  afterUpdate(() => {
    if (!updatedDownloads) {
      var elements = document.getElementsByClassName("element");
      Array.from(elements).forEach(async (element) => {
        var cf_id = element.getAttribute("cf_id");
        await fetch(
          "https://cf-download-monitor.vercel.app/api/project_data?projectID=" +
            cf_id
        )
          .then((res) => res.json())
          .then((res) => {
            element.querySelectorAll(
              "div#" + element.id + " .card-text"
            )[0].innerHTML = numberWithCommas(res.downloadCount) + " Downloads";
          });
        updatedDownloads = true;
      });
    }
  });

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
            <Row class="row-cols-md-5">
              {#each mods[loader] as mod}
                <Column>
                  <SmallCard
                    id={mod["slug"]}
                    href={mod["link"]}
                    src={"/assets/mods/" +
                      mod["slug"] +
                      (mod["logo_type"] != null ? mod["logo_type"] : ".png")}
                    alt={mod["name"] + " Logo"}
                    title={mod["name"]}
                    text="? Downloads"
                    cf_id={mod["cf_id"]}
                  />
                </Column>
              {/each}
            </Row>
          {/if}
        {/each}
        <ThemeSlider />
      {/await}
    </Column>
  </Row>
</Container>

<style>
  h1 {
    text-align: center;
  }
</style>
