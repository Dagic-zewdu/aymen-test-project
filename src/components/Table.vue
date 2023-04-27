Here's the rewritten table component:

```
<template>
  <table class="table align-middle mb-0 bg-white custom-table">
    <thead class="bg-light">
      <tr>
        <th>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          </div>
        </th>
        <th>Product</th>
        <th>User</th>
        <th>Card</th>
        <th>Receipt</th>
        <th>Note</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in store.products" :key="product.id" style=" align-items: center;">
  <td>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    </div>
  </td>
  <td>
    <div class="d-flex align-items-center">
     <img
        :src="product.images[0]"
        alt=""
        style="width: 45px; height: 45px"
        class="rounded-circle"
      />

      <div class="ms-3">
        <p class="fw-bold mb-1">{{ product.title }}</p>
        <p class="text-muted mb-0">{{ product.brand }}</p>
      </div>
    </div>
  </td>
  <td>
      <p class="text-muted mb-0">{{ truncatedDescription(product) }}</p>
    </td>
  <td class="dflex">
    <img
      src="../assets/Table/bankCard.svg"
      class="pr-2"
      alt=""
      style="margin-right: 10px; "
    />
    <div class="pl-3">
      <p class="fw-normal">{{ product.rating }}</p>
      <p class="text-muted mb-0">{{ product.stock }}</p>
    </div>
  </td>
  <td><img src="../assets/Table/Receipt.svg" alt="" style="margin-left: 6px;" /></td>
  <td>
    <img
      src="../assets/Table/Note.svg"
      alt=""
      class="IconCenter"
      style="margin-left: 6px;margin-bottom: 4px;"
    />
  </td>
  <td>
    <p class="fw-normal mb-1 CategoryBg">{{ product.category }}</p>
  </td>
  <td>
    <p class="fw-normal mb-1">{{ product.price }} SAR</p>
  </td>
</tr>

    </tbody>
  </table>
</template>

<script>
import { defineStore } from 'pinia';

export const useTableStore = defineStore({
  id: 'table',
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      this.products = data.products;
    }
  }
});

export default {
  name: 'Table',
  computed: {
    truncatedDescription() {
      return (product) => {
        if (product.description.length > 15) {
          return product.description.slice(0, 15) + '...';
        } else {
          return product.description;
        }
      }
    }
  },
  setup() {
    const store = useTableStore();
    store.fetchProducts();

    return {
      store
    };
  },
};
</script>

<style>
.custom-table thead {
  font-size: 14px;
}
.custom-table tbody {
  font-size: 14px;
}
th {
  color: #898a8d;
  font-weight: 500;
}
.CategoryBg {
  text-align: center;
  padding: 3px;
  background-color: #F4F4F4;
  border-radius: 5px
}
tr .dflex {
  display: flex;
}
</style>
