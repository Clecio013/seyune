# Meta Ads - Guia Completo de Configuração
**Seyune - Nutrição Comportamental**

---

## 📋 ÍNDICE

1. [Configuração do Meta Pixel](#1-configuração-do-meta-pixel)
2. [Testes do Pixel](#2-testes-do-pixel)
3. [Copies dos Anúncios](#3-copies-dos-anúncios)
4. [Configuração no Gerenciador de Anúncios](#4-configuração-no-gerenciador-de-anúncios)
5. [Benchmarks e Monitoramento](#5-benchmarks-e-monitoramento)

---

## 1. CONFIGURAÇÃO DO META PIXEL

### Passo 1: Obter o Pixel ID

1. Acesse o **Gerenciador de Eventos** do Meta Business Suite
   - URL: https://business.facebook.com/events_manager2
2. Clique em **"Conectar Fontes de Dados"** > **"Web"** > **"Meta Pixel"**
3. Nomeie o pixel: `Seyune - Site`
4. **Copie o Pixel ID** (formato: 123456789012345)

### Passo 2: Adicionar Pixel ID no .env.local

```bash
NEXT_PUBLIC_META_PIXEL_ID=seu_pixel_id_aqui
```

### Passo 3: Configurar Pixel via Google Tag Manager

**Opção A: Instalação via GTM (Recomendado)**

1. Acesse o GTM: https://tagmanager.google.com
2. No container `GTM-NZXQCLV9`, clique em **"Tags"** > **"Nova"**
3. Configure:
   - **Nome:** `Meta Pixel - Base Code`
   - **Tipo de tag:** HTML Personalizado
   - **Código:** Cole o código base do pixel (disponível no Gerenciador de Eventos)
   - **Acionamento:** `All Pages`
4. Clique em **"Enviar"** > **"Publicar"**

**Opção B: Código direto (já está implementado)**

Se preferir usar o código direto no Next.js, já está configurado em:
- `/src/components/analytics/MetaPixel.tsx`
- Só precisa adicionar o Pixel ID no `.env.local`

### Passo 4: Configurar Eventos Personalizados no GTM

#### Evento 1: WhatsApp Click (CONVERSÃO PRINCIPAL)

1. **Tag > Nova**
   - Nome: `Meta Pixel - WhatsApp Click`
   - Tipo: HTML Personalizado
   - Código:
     ```html
     <script>
       fbq('trackCustom', 'WhatsAppClick', {
         location: {{Click Text}},
         source: 'landing_page'
       });
     </script>
     ```
   - Acionamento: Criar novo acionador
     - Tipo: `Clique - Apenas Links`
     - Condição: `Click URL` contém `wa.me`

2. **Salvar e publicar**

#### Evento 2: Lead (Backup - caso WhatsApp não rastreie)

1. **Tag > Nova**
   - Nome: `Meta Pixel - Lead Event`
   - Tipo: HTML Personalizado
   - Código:
     ```html
     <script>
       fbq('track', 'Lead', {
         content_name: 'Consulta Nutricional',
         content_category: 'Agendamento'
       });
     </script>
     ```
   - Acionamento: Mesmo do WhatsApp (`Click URL` contém `wa.me`)

---

## 2. TESTES DO PIXEL

### Checklist de Validação

Use a extensão **Meta Pixel Helper** do Chrome:
https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc

#### ✅ Testes Obrigatórios

1. **PageView**
   - [ ] Acesse `https://seyune.com.br/consulta`
   - [ ] Pixel Helper mostra evento `PageView`
   - [ ] Status verde (sem erros)

2. **WhatsAppClick / Lead**
   - [ ] Clique em qualquer botão de WhatsApp
   - [ ] Pixel Helper mostra `WhatsAppClick` (custom) OU `Lead`
   - [ ] Parâmetros corretos (location, source)
   - [ ] Redirecionamento para WhatsApp funciona

3. **ViewContent** (Opcional)
   - [ ] Scroll até 50% da página
   - [ ] FAQ: abra uma pergunta
   - [ ] Pixel Helper mostra `ViewContent`

#### 🔍 Verificação no Gerenciador de Eventos

1. Acesse: https://business.facebook.com/events_manager2
2. Selecione o pixel `Seyune - Site`
3. Vá em **"Testar Eventos"**
4. Execute os testes acima
5. Veja em tempo real os eventos sendo disparados

#### 🚨 Troubleshooting

**Problema:** Pixel Helper não mostra eventos
- Verifique se o Pixel ID está correto no `.env.local`
- Limpe o cache do navegador
- Verifique se está em produção (não localhost)

**Problema:** WhatsApp não rastreia
- Verifique se o botão usa o componente `AnalyticsButton`
- Verifique se o acionador no GTM está correto
- Use o console: `window.fbq` deve estar definido

---

## 3. COPIES DOS ANÚNCIOS

### 🎬 ANÚNCIO 1: VÍDEO

#### Texto Principal (125 caracteres ideal)
```
Você não aguenta mais começar dieta com esperança… e acabar no mesmo ciclo de culpa e frustração?

Eu sei exatamente como é.

Eu pesava 45kg, me sentia fraca, insegura, e vivia de dieta em dieta sem resultado real.

Até entender que o problema não era eu. Era a abordagem.

Hoje, ajudo mulheres como você a:

→ Sair do ciclo de dieta-recaída-culpa
→ Criar uma relação saudável com a comida (sem restrições absurdas)
→ Ter resultados que duram (não só por 30 dias)

Nutrição comportamental: corpo + mente trabalhando juntos.

Agende sua consulta e descubra como funciona 👇
```

#### Título (40 caracteres)
```
Cansada do ciclo de dietas?
```

#### Descrição (30 caracteres)
```
Resultados reais e sustentáveis
```

#### Call to Action
- Botão: **"Enviar mensagem"** (WhatsApp)
- Destino: `https://seyune.com.br/consulta`

---

### 🖼️ ANÚNCIO 2: IMAGEM (Criativo Estático)

#### Texto Principal (mais direto ao ponto)
```
"Sinceramente? Eu não aguento mais começar dieta achando que agora vai… e acabar vivendo só pra comer certo."

Se você se identificou, esse é o sinal que estava esperando.

O problema não é você. São as dietas restritivas que te colocam nesse ciclo:

Foco total → Recaída → Culpa → Recomeçar

E se existisse um jeito de emagrecer (ou ganhar massa magra) sem viver em função da comida?

Nutrição Comportamental = Foco no que realmente importa

✓ Planos personalizados (sem copy-paste de influencer)
✓ Sem restrições que te deixam maluca
✓ Acompanhamento profissional contínuo
✓ Resultados que duram

Eu já estive no seu lugar. Hoje, peso +10kg de massa magra, me sinto forte, confiante e livre.

E quero te ajudar a chegar lá também.

👉 Agende sua consulta (atendo em São Paulo - Vila Mariana)
```

#### Título
```
Pare de viver em função da dieta
```

#### Descrição
```
Nutrição que transforma (corpo e mente)
```

#### Call to Action
- Botão: **"Saiba mais"**
- Destino: `https://seyune.com.br/consulta`

---

### 📝 VARIAÇÕES PARA TESTE A/B (Opcional)

#### Variação 1: Foco em DOR
**Título:** "Já tentou de tudo e nada funciona?"
**Texto:** Focar nas frustrações anteriores (efeito sanfona, compulsão)

#### Variação 2: Foco em TRANSFORMAÇÃO
**Título:** "Como ganhei +10kg de massa magra"
**Texto:** História da Seyune (de 45kg fraca → forte e confiante)

#### Variação 3: Foco em MÉTODO
**Título:** "O que é Nutrição Comportamental?"
**Texto:** Explicar a diferença da abordagem (física + emocional)

---

## 4. CONFIGURAÇÃO NO GERENCIADOR DE ANÚNCIOS

### FASE 1: TESTE E CONVERSÃO (Dias 1-20)

#### 📍 Localização da Seyune
**Atendimento:** São Paulo - Vila Mariana (presencial)

---

### 🎯 CAMPANHA: "Seyune - Consulta Nutricional"

1. Acesse: https://adsmanager.facebook.com/
2. Clique em **"Criar"**

#### Nível 1: CAMPANHA

**Objetivo:**
- Selecione: **"Tráfego"** (ou **"Conversões"** se o pixel já tem dados)
- Nome: `Seyune - Consulta Nutricional - Conversão`

**Configurações Especiais:**
- ❌ **NÃO** ative Advantage campaign budget (deixe budget manual por conjunto)
- ❌ **NÃO** use Advantage+ campaigns (queremos controle total)

**Clique em "Avançar"**

---

#### Nível 2: CONJUNTO DE ANÚNCIOS 1 - Vídeo

**Nome:** `SP - Mulheres 24-38 - Nutrição Comportamental - Vídeo`

##### Orçamento e Programação
- **Orçamento diário:** R$ 10,00
- **Data de início:** [Data de lançamento]
- **Data de término:** Nenhuma (evergreen)
- **Horário:** O dia todo (deixar Meta otimizar)

##### Eventos de Conversão
- **Pixel:** Seyune - Site
- **Evento de conversão:**
  - Prioridade 1: `WhatsAppClick` (custom event)
  - Prioridade 2: `Lead` (standard event)
- **Janela de atribuição:** 7 dias após o clique

##### Público

**Localização:**
- Tipo: **"Pessoas que moram ou que estiveram recentemente neste local"**
- Local: São Paulo, SP, Brasil
  - Raio: 25 km do centro (cobre Vila Mariana + principais bairros)
  - Alternativa: Selecionar bairros específicos (Zona Sul: Vila Mariana, Moema, Itaim, Pinheiros, etc.)

**Idade:** 24 - 38 anos

**Gênero:** Mulheres

**Idioma:** Português (Brasil)

**Segmentação Detalhada:**

Clique em **"Segmentação detalhada"** > **"Procurar"**

**Interesses (escolha 5-8):**
- Nutrição
- Emagrecimento saudável
- Fitness feminino
- Boa forma física
- Dieta e nutrição
- Saúde e bem-estar
- Alimentação saudável
- Compulsão alimentar (se disponível)

**💡 Dica:** Digite cada termo e veja sugestões. Escolha interesses com público de 50.000+

**Comportamentos:**
- Compradoras frequentes online
- Usuárias ativas do Instagram

**Tamanho do público:**
- Ideal: 500.000 - 2.000.000 pessoas
- Se < 300.000: Remova 1-2 interesses específicos
- Se > 3.000.000: Adicione mais interesses ou reduza raio

##### Posicionamentos
- **Manual** (recomendado para controle)
- **Plataformas:** Instagram apenas
- **Posicionamentos:**
  - ✅ Feed do Instagram
  - ✅ Stories do Instagram
  - ✅ Reels do Instagram
  - ❌ Desmarque: Facebook, Audience Network, Messenger

##### Otimização e Entrega
- **Objetivo de otimização:** Conversões (se disponível) ou Cliques no link
- **Controle de custo:** Bid cap (não definir - deixar automático inicialmente)
- **Tipo de entrega:** Padrão

**Clique em "Avançar"**

---

#### Nível 3: ANÚNCIO 1 - Vídeo

**Nome:** `Vídeo - Ciclo de Dietas`

##### Identidade
- **Conta do Instagram:** @seyune
- **Adicionar conta do Facebook:** Não (só Instagram)

##### Configuração do Anúncio

**Formato:** Vídeo único

**Mídia:**
- Upload do vídeo fornecido pela equipe de marketing
- **Proporção recomendada:**
  - Stories/Reels: 9:16 (vertical)
  - Feed: 1:1 (quadrado) ou 4:5 (vertical)
- **Duração ideal:** 15-60 segundos
- **Legenda:** Sempre adicione legendas (80% assistem sem som)

**Texto principal:** [Use o copy do ANÚNCIO 1: VÍDEO acima]

**Título:** `Cansada do ciclo de dietas?`

**Descrição:** `Resultados reais e sustentáveis`

**Call to Action:**
- Botão: **"Enviar mensagem"**
- URL do site: `https://seyune.com.br/consulta`
- Parâmetros UTM (recomendado):
  ```
  https://seyune.com.br/consulta?utm_source=instagram&utm_medium=paid&utm_campaign=conversao&utm_content=video
  ```

**Rastreamento:**
- ✅ Rastreamento do Pixel: Ativado
- Parâmetros de URL: (adicionar UTM acima)

**Clique em "Publicar"**

---

#### Nível 2: CONJUNTO DE ANÚNCIOS 2 - Imagem

**Nome:** `SP - Mulheres 24-38 - Nutrição Comportamental - Imagem`

**⚠️ IMPORTANTE:** Use **EXATAMENTE** as mesmas configurações do Conjunto 1

##### Orçamento
- **Orçamento diário:** R$ 10,00

##### Público
- **IDÊNTICO ao Conjunto 1** (copie todas as configurações)
- Mesma localização, idade, gênero, interesses

##### Posicionamentos
- **IDÊNTICO ao Conjunto 1** (Instagram apenas)

---

#### Nível 3: ANÚNCIO 2 - Imagem

**Nome:** `Imagem - Crença Persona`

##### Configuração do Anúncio

**Formato:** Imagem única

**Mídia:**
- Upload da imagem/criativo fornecido
- **Proporção recomendada:**
  - 1:1 (quadrado - 1080x1080px)
  - ou 4:5 (vertical - 1080x1350px)
- **Requisitos:**
  - Texto na imagem: Máximo 20% da área (Meta penaliza se > 20%)
  - Resolução mínima: 1080x1080px
  - Formato: JPG ou PNG

**Texto principal:** [Use o copy do ANÚNCIO 2: IMAGEM acima]

**Título:** `Pare de viver em função da dieta`

**Descrição:** `Nutrição que transforma (corpo e mente)`

**Call to Action:**
- Botão: **"Saiba mais"**
- URL do site: `https://seyune.com.br/consulta`
- Parâmetros UTM:
  ```
  https://seyune.com.br/consulta?utm_source=instagram&utm_medium=paid&utm_campaign=conversao&utm_content=imagem
  ```

**Clique em "Publicar"**

---

### ✅ REVISÃO FINAL ANTES DE PUBLICAR

**Campanha:**
- [ ] Nome: `Seyune - Consulta Nutricional - Conversão`
- [ ] Objetivo: Tráfego ou Conversões
- [ ] Budget campaign: DESATIVADO

**Conjunto 1 (Vídeo):**
- [ ] Budget: R$ 10/dia
- [ ] Localização: São Paulo, 25km
- [ ] Idade: 24-38
- [ ] Gênero: Mulheres
- [ ] Interesses: 5-8 relacionados
- [ ] Posicionamento: Só Instagram
- [ ] Pixel configurado

**Conjunto 2 (Imagem):**
- [ ] Budget: R$ 10/dia
- [ ] MESMO público do Conjunto 1
- [ ] MESMO posicionamento
- [ ] Pixel configurado

**Anúncios:**
- [ ] Copy revisado (sem erros)
- [ ] CTAs configurados
- [ ] URLs com UTM
- [ ] Mídia em alta qualidade

---

### FASE 2: REMARKETING (Após 15-20 dias)

#### Pré-requisitos
- Mínimo 100-500 visitantes na landing page
- Pixel com dados de 15-20 dias
- Performance da Fase 1 analisada

#### 🎯 CAMPANHA 2: "Seyune - Remarketing"

##### Criar Público Personalizado

1. Acesse **Públicos** no Meta Business Suite
2. Clique em **"Criar público"** > **"Público personalizado"**
3. Selecione **"Site"**
4. Configure:
   - **Pixel:** Seyune - Site
   - **Eventos:**
     - Incluir pessoas que visitaram: `PageView` em `/consulta`
     - Excluir pessoas que dispararam: `WhatsAppClick` OU `Lead`
   - **Período:** Últimos 30 dias
   - **Nome:** `Visitaram /consulta - Não converteram`
5. Salvar

##### Nível 1: CAMPANHA

**Nome:** `Seyune - Remarketing - Quentes`
**Objetivo:** Conversões

##### Nível 2: CONJUNTO DE ANÚNCIOS

**Nome:** `Remarketing - Visitantes Quentes`

**Orçamento:** R$ 5-10/dia (ajustar conforme tamanho do público)

**Público:**
- **Público personalizado:** `Visitaram /consulta - Não converteram`
- **Localização:** São Paulo (mesmo da Fase 1)
- **Idade/Gênero:** Não precisa (já está no público personalizado)

**Posicionamento:** Instagram (mesmo da Fase 1)

##### Nível 3: ANÚNCIO

**Criativo:** Use o que teve MELHOR performance na Fase 1 (vídeo OU imagem)

**Copy:** Adicione urgência/escassez suave
```
Você visitou nosso site e se identificou com a proposta… 🤔

Que tal dar o próximo passo?

A nutrição comportamental pode ser a resposta que você procura para:
→ Sair do ciclo de dietas frustradas
→ Ter resultados que duram

Vagas limitadas para consultas este mês.

Agende agora 👇
```

---

### 📌 ENTENDENDO OS PÚBLICOS: Quem Ver e Quem Excluir

#### ✅ Público que JÁ CONVERTEU (Clicou WhatsApp)

**Status:** LEAD (MQL - Marketing Qualified Lead)

**Jornada completa:**
```
Viu anúncio → Acessou /consulta → Clicou WhatsApp → Abriu conversa
```

**O que fazer no Meta Ads:**

1. **Criar público de exclusão**
   - Acesse: Públicos > Criar público > Público personalizado > Site
   - Nome: `Leads - Clicaram WhatsApp`
   - Evento: `WhatsAppClick` OU `Lead`
   - Período: 60 dias

2. **Adicionar como EXCLUSÃO em TODAS as campanhas**
   - Fase 1: Conjunto Vídeo + Conjunto Imagem
   - Fase 2: Remarketing
   - Por quê? Já converteram, não precisa gastar mais

**Próximo passo (fora do Meta Ads):**
- Seyune qualifica via WhatsApp
- Tenta agendar consulta
- Se agenda → Cliente! 🎉
- Se não responde → Remarketing manual via WhatsApp (não ads)

---

#### 🤔 Público de REMARKETING (Visitou mas NÃO clicou)

**Status:** INTERESSADO mas com objeção/dúvida

**Quem são:**
```
Viu anúncio → Acessou /consulta → NÃO clicou WhatsApp
```

**Por que não clicaram? (objeções comuns)**
- 💰 Objeção de preço ("será que é caro?")
- 🤨 Desconfiança ("será que funciona?")
- ⏰ Timing ruim ("vou pensar melhor")
- 🔍 Comparando concorrentes ("vou pesquisar")
- 😴 Distraiu e esqueceu

**Como o remarketing resolve:**
- 💰 Falar de valor/investimento (não preço)
- 🤨 Destacar transformação da Seyune (+10kg massa magra)
- ⏰ Criar urgência suave ("Vagas limitadas este mês")
- 🔍 Reforçar diferenciais (nutrição comportamental ≠ dieta tradicional)
- 😴 Relembrar a proposta

**Taxa de conversão esperada:**
- Público frio (Fase 1): 10-15%
- Remarketing (Fase 2): **15-25%** ⬆️ (público já qualificado!)

---

#### 🆕 Público FRIO (Nunca viram a Seyune)

**Status:** Não conhecem a proposta

**Estratégia:**
- Fase 1: Vídeo + Imagem (testar qual performa melhor)
- Foco em identificação com a dor ("ciclo de dietas")
- Apresentar a transformação da Seyune
- CTA claro para WhatsApp

**O que acontece:**
- **10-15%** → Clicam WhatsApp (viram LEADS) ✅
- **85-90%** → Não clicam (vão para REMARKETING Fase 2) 🔄

---

#### 📊 RESUMO: Fluxo Completo de Públicos

```
PÚBLICO FRIO (Fase 1)
    ↓
Acessa Landing Page
    ↓
    ├─→ Clica WhatsApp (10-15%)
    │       ↓
    │   LEAD → Excluir de campanhas futuras
    │       ↓
    │   WhatsApp (Seyune qualifica)
    │       ↓
    │   Agendamento → CLIENTE 🎉
    │
    └─→ NÃO clica (85-90%)
            ↓
        REMARKETING (Fase 2)
            ↓
        Novo anúncio (urgência/prova social)
            ↓
        15-25% convertem → LEAD

```

---

## 5. BENCHMARKS E MONITORAMENTO

### KPIs Principais

| Métrica | Meta Ideal | Meta Aceitável | Ação se Abaixo |
|---------|-----------|----------------|----------------|
| **CPM** (custo/1000 impressões) | R$ 15-20 | R$ 20-30 | Melhorar criativo |
| **CPC** (custo/clique) | R$ 0.50-1.50 | R$ 1.50-2.50 | Ajustar copy/público |
| **CTR** (taxa de cliques) | 2-4% | 1-2% | Testar novos criativos |
| **CPL** (custo/lead) | R$ 10-20 | R$ 20-30 | Otimizar landing page |
| **Taxa de conversão LP** | 15-25% | 10-15% | Melhorar CTA/urgência |

### Estimativas Conservadoras (R$ 500 total)

**Fase 1 - Conversão (R$ 400):**
- Impressões: ~20.000-30.000
- Cliques na landing page: ~200-400 (CTR 1-2%)
- Cliques no WhatsApp: ~20-30 leads (CPL R$ 15-20)

**Fase 2 - Remarketing (R$ 100):**
- Leads adicionais: ~5-10 (CPL mais baixo R$ 10-15)

**TOTAL ESPERADO:** 25-40 contatos no WhatsApp

**Se conversão WhatsApp → Consulta = 30-50%:**
- **Consultas agendadas: 8-20**

### Como Monitorar

#### Diariamente (primeiros 7 dias)
1. Acesse Gerenciador de Anúncios
2. Verifique:
   - Gastos estão dentro do budget?
   - CPM e CPC estão nos benchmarks?
   - Algum anúncio foi rejeitado?

#### Semanalmente
1. Compare performance: Vídeo vs. Imagem
2. Analise qual criativo tem:
   - Menor CPL
   - Maior CTR
   - Melhor engajamento
3. Ações:
   - **Se vídeo ganha:** Aumente budget do vídeo (R$ 15/dia), reduza imagem (R$ 5/dia)
   - **Se imagem ganha:** Faça o inverso
   - **Se empate:** Mantenha 50/50

#### Após 15-20 dias
1. Decisão: Ativar ou não remarketing?
   - Se acumulou 300+ visitantes: ✅ Ativar
   - Se < 300: ⏳ Aguardar mais 5-10 dias

### Otimizações Contínuas

**Semana 1-2:** Período de aprendizado da Meta
- ❌ NÃO faça mudanças drásticas
- ✅ Deixe Meta otimizar
- ✅ Só ajuste se CPL > R$ 40 ou CTR < 0.5%

**Semana 3-4:** Otimização
- Teste novos copies (variações A/B)
- Teste novos criativos (outras fotos/vídeos da Seyune)
- Ajuste budget para o melhor performer

**Mês 2+:** Escala
- Reinvestir ganhos das consultas
- Expandir público (outras cidades? Online?)
- Testar novos objetivos de campanha

---

## 📞 TROUBLESHOOTING

### Problema: CPC muito alto (> R$ 3)
**Causas possíveis:**
- Público muito específico (< 200k pessoas)
- Criativo com baixo engajamento
- Muita concorrência no horário

**Soluções:**
- Ampliar interesses (adicionar 2-3 novos)
- Testar novo criativo
- Deixar Meta otimizar horário

---

### Problema: Muitos cliques, poucos leads
**Causas possíveis:**
- Landing page não está convertendo
- Público errado (não qualificado)
- CTA não está claro

**Soluções:**
- Revisar landing page (headlines, urgência)
- Refinar público (adicionar interesses mais específicos)
- Testar copy mais direto

---

### Problema: Anúncio rejeitado
**Causas comuns:**
- Texto > 20% da imagem
- Promessas exageradas ("emagreça 10kg em 7 dias")
- Foco excessivo em corpo/perda de peso

**Soluções:**
- Reduzir texto na imagem
- Suavizar copy (foco em "bem-estar" vs "emagrecer")
- Apelar da decisão (se achar que foi erro)

---

## ✅ CHECKLIST FINAL PRÉ-LANÇAMENTO

**Pixel e Tracking:**
- [ ] Pixel ID no `.env.local` OU GTM
- [ ] Eventos testados (PageView, Lead, WhatsApp)
- [ ] Pixel Helper mostra eventos corretamente

**Criativos:**
- [ ] Vídeo recebido da equipe de marketing
- [ ] Imagem recebida e otimizada (< 20% texto)
- [ ] Legendas adicionadas ao vídeo

**Campanha:**
- [ ] Campanha criada: `Seyune - Consulta Nutricional`
- [ ] 2 conjuntos: Vídeo (R$ 10) + Imagem (R$ 10)
- [ ] Público configurado: SP, 24-38, mulheres, interesses
- [ ] Posicionamento: Só Instagram

**Anúncios:**
- [ ] Copy revisado e sem erros
- [ ] CTAs configurados
- [ ] URLs com UTM parameters
- [ ] Botões: "Enviar mensagem" (vídeo) + "Saiba mais" (imagem)

**Landing Page:**
- [ ] URL funciona: https://seyune.com.br/consulta
- [ ] WhatsApp funciona (clique abre conversa)
- [ ] Mobile-friendly (testar no celular)

**Budget:**
- [ ] Total disponível: R$ 500
- [ ] Fase 1: R$ 400 (20 dias × R$ 20/dia)
- [ ] Fase 2: R$ 100 (reservado para remarketing)

---

## 🚀 PRÓXIMOS PASSOS

1. **Obter criativos** da equipe de marketing
2. **Configurar Pixel ID** no GTM ou `.env.local`
3. **Testar Pixel** com checklist acima
4. **Criar campanha** seguindo o passo a passo
5. **Publicar** e monitorar diariamente
6. **Otimizar** após 7-15 dias
7. **Ativar remarketing** após 15-20 dias
8. **Escalar** com reinvestimento dos ganhos

---

**Dúvidas? Consulte:**
- Meta Business Help Center: https://www.facebook.com/business/help
- Meta Pixel Helper: https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc

**Última atualização:** 2025-11-04
