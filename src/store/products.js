import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    pagination: {
      currentPage: 1,
      itemsPerPage: 10
    }
  }),
  getters: {
    // Calculate the total number of pages based on the number of items and the number of items per page
    totalPages: (state) => Math.ceil(state.products.length / state.pagination.itemsPerPage),
    // Calculate the products to show based on the current page and the number of items per page
    displayedProducts: (state) => {
      const start = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
      const end = start + state.pagination.itemsPerPage;
      return state.products.slice(start, end);
    }
  },
  actions: {
    async fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      this.products = data.products;
    },
    // Go to the previous page
    previousPage() {
      this.pagination.currentPage--;
    },
    // Go to the next page
    nextPage() {
      this.pagination.currentPage++;
    },
    // Go to a specific page
    goToPage(page) {
      this.pagination.currentPage = page;
    }
  }
});
