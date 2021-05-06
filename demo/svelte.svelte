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

  $: test;
  $store;

  Math.abs(400, 500, 600);
  variable = 420;
  someFun();

  const inObj = {
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

  console.log(inObj);
  anotherMyObj = new inObj();
</script>

<main>
  <details-menu bind:this={detailsMenu}> some custom tag </details-menu>
  <div class="class" data-theme="light">
    <div id="id" />
    {#if age === 100 || inObj.prop >= 0}
      <Button>Sign Up</Button>
    {:else}
      <Button
        prop={inObj.prop}
        prop2={words.test}
        in:fly={{}}
        use:someFun={{}}
        on:click={() => {}}
      >
        Click Me
      </Button>

      {#each links as link (link.id)}
        <a href={`"https://domain.com"${link}`}>{link}</a>
      {/each}
    {/if}
  </div>
</main>

<style>
  :root {
    --var: #ff50ff;
    --size: 1rem;
  }

  * {
    box-sizing: border-box;
  }

  main {
    width: 100%;
    color: red;
    display: grid;
    grid-template-areas: "test";
    font-size: var(--size);
    font-weight: bold;
  }

  main::after {
    content: "";
    cursor: pointer;
  }

  .another-class {
    min-height: 50%;
    color: #ffffff;
    grid-area: test;
  }
</style>
