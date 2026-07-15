# Alegrai-vos 2026 — Site oficial

Site da 4ª edição do **Alegrai-vos** (Comunidade Católica Hallel) — 20 e 21 de novembro de 2026, Centro de Convenções Vasco Vasques, Manaus.

Stack: **React + Vite + TypeScript + Firebase (Firestore)**. Inscrição gratuita com cadastro salvo no Firestore.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5060
```

O site funciona mesmo sem Firebase (modo demonstração). O formulário só grava inscrições de verdade depois que você conectar o Firebase.

## Conectar o Firebase (para receber inscrições)

1. Crie um projeto novo em https://console.firebase.google.com
2. Ative o **Firestore Database** (modo produção).
3. Em *Configurações do projeto → Seus apps → Web*, copie as credenciais.
4. Copie `.env.example` para `.env.local` e preencha os valores `VITE_FIREBASE_*`.
5. Publique as regras de segurança:
   ```bash
   npm i -g firebase-tools
   firebase login
   firebase use --add        # selecione o projeto criado
   npm run deploy:rules
   ```

As inscrições ficam na coleção **`inscricoes`**. Pelas regras, o site só pode **criar** — leitura/exportação é feita pelo Console do Firebase (ou exporte para CSV por lá).

## Onde editar o conteúdo

- **Textos, datas, convidados, programação, faixas etárias:** `src/data/evento.ts`
- **Logo:** troque o `✦` em `src/components/Header.tsx` e `Footer.tsx` por `<img src="/logo.svg">` (coloque o arquivo em `public/`).
- **Fotos dos convidados:** coloque em `public/convidados/` com os nomes referenciados em `src/data/evento.ts` (ex.: `clenir-viana.jpg`). Sem foto, aparece um círculo com as iniciais.
- **Cores/identidade:** variáveis no topo de `src/index.css`.

## Publicar (Firebase Hosting)

```bash
npm run deploy:all
```
