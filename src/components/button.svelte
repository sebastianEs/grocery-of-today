<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
let text;
const addGrocery = (val) => {
    if(!val) return
    let currentItem = {id: listItems.length, value: val, completed: false}
    listItems = [...listItems, currentItem]
    text = ""
  }
</script>


<button class="shadow-sm bg-black focus:outline-white text-white py-2 px-6 rounded-lg outline-none" on:click={addGrocery(text)} >
  <slot></slot>
</button>
