# Portfólio Acadêmico — Cid Daniel Neves D’Oliveira

Portfólio acadêmico e profissional desenvolvido para apresentar minha formação em Desenvolvimento de Software Multiplataforma (DSM) na Fatec São José dos Campos, meus projetos e minhas competências. Os projetos pessoais estão vinculados à minha conta GitHub; os projetos integradores (API) apontam para os repositórios das organizações das equipes.

**Publicado em:** https://c1dneve.github.io/Portf-lio/

## Seções

- **Apresentação:** perfil, formação atual, objetivos e áreas de interesse.
- **Projetos acadêmicos (API):** Radar Cidadão (atividade de treinamento acadêmico orientada por professor) e SGOS (projeto desenvolvido com a parceira ALTAVE), com contexto, tecnologias, solução, contribuições e habilidades exercitadas. Os links direcionam aos repositórios das respectivas equipes.
- **Projetos profissionais:** trabalho freelance para cliente real e experiência como Assistente Administrativo na Secretaria de Manutenção Municipal, pelo Programa Agente Cidadão (Fundhas), durante seis meses, até março de 2026.
- **Projetos pessoais:** aplicações desenvolvidas por iniciativa própria.
- **Informações curriculares:** formação acadêmica, eventos, cursos e certificações.
- **Habilidades:** tecnologias, ferramentas e métodos com uma escala de proficiência de 1 a 5.
- **Contato:** GitHub, LinkedIn e e-mail.

## Tecnologias utilizadas

- **HTML5:** estrutura e conteúdo semântico.
- **Tailwind CSS (CDN):** classes utilitárias para composição responsiva do layout.
- **CSS3:** estilos complementares em `assets/css/style.css`.
- **JavaScript:** interações do menu de navegação, implementadas em `assets/js/main.js`.
- **Google Fonts:** tipografias Inter e JetBrains Mono.

O site é estático e não exige etapa de build ou instalação de dependências para ser visualizado localmente. O Tailwind CSS é carregado pela CDN, portanto a conexão com a internet é necessária para a estilização baseada no framework.

## Estrutura do projeto

```text
.
├── index.html
├── .nojekyll
├── README.md
└── assets/
    ├── css/style.css
    ├── img/
    ├── js/main.js
    └── video/
```

## Visualização local

Na pasta do projeto, execute:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

## Publicação

O projeto está preparado para publicação pelo GitHub Pages, servindo o `index.html` da raiz do repositório. O arquivo `.nojekyll` evita o processamento do conteúdo pelo Jekyll.
