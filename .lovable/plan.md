## Objetivo
Instalar o Google tag (gtag.js) com ID `AW-1019185906` em todas as páginas do site.

## Abordagem
Como o site é uma SPA TanStack Start com `__root.tsx` provendo o shell `<html><head>…</head></html>`, basta injetar o script uma única vez no root — ele passa a carregar em todas as rotas automaticamente, atendendo a regra "não incluir mais de uma tag por página".

## Alterações
**`src/routes/__root.tsx`**
- Adicionar dois entries em `scripts` no `head()` do root:
  1. `{ src: "https://www.googletagmanager.com/gtag/js?id=AW-1019185906", async: true }`
  2. `{ children: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-1019185906');" }`

Esses scripts são renderizados pelo `<HeadContent />` já presente no shell, ficando logo após `<head>` em toda página SSR/CSR.

## Depois
- Publicar (`preview_ui--publish`) para o tag ir ao ar em `datalynk.com.br`.
- Validar com o Google Tag Assistant depois do deploy.
