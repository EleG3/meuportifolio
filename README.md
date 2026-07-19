# Portfólio — Luiz Guilherme · TI

Landing page pessoal desenvolvida para apresentar minha atuação em **suporte técnico, infraestrutura de rede e desenvolvimento de ferramentas internas**, com foco em soluções simples e diretas para o dia a dia da operação (lojas Atacadão).

> Resolvo problemas de infraestrutura e construo as ferramentas que a operação usa todo dia.

## ✨ Funcionalidades

- **Splash screen animada** de abertura com logo em SVG
- **Efeito de digitação** no hero, alternando entre frentes de atuação
- **Diagrama de topologia interativo** (SVG) mapeando as áreas de atuação: Rede, Suporte, Dev e Ops
- **Cases de projetos** em formato acordeão, com stack utilizada em cada um
- **Grid de competências técnicas**
- **Botão de copiar e-mail** com feedback visual
- **Menu responsivo** (mobile-first, com burger menu)
- Suporte a `prefers-reduced-motion` para acessibilidade

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** puro — custom properties, grid, animações e responsividade (sem frameworks)
- **JavaScript vanilla** — sem dependências externas
- **Google Fonts**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) + [Manrope](https://fonts.google.com/specimen/Manrope)

Projeto 100% estático — sem build, bundler ou instalação de pacotes.

## 📂 Estrutura

```
├── index.html      # estrutura da página — ponto de entrada do site
├── style.css       # estilos, tema e responsividade
├── main.js         # interatividade (splash, diagrama, accordion, uptime etc.)
└── README.md
```

> `index.html`, `style.css` e `main.js` ficam todos na **raiz** do repositório — não use `css/` ou `js/` nos caminhos, ou os estilos e o JS não vão carregar.

## 🚀 Como rodar localmente

```bash
git clone https://github.com/EleG3/meuportifolio.git
cd meuportifolio
```

Abra `index.html` direto no navegador, ou sirva com um servidor local (recomendado, para carregar corretamente as fontes):

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## 🌐 Publicando no GitHub Pages

1. Vá em **Settings → Pages** no repositório
2. Em **Source**, selecione a branch `main` e a pasta raiz (`/`)
3. Salve — o site fica disponível em `https://eleg3.github.io/meuportifolio`

## 📌 Projetos em destaque

| Projeto | Descrição | Stack |
|---|---|---|
| **Controle de Equipamentos de Rádio** | Sistema de check-in/check-out de rádios comunicadores, com login multiusuário por PIN, rastreamento em tempo real, auditoria por turno e exportação em CSV | HTML/CSS/JS, localStorage |
| **Gerenciador de Escala Semanal** | Ferramenta de montagem de escalas com validação automática de intervalo mínimo de descanso conforme a CLT | HTML/CSS/JS, validação de regras |

## 📫 Contato

- ✉ e-mail: [luizzguilherme001@gmail.com](mailto:luizzguilherme001@gmail.com)
- LinkedIn: [linkedin.com/in/luiz-guilherme-00538b301](https://www.linkedin.com/in/luiz-guilherme-00538b301/)
- GitHub: [github.com/EleG3](https://github.com/EleG3)

---

*Protótipo construído para aprendizado de HTML/CSS/JS.*
