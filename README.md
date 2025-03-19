# Documento de Arquitetura de Software

## 1. Introdução
Este documento descreve a arquitetura de software de uma aplicação de previsão do tempo, desenvolvida utilizando HTML, CSS, JavaScript, React e Vite. O objetivo é criar uma interface que exibe a temperatura atual e previsões futuras, inicialmente com dados fictícios.

## 1.1 Finalidade
O software será um projeto desenvolvido no curso de JavaScript, permitindo ao aluno aplicar seus conhecimentos em tecnologias web. O documento serve como referência para a estrutura e funcionamento do sistema.

## 1.2 Escopo
A aplicação apresentará:
Um card com a cidade do usuário e a temperatura atual.
Um container com previsão para os próximos dias, exibindo data, temperatura mínima e máxima.

## 1.3 Definições, Acrônimos e Abreviações
React: Biblioteca JavaScript para criação de interfaces.
Vite: Ferramenta de build rápida para projetos frontend.
Styled Components: Biblioteca para estilização de componentes React.

## 1.4 Visão Geral
Este documento detalha a arquitetura da aplicação, incluindo representação arquitetural, metas, restrições e visões específicas como lógica, processos e implementação.

## 2. Representação Arquitetural
A arquitetura é baseada em componentes React, organizados em:
Componentes: Elementos reutilizáveis como cards de previsão.
Styles: Elementos de estilização.

## 3. Metas e Restrições da Arquitetura
Interface responsiva e intuitiva.
Estrutura modular para expansibilidade.
Preparada para futura integração com APIs.

## 4. Visão de Casos de Uso
O principal caso de uso é exibir a previsão do tempo, com possibilidade futura de interação para detalhamentos.

## 4.1 Realizações de Casos de Uso
O primeiro card é destacado.
O usuário pode visualizar informações adicionais(futuros dias).

## 5. Visão Lógica
O sistema é organizado em:

## 5.1 Visão Geral
Camada de Apresentação: React + Styled Components.
Camada de Lógica: Gerenciamento de estados.

## 5.2 Pacotes de Design Significativos
components/: Elementos reutilizáveis.
styles/: Elementos de estilização.

## 6. Visão de Processos
A aplicação é client-side, sem backend, processando dados no navegador do usuário.

## 7. Visão de Implantação
A aplicação é estática, podendo ser hospedada em plataformas como Vercel ou Netlify.

## 8. Visão da Implementação
## 8.1 Visão Geral
A estrutura segue a hierarquia de componentes do React.

## 8.2 Camadas
UI Layer: Styled Components.
Logic Layer: Hooks e estados React.

## 10. Tamanho e Desempenho
A aplicação é leve e otimizada para carregamento rápido com Vite.

## 11. Qualidade
Extensibilidade: Preparada para futuras funcionalidades.
Confiabilidade: Interface simples e estável.

Portabilidade: Suportada em diferentes dispositivos e navegadores.


## 12. Fluxograma
![Untitled – FigJam — Mozilla Firefox 19_03_2025 20_17_19](https://github.com/user-attachments/assets/5fc47e06-2502-4508-96b1-e43e2ee5b830)
