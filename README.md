[Link para ver o relogio funcionando](https://relogio-ikarus.netlify.app/)


# 🕒 Relógio Digital Interativo

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

### [➡️ Acessar a Demonstração Ao Vivo](https://relogio-ikarus.netlify.app/)


## ✨ Funcionalidades Principais

* **Relógio em Tempo Real:** Atualiza a cada segundo com a hora local do usuário.
* **Data Completa:** Exibe a data por extenso (ex: "Quinta-feira, 18 de Setembro de 2025") e em formato numérico.
* **Design Responsivo:** A interface se adapta perfeitamente a qualquer tamanho de tela, de celulares a desktops, usando técnicas de tipografia fluida com `clamp()`.
* **Seletor de Temas Inteligente:**
    * **Modo Claro ☀️ e Escuro 🌙:** Permite ao usuário escolher manualmente seu tema preferido.
    * **Modo Automático ⚙️:** Troca o tema automaticamente com base no horário.
    * **Horários Personalizáveis:** O usuário pode definir exatamente a que horas o modo escuro e o modo claro devem ser ativados.
* **Persistência de Dados:** As preferências de tema do usuário são salvas no navegador usando `localStorage`, então a escolha é lembrada em futuras visitas.
* **Animações Suaves:** Os números e textos possuem uma animação sutil de "fade in" apenas quando seus valores são alterados, criando uma experiência visual polida.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:**
    * **Flexbox** e **Grid** para layouts complexos.
    * **Variáveis CSS (`:root`)** para um sistema de temas (theming) fácil de manter.
    * **Animações com `@keyframes`** para transições de texto.
    * **Design Responsivo** com Media Queries e `clamp()`.
* **JavaScript (ES6+):**
    * Manipulação do **DOM** para atualizar a interface em tempo real.
    * Uso do objeto `Date` para lógica de data e hora.
    * `setInterval` para o loop de atualização do relógio.
    * `localStorage` para persistência de dados no lado do cliente.
    * Lógica de eventos (`addEventListener`) para interatividade.

## 🔧 Como Executar Localmente

Como este é um projeto de front-end puro, não há necessidade de um build complexo.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/IkarusRK/Relogio.git](https://github.com/IkarusRK/Relogio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd Relogio
    ```
3.  Abra o arquivo `index.html` em seu navegador. (Recomendo o uso da extensão **Live Server** no VS Code para uma melhor experiência).

* Manipulação avançada do DOM e lógica de eventos.
* Criação de um sistema de temas (light/dark mode) dinâmico e personalizável.
* Uso de `localStorage` para criar uma experiência de usuário persistente.
* Implementação de animações condicionais para uma UI mais fluida.
* Estruturação de um código JavaScript limpo e modular.

---

Criado por [Ikarus].
