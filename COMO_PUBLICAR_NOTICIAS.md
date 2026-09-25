# Guia: Como Publicar Novas Notícias no Blog

O site **Arborização Inteligente** possui uma estrutura modular para o seu blog. Para adicionar novas notícias, você não precisa editar código HTML complexo.

Tudo é gerenciado no arquivo:
📂 **`news-data.js`**

---

## 🚀 Passo a Passo para Publicar uma Notícia

1. Abra o arquivo **`news-data.js`** em seu editor de código.
2. Localize o array `BLOG_POSTS`.
3. No início da lista (logo após `const BLOG_POSTS = [`), adicione um novo bloco com os dados da sua notícia:

```javascript
  {
    id: "titulo-da-sua-noticia",                 // Identificador único (sem espaços ou acentos)
    title: "Título Chamativo da Sua Notícia",    // Título que aparece no card e no artigo
    category: "tecnologia",                      // Categoria em minúsculas (veja lista abaixo)
    badge: "Tecnologia",                         // Rótulo da categoria exibido no selo
    date: "25 de Setembro, 2024",                // Data de publicação
    readTime: "3 min de leitura",                // Tempo estimado de leitura
    author: "Equipe Arbo Inteligente",           // Nome do autor ou comitê
    image: "assets/logo.png",         // Caminho da imagem de capa
    featured: false,                             // true se quiser que seja o Destaque principal
    excerpt: "Resumo breve da notícia que vai aparecer no card inicial...",
    content: `
      <p>Escreva aqui o primeiro parágrafo da matéria...</p>

      <h3>Subtítulo de Seção</h3>
      <p>Você pode usar parágrafos normais e listas destacadas:</p>
      <ul>
        <li>Primeiro ponto importante</li>
        <li>Segundo ponto importante</li>
      </ul>

      <blockquote class="blog-quote">
        "Uma frase marcante ou citação importante sobre a novidade."
      </blockquote>

      <p>Conclusão da matéria ou próximos passos do projeto.</p>
    `
  },
```

4. Salve o arquivo. Pronto! A nova notícia já estará publicada no site, com suporte a busca, filtros e leitura completa no modal!

---

## 🏷️ Categorias Disponíveis

Você pode utilizar qualquer uma das seguintes categorias (o filtro do site reconhecerá automaticamente):

| Valor no campo `category` | Rótulo no campo `badge` |
| ------------------------- | ----------------------- |
| `tecnologia`              | `Tecnologia`            |
| `sustentabilidade`        | `Sustentabilidade`      |
| `inovacao`                | `Inovação`              |
| `comunidade`              | `Comunidade`            |
| `pesquisa`                | `Pesquisa`              |

---

## 🌟 Como Colocar uma Notícia como Destaque Principal

Se você quiser que uma notícia apareça no topo como **Artigo em Destaque**:

- Defina `featured: true` no artigo desejado.
- Defina `featured: false` nos outros artigos.

---

## 🖼️ Dicas para Imagens

- Formatos recomendados: `.jpg`, `.png`, `.webp`.
- Dimensão sugerida: aproximadamente `1200x675px` (proporção 16:9) para máxima nitidez.
- Salve as novas imagens na pasta `assets/` ou `material_site_arborizacao_inteligente/`.
- Você também pode usar URLs externas de imagem direta (ex: Unsplash).

---

## 🔗 Compartilhamento Direto de Notícias

Cada notícia tem um link direto usando seu `id`.
Por exemplo: `https://seusite.com/#noticia-titulo-da-sua-noticia`
Quando alguém acessar o link com essa hashtag, o site rola diretamente para o blog e abre o artigo automaticamente para leitura!
