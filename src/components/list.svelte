<script>
  export let list = [];
</script>

<ul>
  {#each list as listItem}
  <li class="border-b shadow-sm flex justify-between items-center" >
    {listItem.value}
    <input type="checkbox" bind:checked={listItem.completed} /> </li>
{/each}
</ul>