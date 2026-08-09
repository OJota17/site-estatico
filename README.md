# Advocacia Rovina — Site Institucional

Site de página única (one-page) para a Advocacia Rovina, desenvolvido em **HTML, CSS e JavaScript puros** — sem frameworks, sem build, sem dependências de instalação. Basta abrir o `index.html` no navegador.

Inspirado na estrutura do site [Bernardo Advogados](https://bernardoadvogados.com), com identidade visual própria baseada na logo da Rovina (monograma dourado sobre fundo grafite).

## 📸 Screenshots

### Hero (desktop)
![Hero desktop](screenshots/desktop-hero.png)

### Áreas de atuação
![Áreas de atuação](screenshots/desktop-areas.png)

### Versão mobile
<img src="screenshots/mobile-hero.png" alt="Hero mobile" width="320">

### Página completa (desktop)
![Página completa](screenshots/desktop-full.png)

## ✨ Funcionalidades

- Header fixo, com fundo sólido ao rolar a página
- Menu mobile com animação de abertura/fechamento
- Seções: Início, Escritório, Áreas de Atuação, Diferenciais e Contato
- Fotos de fundo com camada escura/dourada (duotone) nas seções Hero, Escritório e CTA
- Ícones de linha (SVG) como marca d'água decorativa em cada card de área de atuação
- Botão flutuante de WhatsApp
- Animações de revelação ao rolar a página (Intersection Observer)
- Totalmente responsivo (desktop, tablet e mobile)

## 🗂️ Estrutura de arquivos

Todos os arquivos ficam soltos na mesma pasta (sem subpastas de assets):

```
advocacia-rovina/
├── index.html         # estrutura da página
├── style.css           # estilos (tema grafite + dourado)
├── script.js            # interações (menu, scroll, animações)
├── logo.png             # logo da Advocacia Rovina
├── hero-bg.jpg           # foto de fundo do Hero
├── escritorio.jpg        # foto de fundo da seção Escritório
├── cta-bg.jpg             # foto de fundo da faixa de CTA
└── screenshots/            # imagens usadas neste README
```

## 🎨 Paleta e tipografia

| Uso            | Cor       |
|-----------------|-----------|
| Fundo (ink)       | `#17140F` |
| Superfície        | `#201B14` / `#2A2317` |
| Dourado          | `#C9A24B` |
| Dourado claro      | `#E8D9A0` |
| Texto            | `#F2EDE2` |

- **Títulos:** Cinzel (serifada, caixa alta, remete ao lettering da logo)
- **Corpo de texto:** EB Garamond

## ✅ Antes de publicar

- [ ] Trocar o número de WhatsApp de exemplo (`5519999999999`) pelo número real, nos 3 links do site
- [ ] Atualizar telefone, e-mail e endereço no rodapé
- [ ] Revisar as áreas de atuação listadas (atualmente: Cível, Família e Sucessões, Trabalhista e Previdenciário)
- [ ] Trocar os links de Instagram/LinkedIn do rodapé pelos reais

## 🚀 Publicando o site

Não é obrigatório comprar domínio para colocar o site no ar:

- **Grátis:** [Netlify](https://www.netlify.com), [Vercel](https://vercel.com) ou [GitHub Pages](https://pages.github.com) — basta subir a pasta do projeto
- **Domínio próprio** (opcional, ex: `advocaciarovina.com.br`): ~R$ 40/ano via [Registro.br](https://registro.br)

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis CSS, Grid, Flexbox)
- JavaScript vanilla (sem dependências)
- Google Fonts (Cinzel, EB Garamond)
