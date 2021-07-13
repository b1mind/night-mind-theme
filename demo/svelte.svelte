<script>
  import { Button } from "./components/Button.svelte";
  export let variable = 300;

  function someFun(dex) {
    let boolean = false;
    let ternary = !boolean ? "a don't know" : dex;

    const newLine = "I am a new line";
    if (ternary) {
      return;
    } else {
      console.log(newLine);
    }
  }

  // test of merge conflict for theme demo
  $: test;
  $store;

  Math.abs(400, 500, 600);
  variable = 420;
  someFun();

  const someObj = {
    age: 38,
    prop: 12,
    nested: {
      prop: 100,
    },

    arraySure: [a, b, c, d],
    initialAge: age,
    addProps: function (notUsed, index) {
      return prop + (nested.prop / age) * index;
    },
  };

  console.log(someObj);
  anotherMyObj = new someObj();
</script>

<svelte:head>
  <title>Some title here</title>
</svelte:head>

<main>
  <details-menu bind:this={detailsMenu}> some custom tag </details-menu>
  <div class="class" data-theme="light">
    <div id="id" in:fly={{}} use:someFun={{}} on:click={() => {}} />
    {#if age === 100 || someObj.prop >= 0}
      <Button>Sign Up</Button>
    {:else}
      {#each links as link (link.id)}
        <a href={`"https://domain.com"${link}`}>{link}</a>
      {/each}
    {/if}
  </div>
</main>

<style>
  #unused {
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --var: #ff50ff;
    --size: 1rem;
  }

  main {
    width: 100%;
    display: grid;
    grid-template-areas: "test";
    color: red;
    font-size: var(--size);
    font-weight: bold;
  }

  .another-class {
    min-height: 50%;
    color: #ffffff;
    grid-area: test;
  }
</style>
