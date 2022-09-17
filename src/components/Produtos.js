import React from "react";
import { useParams } from "react-router-dom";
import styles from "../modules/Styles.module.css";
import fotoLoading from "../img/loading.gif";
import Head from "./Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { id } = useParams();

  React.useEffect(
    () => {
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
      listaProdutos(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    },
    [id]
  );

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
    <section className={`${styles.container} animaLeft`}>
      <Head
        title={`Ranek | ${produtos.nome}`}
        description={produtos.descricao}
      />
      <div className={styles.flex}>
        <div className={styles.imageProduct}>
          {produtos.fotos.map(images =>
            <React.Fragment key={images.src}>
              <img src={images.src} alt={images.titulo} title={images.titulo} />
            </React.Fragment>
          )}
        </div>
        <div className={styles.descricao}>
          <h1>
            {produtos.nome}
          </h1>
          <span>
            R$
            {` ${produtos.preco}`}
          </span>
          <p>
            {produtos.descricao}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
