const products = [
  { id: 1, name: "Product 1", type: "Type A" },
  { id: 2, name: "Product 2", type: "Type B" },
  { id: 3, name: "Product 3", type: "Type A" },
  { id: 4, name: "Product 4", type: "Type C" },
  { id: 5, name: "Product 5", type: "Type B" },
  { id: 6, name: "Product 6", type: "Type A" },
];

// Lọc danh sách sản phẩm theo từng loại
const types = Array.from(new Set(products.map((product) => product.type)));

// Thêm đối tượng "all" vào mảng loại sản phẩm
types.unshift("all");

// Kết quả: ['all', 'Type A', 'Type B', 'Type C']
console.log(types);
