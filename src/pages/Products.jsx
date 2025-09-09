import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data);
      setLoading(false);
    }).catch((error) => {
      console.error("Errore nel caricamento dei prodotti:", error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Prodotti</h1>
            <p>Caricamento...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row gy-3">
          <div className="col-12">
            <h1 className="text-center">Prodotti</h1>
          </div>
          {products.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <div className="card">
                  <div className="card-header">{product.title}</div>
                  <div className="card-body">
                    <p><strong>Categoria:</strong> {product.category}</p>
                    <p><em>Prezzo: ${product.price}</em></p>
                  </div>
                  <div className="card-footer">
                    <Link to={`/products/${product.id}`} className="btn btn-primary">Dettaglio</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;