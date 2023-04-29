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
      <tr v-for="product in store.displayedProducts" :key="product.id" style=" align-items: center;">

  <td>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    </div>
  </td>
  <td >
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
   <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item" :class="{ 'is-disabled': store.currentPage === 1 }">
        <button class="pagination__link" :disabled="store.currentPage === 1" @click="store.previousPage()"><img src="../assets/Pagination/arrowright.svg" alt=""></button>
      </li>
      <li class="pagination__item" v-for="page in store.totalPages" :key="page" :class="{ 'is-active': store.currentPage === page }">
        <button class="pagination__link" @click="store.goToPage(page)">{{ page }}</button>
      </li>
      <li class="pagination__item" :class="{ 'is-disabled': store.currentPage === store.totalPages }">
        <button class="pagination__link " :disabled="store.currentPage === store.totalPages" @click="store.nextPage()"><img src="../assets/Pagination/arrowleft.svg" alt="" class="icon">
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/products';

const store = useProductStore();
store.fetchProducts();

const truncatedDescription = (product) => {
  if (product.description.length > 15) {
    return product.description.slice(0, 15) + '...';
  } else {
    return product.description;
  }
};

const setActive = (page) => {
  const paginationLinks = document.querySelectorAll('.pagination-link');
  paginationLinks.forEach((link) => {
    if (link.textContent === page.toString()) {
      link.classList.add('is-current');
    } else {
      link.classList.remove('is-current');
    }
  });
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

.pagination {
  margin-top: 30px;
  background-color: #FAFAFA;
}

.pagination__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
padding: 5px 10px;
}

.pagination__item {
  margin: 0 5px;
    border-radius: 50%;

}

.pagination__link {
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #555;
  cursor: pointer;
  padding: 8px 15px;
  text-decoration: none;
}

.pagination__link:hover {
  background-color: #f5f5f5;
  border-color: #ddd;
}

.pagination__link:focus,
.pagination__link:active {
  background-color: black;
  border-color: #ddd;
  color: white;
  outline: none;
}
.pagination__item:first-child .pagination__link:focus,
.pagination__item:first-child .pagination__link:active, .pagination__item:last-child .pagination__link:focus,
.pagination__item:last-child .pagination__link:active {
  background-color: rgb(129, 129, 129);
  border-color: #ddd;
  color: white;
  outline: none;
}

.pagination__item.is-disabled .pagination__link {
  color: #ddd;
  cursor: not-allowed;
}

.pagination__item.is-active .pagination__link {
  background-color: black;
  color: gray;
}
.pagination__icon {
  display: block;
  height: 20px;
  width: 20px;
}
.pagination__item:first-child .pagination__link, .pagination__item:last-child .pagination__link{
padding-right: 8px;
padding-left: 8px;}



</style>
