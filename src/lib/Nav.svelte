<script>
  import { Nav, NavItem, NavLink } from "sveltestrap";
  let links = [
    { Name: "Home", href: "/" },
    { Name: "My Mods", href: "/mods" },
    { Name: "VanillaTweaks", href: "/vanillatweaks" },
  ];
  export let current_page;
</script>

<br />
<Nav pills class="justify-content-center mb-5">
  {#each links as { Name, href }, i}
    {#if current_page == Name}
      <NavItem><NavLink {href} active>{Name}</NavLink></NavItem>
    {:else}
      <NavItem><NavLink {href}>{Name}</NavLink></NavItem>
    {/if}
  {/each}
</Nav>

<style>
  :global(.nav) {
    font-size: 1.5rem;
  }
</style>
