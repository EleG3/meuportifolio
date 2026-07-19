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

Projeto 100% estático, em um único arquivo — sem necessidade de build, bundler ou instalação de pacotes.

## 📂 Estrutura

```
├── portfolio-v2.html   # página completa (HTML + CSS + JS inline)
└── README.md
```

## 🚀 Como rodar localmente

Basta abrir o arquivo diretamente no navegador:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Ou, se preferir servir por um servidor local (recomendado para testar corretamente as fontes e animações):

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/portfolio-v2.html`.

## 🌐 Publicando no GitHub Pages

1. Renomeie `portfolio-v2.html` para `index.html` (ou configure o Pages para apontar direto para ele)
2. Vá em **Settings → Pages** no repositório
3. Selecione a branch (geralmente `main`) e a pasta raiz
4. Salve — o link ficará disponível em `https://seu-usuario.github.io/seu-repositorio`

## 📌 Projetos em destaque

| Projeto | Descrição | Stack |
|---|---|---|
| **Controle de Equipamentos de Rádio** | Sistema de check-in/check-out de rádios comunicadores, com login multiusuário por PIN, rastreamento em tempo real, auditoria por turno e exportação em CSV | HTML/CSS/JS, localStorage |
| **Gerenciador de Escala Semanal** | Ferramenta de montagem de escalas com validação automática de intervalo mínimo de descanso conforme a CLT | HTML/CSS/JS, validação de regras |

## 📫 Contato

- ✉ e-mail: luizzguilherme001@gmail.com
- LinkedIn: (https://www.linkedin.com/in/luiz-guilherme-00538b301/)
- GitHub: https://github.com/EleG3



---

*Protótipo construído para aprendizado de HTML/CSS/JS.*
