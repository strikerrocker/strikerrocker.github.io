<script>
  import Nav from "$lib/Nav.svelte";
  import SmallCard from "$lib/SmallCard.svelte";
  import ThemeSlider from "$lib/ThemeSlider.svelte";
  import { CardGroup, Column, Container, Row } from "sveltestrap";
</script>

<Nav current_page="Home" />
<Container>
  <Row>
    <Column>
      <main>
        <section>
          <h2>About StrikerRocker</h2>
          <br />
          <p>
            I'm a young developer currently learning software and web
            development through indie game and addon development.
          </p>
        </section>
        <hr />
        <section>
          <h2>Commissions</h2>
          <br />
          <p>
            I sometimes do modding commissions (this is highly dependent on the
            case) contact me if you're interested.
          </p>
        </section>
        <hr />
        <section>
          <h2>Projects</h2>
          <br />
          <p>
            Primarily focused on making mods for the game <a
              href="http://minecraft.net/"
            >
              Minecraft</a
            >.
          </p>
        </section>
        <hr />
        <section>
          <h2>Links</h2>
          <br />
          <CardGroup class="justify-content-center">
            <SmallCard
              href="https://www.twitter.com/strikerrocker"
              src="./assets/twitter_light.png"
              id="twitter"
              alt="Twitter logo"
              title="Twitter - StrikerRocker"
              small
            />
            <SmallCard
              href="https://discord.gg/tqcqeSj"
              src="./assets/Discord-Logo-Color.png"
              id="discord"
              alt="Discord logo"
              title="Discord - StrikerRocker#7058"
              small
            />
            <SmallCard
              href="https://www.github.com/strikerrocker"
              src="./assets/github_light.png"
              id="github"
              alt="Github logo"
              title="Github - StrikerRocker"
              small
            />
            <SmallCard
              href="https://www.curseforge.com/members/strikerrocker/projects"
              src="./assets/curse-vertical_lightbg.png"
              id="curse_forge"
              alt="CurseForge logo"
              title="CurseForge - StrikerRocker"
              small
            />
            <SmallCard
              href="https://www.twitch.tv/strikerrocker/"
              src="./assets/twitch.png"
              id="twitch"
              alt="Twitch logo"
              title="Twitch - StrikerRocker"
              small
            />
          </CardGroup>
        </section>
      </main>
      <ThemeSlider />
    </Column>
  </Row>
</Container>
