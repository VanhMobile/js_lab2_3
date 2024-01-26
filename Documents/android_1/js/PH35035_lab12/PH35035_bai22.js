// Dữ liệu mảng danh sách sản phẩm cũ
const productList = [
  { code: "P001", name: "Product 1", price: 20.5 },
  { code: "P002", name: "Product 2", price: 15.0 },
  // ...Thêm các sản phẩm khác
  { code: "P003", name: "Product 3", price: 25.8 },
  { code: "P004", name: "Product 4", price: 18.3 },
  { code: "P005", name: "Product 5", price: 22.1 },
  // Sản phẩm lỗi hoặc không có dữ liệu
  null,
  undefined,
  { code: "P006", name: "Product 6", price: 30.0 },
];

// Chuyển đổi mảng thành object và loại bỏ dữ liệu lỗi hoặc không có dữ liệu
const productObject = {};

productList.forEach((product) => {
  if (product && product.code) {
    productObject[product.code] = product;
  }
});

// In ra danh sách sản phẩm dưới dạng object
console.log(productObject);

// Bạn có thể sử dụng productObject để tìm kiếm sản phẩm theo mã sản phẩm một cách hiệu quả
const searchProductByCode = (code) => {
  return productObject[code] || null;
};

// Ví dụ tìm kiếm sản phẩm có mã 'P003'
const result = searchProductByCode("P003");
console.log(result);
