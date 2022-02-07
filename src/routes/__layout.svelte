<script>
<<<<<<< HEAD
  import "../app.css";
</script>

<header class="bg-gray-600 p-2 h-12 w-full" >
  <h1 class="font-bold uppercase md:text-xl text-gray-100" >Grocery Of Today</h1>
</header>

<div class="container mx-auto max-w-lg h-full" >
  <slot></slot>
</div>
=======
  import '../tailwind.css';
  import Nav from '../components/nav.svelte';
  import NavItem from '../components/navItem.svelte';
  const title = "Groceries of today";

</script>
  <Nav title={title}>
    <NavItem segment='/' >Home</NavItem>
    <NavItem segment='/about' >About</NavItem>
  </Nav>
  <h1 class="text-2xl text-center font-bold uppercase text-gray-900" >{title}</h1>
  <div class="container mx-auto max-w-lg h-full" >
    <slot></slot>
  </div>
>>>>>>> 852ef85 (adding svelte components)
