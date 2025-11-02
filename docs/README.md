# Documentação - Projeto Seyune

## Índice de Documentos

### 📊 Estratégia e Campanha
- **[campanha-seyune.md](./campanha-seyune.md)** - Objetivos, budget, funil de conversão e estratégia de Meta Ads

### 👤 Público-Alvo
- **[persona.md](./persona.md)** - Análise detalhada da persona (mulheres 24-38 anos, dores, comportamentos, desejos)

### ✍️ Copy e Conteúdo
- **[copy.md](./copy.md)** - Framework de 10 perguntas estratégicas (direcionamento para criação de copy)

### 🎨 Identidade Visual
- **[Pré Projeto Seyune Zhou - Nova paleta.pdf](./Pré%20Projeto%20Seyune%20Zhou%20-%20Nova%20paleta.pdf)** - DNA da marca completo
  - Atributos: Moderna, Tranquila, Estável, Elegante
  - Paleta de cores (#454c31, #874329, #602514, #efd1af, #f0f0f0)
  - Tipografia: Recoleta Alt, Nexa, Dreaming Outloud Sans
  - Logo e símbolo (balança com folhas)
  - Tagline: "Cuidar do corpo, respeitar a mente"

---

## Guia Rápido

### Cores da Marca
```css
#454c31  /* Verde Profundo */
#874329  /* Terracota Vivo */
#602514  /* Marrom Terroso */
#efd1af  /* Creme Areia */
#f0f0f0  /* Off White */
```

### Tipografia
- **Títulos:** Recoleta Alt
- **Corpo:** Nexa
- **Citações:** Dreaming Outloud Sans

### Logos Disponíveis
- `/public/logo-terracota.png` - Header (124.7 KB)
- `/public/logotipo-terracota.png` - Hero (359 KB)

---

## Como Usar Esta Documentação

1. **Começando?** Leia `/CLAUDE.md` na raiz do projeto primeiro
2. **Entender a persona?** Veja `persona.md`
3. **Criando copy?** Use `copy.md` como direcionamento (não literal)
4. **Dúvidas de design?** Consulte o PDF do pré-projeto
5. **Objetivos da campanha?** Veja `campanha-seyune.md`

---

## Estrutura do Projeto

```
/docs                    # Você está aqui
  ├── README.md         # Este arquivo
  ├── campanha-seyune.md
  ├── persona.md
  ├── copy.md
  └── Pré Projeto Seyune Zhou - Nova paleta.pdf

/src/app
  ├── consulta/         # Landing page principal
  └── page.tsx          # Homepage (redirect)

/components
  ├── ui/               # shadcn/ui components
  └── custom/           # Componentes personalizados

/public
  ├── logo-terracota.png
  └── logotipo-terracota.png
```

---

## Informações-Chave

### Objetivo
Gerar ~10 agendamentos de consulta/semana via WhatsApp

### Budget
R$500 inicial (reinvestir ganhos)

### Funil
Meta Ads → Landing Page → WhatsApp → Consulta

### Persona em Uma Frase
Mulheres 24-38 anos frustradas com dietas restritivas, buscando transformação sustentável (física + emocional)

### Diferencial da Seyune
Nutrição comportamental personalizada + história pessoal inspiradora (45kg → +10kg massa magra)

---

**Última atualização:** 2025-11-02
