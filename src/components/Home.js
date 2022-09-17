import React from "react";
import { Link } from "react-router-dom";
import styles from "../modules/Styles.module.css";
import fotoLoading from "../img/loading.gif";
import Head from "./Head";

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function listaProdutos(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const dados = await response.json();
        setProdutos(dados);
      } catch (err) {
        setError("Houve um erro na aplicação");
      } finally {
        setLoading(false);
      }
    }
    listaProdutos("https://ranekapi.origamid.dev/json/api/produto");
  }, []);

  if (loading)
    return (
      <div className={styles.loadingImage}>
        <h4>Carregando...</h4>
        <img src={fotoLoading} title="loading" alt="loading" />
      </div>
    );
  if (produtos === null) return null;
  if (error)
    return (
      <p>
        {error}
      </p>
    );

  return (
    <section className={`${styles.container} ${styles.home} animaLeft`}>
      <Head title="Ranek" description="Página de" />
      <div className={`${styles.grid} ${styles.listProdutos}`}>
        {produtos.map(produto =>
          <React.Fragment key={produto.id}>
            <Link to={`produto/${produto.id}`} className={styles.itens}>
              <img
                src={produto.fotos[0].src}
                alt={produto.fotos[0].titulo}
                title={produto.fotos[0].titulo}
              />
              <span>
                {produto.nome}
              </span>
            </Link>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default Home;
