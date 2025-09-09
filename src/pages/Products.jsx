import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // recupero budgetMode dal Context (ora funziona con useContext)
  const { budgetMode } = useContext(BudgetContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProducts(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei prodotti:", error);
        setLoading(false);
      });
  }, []);

  // filtro i prodotti in base a budgetMode
  const filteredProducts = budgetMode
    ? products.filter((product) => product.price <= 30)
    : products;

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
    <div className="container">
      <div className="row gy-3">
        <div className="col-12">
          <h1 className="text-center">Prodotti</h1>
        </div>
        {filteredProducts.map((product) => (
          <div className="col-4" key={product.id}>
            <div className="card">
              <div className="card-header">{product.title}</div>
              <div className="card-body">
                <p>
                  <strong>Categoria:</strong> {product.category}
                </p>
                <p>
                  <em>Prezzo: ${product.price}</em>
                </p>
              </div>
              <div className="card-footer">
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  Dettaglio
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* controllo dopo il map: se filtrati sono 0, mostra messaggio */}
        {filteredProducts.length === 0 && (
          <div className="col-12">
            <p className="text-center text-warning">
              Nessun prodotto disponibile in Modalità Budget.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
