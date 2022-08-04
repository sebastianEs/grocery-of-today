<script>
import { createEventDispatcher } from 'svelte';
export let textValue;
const dispatch = createEventDispatcher();
const addGrocery = () => {
    dispatch('addItem', {
      text: textValue
    })
  }
</script>


<button class="shadow-sm bg-black focus:outline-white text-white py-2 px-6 rounded-lg outline-none" on:click={addGrocery} >
  <slot></slot>
</button>
