<script>
  import { Button } from "Component";

  const comeOn = "this should work";
  function someFun(e) {
    console.log(e);
  }

  console.log(someFun(comeOn));

  const myObj = {
    prop: 12,
    nested: {
      prop: 100,
    },
    arraySure: [a, b, c, d],
    initialAge: age,
    age,
    addProps: function (e, index) {
      return prop + nested.prop + e;
    },
  };
</script>

<main>
  <div class="class" data-theme="light">
    <div id="id" />
    <Button {prop} prop2="this" on:click={() => {}}>Click Me</Button>

    {#each links as link (link.id)}
      <a href={`"https://domain.com"${link.url}`}>{link.id}</a>
    {/each}
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
