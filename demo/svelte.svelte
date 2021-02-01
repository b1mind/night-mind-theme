<script>
  import { Button } from "./components/Button.svelte";

  const comeOn = `this should work`;
  let variable = 300;

  function someFun(dex) {
    let someIndex = dex;
    console.log(e, variable);

    let boolean = false;
    let ternary = !boolean ? "a don't know" : "i know";

    if (ternary) {
      return;
    } else {
      console.log(comeOn);
    }
  }

  variable = 420;

  someFun();

  const myObj = {
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
  console.log(myObj);
  anotherMyObj = new myObj();
</script>

<main>
  <div class="class" data-theme="light">
    <div id="id" />
    {#if age === 100 || myObj.prop >= 0}
      <Button>Sign Up</Button>
    {:else}
      <Button
        {prop}
        prop2={words}
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

<style type="text/scss">
  //style like its 1999
  --var: #ff50ff;
  --size: 1rem;

  * {
    box-sizing: border-box;
  }

  main {
    width: 100%;
    color: red;
    font-size: var(--size);
    font-weight: bold;
    .another-class {
      min-height: 50%;
      color: #ffffff;
    }
    &::after {
      content: "";
    }
  }
</style>
