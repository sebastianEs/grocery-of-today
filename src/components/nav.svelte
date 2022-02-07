<script>
  export let title = "Default Title";
</script>

<header class="fixed flex items-center justify-between bg-gray-700 h-10 p-3 w-full " >
  <nav class="fixed flex items-center justify-between top-0 left-0 w-3/4 h-10 bg-transparent" >
    <h1 class="text-gray-300 font-bold capitalize" >{title}</h1>
    <ul class="flex justify-between items-center space-x-2" >
      <slot></slot>
    </ul>
  </nav>
</header>