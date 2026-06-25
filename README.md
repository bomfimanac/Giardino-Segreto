# 🌸 Giardino Segreto | Boutique de Flores

> Um website institucional e vitrine digital premium desenvolvido para uma boutique de flores fictícia, focado em elegância, minimalismo e alta performance.

---

## 📱 Sobre o Projeto

O **Giardino Segreto** é um projeto de front-end que simula a experiência digital de uma floricultura de luxo[cite: 1]. O design foi planejado para transmitir sofisticação, utilizando uma paleta de cores botânica, tipografia serifada clássica e transições suaves que enriquecem a experiência do usuário[cite: 1].

Este projeto evoluiu para incluir uma interface dinâmica com alternância de temas (Claro/Escuro) e otimizações de layout, mantendo a performance e o design responsivo como pilares centrais[cite: 2, 3, 4].

## ✨ Funcionalidades

* **Alternância de Temas (Dark Mode):** Sistema dinâmico que altera todo o esquema de cores (fundo, textos e bordas) e troca o ícone de indicação (Lua/Sol) em tempo real[cite: 2, 3].
* **Design Mobile-First & Responsivo:** Interface totalmente adaptada para dispositivos móveis, com menus centralizados e alinhamento otimizado[cite: 3, 4].
* **Menu Hambúrguer Nativo:** Navegação mobile interativa construída com CSS puro e reforçada por JavaScript para controle de estado[cite: 3, 4].
* **Vitrine Interativa de Produtos:** Cards com efeito de zoom suave e exibição de preços ao passar o mouse[cite: 3, 4].
* **Carrossel Infinito de Feedbacks:** Slider automatizado via CSS Animations com pausa ao passar o mouse[cite: 3, 4].
* **Efeito de Revelação (Scroll Reveal):** Animação suave de entrada para as seções da página, gerenciada via `IntersectionObserver`[cite: 2, 3].

## 🎨 Identidade Visual

* **Paleta de Cores Dinâmica:**
    * **Modo Claro:** Baseada em `#ffffff` (fundo) e `#1C2E24` (texto) para leitura limpa[cite: 3].
    * **Modo Escuro:** Baseada em `#121A15` (fundo) e `#FDFBF7` (texto) para sofisticação noturna[cite: 3].
    * **Destaques:** Uso recorrente de `#8C5B61` (Rose Gold) para botões e detalhes[cite: 3].
* **Tipografia:** *Playfair Display* (Títulos) para elegância e *Montserrat* (Corpo) para legibilidade[cite: 4].

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica[cite: 4].
* **CSS3:** Estilização avançada com variáveis CSS (`:root`), Flexbox, CSS Grid e animações `keyframes`[cite: 3].
* **Vanilla JavaScript:** Implementação do `IntersectionObserver` para revelação de seções e lógica de alternância de temas[cite: 2].

## 📂 Estrutura do Repositório

```text
├── index.html          # Estrutura principal e seções do site
├── style.css           # Estilos unificados, variáveis de tema e Media Queries
├── script.js           # Lógica de Dark Mode e Scroll Reveal
└── assets/             # Imagens e recursos visuais do projeto
