<script>
  import {groceries} from '../stores/groceries';
  import { v4 as uuidv4 } from 'uuid';
  const uid = uuidv4();
  let listItems = $groceries
  const currentGroceriesListName = $groceries && $groceries.title ? $groceries.title : 'Current Groceries';
  let currentText = "";
  const addGrocery = (val) => {
    if(!val) return
    let currentItem = {id: uid, name: val, completed: false, quantity: 1}
    console.log('CurrentItem ', currentItem)
    listItems = [...listItems, currentItem]
    currentText = ""
  }
</script>

<div class="border p-4 rounded-lg shadow-sm mt-8" >
  <div class="flex items-center" >
    <input placeholder="Enter a grocery" class="border shadow-lg rounded-sm py-2 px-4 outline-none w-full" bind:value={currentText} />
    <button on:click={addGrocery(currentText)} class="appearance-none bg-green-600 text-white font-semibold focus:bg-green-500 py-2 px-6" >Add</button>
  </div>
</div>

<div class="border rounded-sm shadow-lg my-4 p-2" >
  {#if !listItems.length}
  <p>No groceries has been added!</p>
  {:else}
  <h2 class="text-md font-semibold uppercase" >{currentGroceriesListName}</h2>
  <ul class="flex justify-between items-center my-2">
    <li>
      Added Groceries
    </li>
    <li>Quantity</li>
    <li>
      Completed
    </li>
  </ul>
  <ul class="max-h-20 overflow-scroll" >
    {#each listItems as item, index}
    <li id={`grocery-item-${index}`} class="flex justify-between items-center border-b" >
      <p>{item.name}</p>  
      <input type="number" bind:value={item.quantity} />
      <input type="checkbox" bind:checked={item.checked} />
    </li>
    {/each}
  </ul>
  <div class="flex justify-end items-center space-x-2 mt-4" >
    <button class="appearance-none bg-red-600 text-white font-semibold focus:bg-red-500 py-2 px-6" >Delete</button>
    <button class="appearance-none bg-green-600 text-white font-semibold focus:bg-green-500 py-2 px-6">Save</button>
  </div>
  {/if}
</div>
