import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState([]);
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [sortedProduct, setSortedProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState('');

  const allProduct = () => {
    axios
      .get(`http://localhost:8000/products?status=instock`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const allCategory = () => {
    axios
      .get(`http://localhost:8000/category`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const categoryFilter = (category) => {
    if (category === 'all') {
      allProduct();
    } else {
      axios
        .get(`http://localhost:8000/products?category=${category}&status=instock`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    }
  };

  const sortLowToHigh = () => {
    const sorted = [...product].sort((a, b) => a.price - b.price);
    setSortedProduct(sorted);
    setSortOrder('lowToHigh');
  };

  const sortHighToLow = () => {
    const sorted = [...product].sort((a, b) => b.price - a.price);
    setSortedProduct(sorted);
    setSortOrder('highToLow');
  };

  const handleSearch = () => {
    // Filter products based on the search term
    const filteredProducts = product.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedProduct(filteredProducts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  useEffect(() => {
    fetch(`http://localhost:8000/products?marketstatus=${status}&status=instock`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, [status]);

  useEffect(() => {
    allProduct();
    allCategory();
  }, []);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    sortedProduct.length > 0
      ? sortedProduct.slice(indexOfFirstProduct, indexOfLastProduct)
      : product.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ backgroundColor: '#5f5f5f' }}>
        <div className="container p-5">
          <h2 className="pb-5 text-center">All Product</h2>
          <div className="row">
            <div className='col-lg-3'>
              <h5>Category Filter</h5>
              <hr />
              <div
                className="card"
                style={{
                  width: '18rem',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <ul className="list-group list-group-flush">
                  {category.map((val) => (
                    <li className="list-group-item" key={val.category_name}>
                      <button
                        onClick={() => categoryFilter(val.category_name)}
                        style={{
                          width: '100%',
                          backgroundColor: '#3498db',
                          color: '#fff',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                        className="btn"
                      >
                        {val.category_name}
                      </button>
                    </li>
                  ))}
                  <li className="list-group-item">
                    <button
                      onClick={() => categoryFilter('all')}
                      style={{
                        width: '100%',
                        backgroundColor: '#3498db',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      className="btn"
                    >
                      All
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-9 row'>
              <div className='d-flex justify-content-between mb-3'>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  className='w-25 form-control'
                  style={{ backgroundColor: '#3498db', color: '#fff' }}
                >
                  <option value="best">Best</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="trending">Trending</option>
                  <option value="latest">Latest</option>
                </select>
                <div className='d-flex align-items-center'>
                  <input
                    type='text'
                    placeholder='Search by name'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='form-control me-2'
                  />
                  <button onClick={handleSearch} className='btn btn-secondary'>
                    Search
                  </button>
                </div>
                <div>
                  <button onClick={sortLowToHigh} className='btn btn-secondary mx-2'>
                    Low to High
                  </button>
                  <button onClick={sortHighToLow} className='btn btn-secondary'>
                    High to Low
                  </button>
                </div>
              </div>
              {currentProducts.map((val) => (
                <div className="col-lg-4 pb-3" key={val.id}>
                  <div
                    className="card"
                    style={{
                      width: '18rem',
                      padding: '15px',
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                    }}
                    >
                      <img
                        style={{ height: '200px', objectFit: 'contain' }}
                        src={val.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: '#333' }}>
                          Name: {val.name}
                        </h5>
                        <hr />
                        <h5 className="card-title" style={{ color: '#333' }}>
                          Price: {val.price}
                        </h5>
                      </div>
                      <div
                        className='btn btn-primary'
                        style={{ backgroundColor: '#3498db', borderRadius: '5px' }}
                      >
                        <Link
                          to={`/product_details/${val.id}`}
                          className='text-white'
                          style={{ textDecoration: 'none' }}
                        >
                          <h6 className='p-0 m-0'>VIEW MORE</h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {Array.from(
                    {
                      length: Math.ceil(
                        sortedProduct.length > 0
                          ? sortedProduct.length / productsPerPage
                          : product.length / productsPerPage
                      ),
                    },
                    (_, index) => index + 1
                  ).map((number) => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                      <button onClick={() => paginate(number)} className="page-link">
                        {number}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Product;
  
