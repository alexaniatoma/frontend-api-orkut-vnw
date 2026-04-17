import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Post from "../../components/post/Post";
import s from "./Home.module.scss";
import api from "../../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  //listar postagens
  useEffect(() => {
    async function carregarPost() {
      try {
        const res = await api.get("/postagem");
        setPosts(res.data);

      } catch(error) {
        console.log("Erro ao carregar postagens" + error);
      }
    }
    carregarPost();
  } ,[]
)

//editar ou criar nova postagens
async function  enviarForm(e) {
  e.preventDefault();
  try {
    if(editandoId) {
      await api.put(`/postagem/${editandoId}`, {titulo, conteudo});
      setEditandoId(null);
    }else {
      await api.post("/postagem", {titulo, conteudo});
    }
    const res = await api.get("/postagem");
    setPosts(res.data);

    setTitulo("");
    setConteudo("");
  }catch(error) {
    alert("Erro ao enviar formulário" + error);
  }
}

//iniciar edição
function iniciarEdit(postagens) {
  setTitulo(postagens.titulo);
  setConteudo(postagens.conteudo);
  setEditandoId(postagens.postagem_id);
}

//deletar postagens
 async function deletarPost(id) {
  const confirmacao = confirm("Tem certeza que deseja deletar esta postagem?");
  if(!confirmacao) return;

  try {
    await api.delete(`/postagem/${id}`);
    setPosts(prev => prev.filter(post => post.postagem_id !== id));
  } catch(error) {
    console.error(error.response?.data || error.message);
    alert("Erro ao deletar postagem:", error);
  }
}

  function handleLogout() {
    logout();          // remove token
    navigate("/login"); // redireciona
  }

  return (
    <>
      <div className={s.home}>
        <h1>Feed</h1>
        <button className={s.btn} onClick={handleLogout}>
          Sair
        </button>
      </div>
      {/* FORM DE POSTAGEM */}
        <form className={s.postForm} onSubmit={enviarForm}>
          <input
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <textarea
            placeholder="O que você está pensando?"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />

          <button type="submit">{editandoId ? "Atualizar Post" : "Postar"}</button>

          {editandoId && (
            <button
              type="button"
              className="cancel"
              onClick={() => {
                setEditandoId(null);
                setTitulo("");
                setConteudo("");
              }}
            >
              Cancelar
            </button>
          )}
        </form>

        {/* LISTA DE POSTS */}
        <div className={s.postsContainer}>
          {posts.length === 0 ? (
            <p className={s.empty}>Nenhum post ainda...</p>
          ) : (
            posts.map((post) => (
              <Post key={post.postagem_id} post={post} onEdit={iniciarEdit} onDelete={deletarPost}/>
            ))
          )}
        </div>
    </>
  );
}