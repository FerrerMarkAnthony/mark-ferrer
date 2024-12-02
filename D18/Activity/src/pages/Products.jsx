import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form, Row, Col, Dropdown } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  // Fetch product categories
  const fetchCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategories(data);
  };

  // Handle category change
  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    setProducts(data);
  };

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products by search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Open modal with product details
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-uppercase text text-center">Products</h1>

      {/* Category Filter */}
      <Dropdown>
        <Dropdown.Toggle
          variant="primary"
          id="category-dropdown"
          className="text-uppercase"
        >
          {selectedCategory || "Select Category"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => fetchProducts()}
            className="text-uppercase"
          >
            All Categories
          </Dropdown.Item>
          {categories.map((category) => (
            <Dropdown.Item
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="text-uppercase"
            >
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search products"
        className="my-3 search-input"
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Product Grid */}
      <Row xs={1} sm={2} md={3} lg={4} className="product-grid g-4 ">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description.substring(0, 100)}...
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(product)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Product Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.title}
            className="img-fluid mb-3"
          />
          <p>{selectedProduct?.description}</p>
          <p>
            <strong>Price:</strong> ${selectedProduct?.price}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
