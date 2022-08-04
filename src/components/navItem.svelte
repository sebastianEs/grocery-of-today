<script>
  import { getContext } from 'svelte';
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let segment = null;
const current = getContext('nav');

function setSegment(){
	current.set(segment);
}
</script>

<li class="text-white font-sans font-bold" on:click={setSegment} >
  <a href={segment}>
    <slot></slot>
  </a>
</li>