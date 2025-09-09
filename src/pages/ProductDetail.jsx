import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();  
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        setProduct(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Prodotto non trovato");
        setLoading(false);
        console.error(err);
      });
  }, [id]);  

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Dettaglio prodotto</h1>
            <p>Caricamento...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Dettaglio prodotto</h1>
            <p className="text-danger">{error || "Prodotto non trovato."}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Dettaglio prodotto</h1>
          <div className="card">
            <div className="card-header">{product.title}</div>
            <div className="card-body">
              <img 
                src={product.image} 
                alt={product.title} 
              />
              <p><strong>Categoria:</strong> {product.category}</p>
              <p><strong>Prezzo:</strong> ${product.price}</p>
              <p><strong>Descrizione:</strong> {product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;