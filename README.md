# Portfólio — Luiz Guilherme

Site pessoal em página única (single-page) apresentando experiência em infraestrutura de TI, suporte técnico e ferramentas internas desenvolvidas para operação de loja.

## Estrutura do projeto

```
portfolio/
├── index.html          # Estrutura da página (HTML)
├── css/
│   └── style.css       # Estilos, temas e responsividade
├── js/
│   └── main.js         # Interatividade (splash, diagrama, accordion, etc.)
└── README.md
```

## Funcionalidades

- Tela de abertura (splash) animada, com suporte a `prefers-reduced-motion`
- Efeito de digitação (typing effect) no cabeçalho
- Diagrama de topologia em SVG, interativo, mostrando as frentes de atuação
- Contador de "uptime" ao vivo
- Lista de projetos em formato accordion
- Botão de copiar e-mail para a área de transferência
- Menu responsivo para dispositivos móveis
- Animações de "reveal" ao rolar a página (Intersection Observer)

## Como rodar localmente

Não há build nem dependências — é HTML/CSS/JS puro. Basta abrir o `index.html` no navegador, ou servir a pasta com um servidor local simples:

```bash
# Python
python3 -m http.server 8000

# ou Node (com o pacote "serve")
npx serve .
```

Depois acesse `http://localhost:8000`.

## Antes de publicar

Atualize os dados de contato em `index.html` (seção `<footer id="contato">`):

- `data-email="seuemail@exemplo.com"` → seu e-mail real
- link do LinkedIn (`href="#"`)
- link do GitHub (`href="#"`)

## Deploy no GitHub Pages

1. Suba o repositório para o GitHub (veja passo a passo abaixo).
2. Em **Settings → Pages**, selecione a branch `main` e a pasta raiz (`/`).
3. O site ficará disponível em `https://seu-usuario.github.io/nome-do-repositorio/`.

## Publicando no Git

```bash
cd portfolio
git init
git add .
git commit -m "Primeiro commit: portfólio pessoal"
git branch -M main
git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
git push -u origin main
```

## Tecnologias

- HTML5 semântico
- CSS3 (custom properties, grid, flexbox, animações)
- JavaScript puro (Vanilla JS, sem frameworks)
- Fontes: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) e [Manrope](https://fonts.google.com/specimen/Manrope), via Google Fonts
