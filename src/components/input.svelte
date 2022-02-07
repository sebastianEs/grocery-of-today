<script>
  export let text, placeholderText
</script>

<input class="outline-none border shadow-sm w-full p-2 rounded-lg" placeholder={placeholderText} bind:value={text} />
