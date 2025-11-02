"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeaderScroll } from "@/components/custom/header-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Brain,
  Sparkles,
  Target,
  Smile,
  Zap,
  MessageCircle,
  FileText,
  Users,
  GraduationCap,
  CheckCircle2,
  Instagram,
} from "lucide-react";

export default function ConsultaPage() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta";

  return (
    <>
      <HeaderScroll whatsappUrl={whatsappUrl} />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logotipo-terracota.png"
                alt="Seyune"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Você está cansada de viver para comer certo?
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                É hora de parar o ciclo de dietas que começam com esperança e
                terminam em culpa. Descubra como transformar sua relação com a
                comida através da nutrição comportamental — sem restrições
                severas, sem promessas vazias.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Agende sua consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Proof Micro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-accent border-2 border-background" />
              </div>
              <span>Junte-se a dezenas de mulheres transformando suas vidas</span>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-2 backdrop-blur-sm border border-border/50 overflow-hidden">
              <Image
                src="/ensaio.jpg"
                alt="Seyune - Nutricionista Comportamental"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>

            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-xl">
                  +10kg
                </div>
                <div>
                  <p className="font-semibold text-foreground">Massa Magra</p>
                  <p className="text-sm text-muted-foreground">Transformação real</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-muted-foreground rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Seção de Dores */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Você já passou por isso?
            </h2>
          </motion.div>

          {/* Grid de Dores */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "O ciclo interminável",
                description:
                  "Começa uma nova dieta cheia de esperança, segue rigorosamente por algumas semanas, até que... um deslize. E então vem a culpa, a frustração, e você recomeça tudo de novo. Quantas vezes você já viveu isso?",
              },
              {
                title: "O efeito sanfona que nunca para",
                description:
                  "Perde peso, ganha de volta. Perde de novo, ganha mais ainda. Seu corpo não aguenta mais essa montanha-russa, e sua mente muito menos.",
              },
              {
                title: "A culpa depois de cada refeição",
                description:
                  'Você sabe aquela sensação horrível de culpa toda vez que come algo "fora do plano"? Como se você tivesse falhado mais uma vez? Como se você não tivesse força de vontade suficiente?',
              },
              {
                title: "Vivendo para comer certo",
                description:
                  "Sua vida gira em torno da dieta. Você evita eventos sociais. Fica ansiosa pensando no que vai comer. Passa mais tempo planejando refeições do que aproveitando a vida.",
              },
            ].map((dor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="font-heading text-2xl font-semibold text-accent mb-4">
                  {dor.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dor.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Consequência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-10 border border-accent/20 text-center"
          >
            <p className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              E o pior? Cada ano que passa assim, você se afasta mais do corpo e
              da mente que você deseja.
            </p>
            <p className="text-xl text-muted-foreground">
              Não é falta de informação. Não é falta de esforço.{" "}
              <span className="text-accent font-semibold">
                O problema está na abordagem.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-24 px-6 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Imagine se você pudesse...
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A nutrição comportamental não é mais uma dieta restritiva. É uma
              transformação completa — do corpo, da mente e da sua relação com a
              comida.
            </p>
          </motion.div>

          {/* Grid de Benefícios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Heart,
                title: "Bem-estar físico sem sacrifícios",
                description:
                  "Ganhe o corpo que você deseja através de um plano personalizado que respeita sua rotina, suas preferências e seu momento de vida. Sem loucuras, sem restrições impossíveis.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: Brain,
                title: "Equilíbrio mental e emocional",
                description:
                  "Liberte-se da culpa, da ansiedade alimentar e da obsessão por \"comer certo\". Aprenda a ouvir seu corpo e tomar decisões conscientes, não impulsivas.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Sparkles,
                title: "Confiança e liberdade verdadeiras",
                description:
                  "Vá ao restaurante sem medo. Curta o final de semana sem culpa. Viva sua vida sabendo que você tem controle — não a dieta.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Target,
                title: "Resultados que duram",
                description:
                  "Não é sobre perder 5kg em 2 semanas. É sobre construir hábitos sustentáveis que transformam sua vida para sempre.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: Smile,
                title: "Relação saudável com a comida",
                description:
                  "A comida deixa de ser inimiga ou obsessão. Ela volta a ser o que sempre deveria ser: nutrição, prazer e conexão.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Zap,
                title: "Energia para viver plenamente",
                description:
                  "Acorde com disposição. Tenha energia para treinar, trabalhar, se divertir. Sinta-se viva no seu corpo, não aprisionada nele.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                  <div
                    className={`w-14 h-14 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6`}
                  >
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Como funciona a consultoria
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo simples, humano e totalmente personalizado para você.
            </p>
          </motion.div>

          {/* Steps Timeline */}
          <div className="mt-16 space-y-12">
            {[
              {
                number: "1",
                icon: MessageCircle,
                title: "Consulta inicial",
                description:
                  "Vamos conversar — de verdade. Quero entender sua história, seus desafios, seus objetivos. Não é só sobre números numa balança. É sobre você como um todo: corpo, mente, emoções e estilo de vida.",
              },
              {
                number: "2",
                icon: FileText,
                title: "Plano alimentar personalizado",
                description:
                  "Com base na nossa conversa, vou criar um plano alimentar feito para VOCÊ. Não é genérico. Não é copiado de influencer. É construído considerando suas preferências, sua rotina, seus desafios emocionais e comportamentais.",
              },
              {
                number: "3",
                icon: Users,
                title: "Acompanhamento contínuo",
                description:
                  "Você não fica sozinha. Durante todo o processo, estarei ao seu lado para ajustes, suporte e motivação. Quando surgir um desafio (e vai surgir), estaremos juntas para superá-lo.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex gap-8 items-start">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-card border-2 border-accent flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    {/* Connecting line */}
                    {index < 2 && (
                      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Secundário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 group"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Comece sua transformação hoje
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Seção Transformação Seyune */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-card overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagem/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                {/* Fotos antes/depois */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Antes */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-md">
                    <Image
                      src="/seyune/antes.jpg"
                      alt="Seyune antes - 45kg"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-3 text-center">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">
                        Antes
                      </p>
                      <p className="font-heading text-2xl font-bold text-primary">
                        45kg
                      </p>
                    </div>
                  </div>

                  {/* Depois */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-accent shadow-xl">
                    <Image
                      src="/seyune/depois.jpg"
                      alt="Seyune depois - +10kg massa magra"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-accent/95 backdrop-blur-sm rounded-xl p-3 text-center">
                      <p className="text-sm font-semibold text-accent-foreground/90 mb-1">
                        Depois
                      </p>
                      <p className="font-heading text-2xl font-bold text-accent-foreground">
                        +10kg
                      </p>
                    </div>
                    {/* Badge */}
                    <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Massa Magra
                    </div>
                  </div>
                </div>

                {/* Floating quote */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-2xl border border-border max-w-xs"
                >
                  <p className="font-quote text-lg text-primary italic">
                    "Eu criei para mim o que nunca encontrei."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                Minha história
              </div>

              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                Eu sei exatamente como você se sente
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Há alguns anos, eu pesava <strong className="text-foreground">45kg</strong>. Parece pouco, né? Mas eu me sentia fraca. Insegura. Desmotivada. Olhava no espelho e não gostava do que via.
                </p>

                <p>
                  Eu sabia que precisava mudar — mas nada que eu tentava funcionava de verdade. Dietas genéricas. Conselhos de internet. Nada se encaixava com quem EU era.
                </p>

                <p>
                  Foi quando decidi virar nutricionista. E criar para mim mesma o que eu nunca tinha encontrado: um plano que respeitasse meu corpo, minha mente e minha vida.
                </p>

                <div className="bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent pl-6 py-4 my-6">
                  <p className="font-heading text-2xl font-semibold text-accent">
                    Ganhei mais de 10kg de massa magra.
                  </p>
                  <p className="mt-2 text-foreground">
                    Mas ganhei muito mais do que isso: ganhei confiança, energia, liberdade e uma relação saudável com a comida.
                  </p>
                </div>

                <p className="text-xl text-foreground font-semibold">
                  E hoje? Minha missão é entregar essa mesma transformação para mulheres como você — mulheres que merecem mais do que dietas restritivas e promessas vazias.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos Simulados */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Você não está sozinha
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de mulheres estão sentindo exatamente o que você sente
              agora.
            </p>
          </motion.div>

          {/* Grid de "Depoimentos" */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              {
                quote: "Eu tentei todas as dietas da moda...",
                story:
                  "Jejum intermitente. Low carb. Detox. Dieta da blogueira fitness. Nada funcionava a longo prazo. O peso voltava sempre, e a frustração só aumentava.",
              },
              {
                quote: "A culpa estava me consumindo",
                story:
                  'Cada vez que eu "furava" a dieta, eu me sentia um fracasso. Chorava, me punia, começava tudo de novo na segunda-feira. Eu estava exausta emocionalmente.',
              },
              {
                quote: "Minha vida girava em torno da comida",
                story:
                  "Eu evitava sair com amigas porque tinha medo de comer algo errado. Ficava ansiosa em eventos. A comida controlava minha vida — eu não controlava a comida.",
              },
              {
                quote: "O efeito sanfona estava acabando comigo",
                story:
                  "Perdia 5kg, ganhava 7kg. Perdia de novo, ganhava mais ainda. Meu corpo não aguentava mais, e minha autoestima estava no chão.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-8xl font-heading text-primary/5">
                  "
                </div>

                <div className="relative">
                  <p className="font-heading text-2xl font-semibold text-primary mb-4">
                    {item.quote}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.story}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-2xl font-heading font-semibold text-foreground mb-6">
              Essa história pode mudar. Vamos conversar?
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Fale comigo no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Seção Quem é Seyune */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-accent/20 shadow-2xl">
                <Image
                  src="/ensaio.jpg"
                  alt="Seyune"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <div>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Quem é Seyune
                </h2>
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap className="w-5 h-5" />
                  <p className="font-semibold">
                    Nutricionista com especialização em Nutrição Comportamental
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Não sou só mais uma profissional com diploma na parede. Sou
                alguém que viveu na pele a frustração de não conseguir resultados
                com abordagens genéricas e restritivas.
              </p>

              <div className="space-y-4">
                <p className="text-foreground font-semibold text-lg">
                  Por isso, meu trabalho vai além de montar cardápios:
                </p>

                {[
                  {
                    title: "Nutrição comportamental",
                    description:
                      "Entendendo seus gatilhos emocionais e padrões alimentares",
                  },
                  {
                    title: "Planos personalizados",
                    description: "Feitos para SUA rotina, SUA vida, SEU corpo",
                  },
                  {
                    title: "Acompanhamento humano",
                    description:
                      "Você não é um número, é uma pessoa com uma história",
                  },
                  {
                    title: "Resultados sustentáveis",
                    description:
                      "Sem promessas milagrosas, sem restrições impossíveis",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-xl font-heading font-semibold text-accent mb-6">
                  Minha missão? Te ajudar a conquistar o corpo que você deseja
                  enquanto constrói uma relação saudável e livre com a comida.
                </p>

                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Vamos trabalhar juntas?
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre a consultoria
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-border rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="font-heading text-lg text-left hover:no-underline">
                  Quanto custa a consulta?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  O investimento varia de acordo com o tipo de acompanhamento que
                  você precisa. Vamos conversar no WhatsApp para eu entender seus
                  objetivos e te passar os valores personalizados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-border rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="font-heading text-lg text-left hover:no-underline">
                  Quanto tempo leva para ver resultados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Resultados físicos começam a aparecer nas primeiras semanas, mas
                  a verdadeira transformação — mental e comportamental — é um
                  processo contínuo. Não é sobre ser rápido, é sobre ser
                  sustentável.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-border rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="font-heading text-lg text-left hover:no-underline">
                  É mais uma dieta restritiva?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Não! Nutrição comportamental é justamente o OPOSTO de dietas
                  restritivas. Trabalhamos seus comportamentos, emoções e relação
                  com a comida — sem proibições extremas que levam à compulsão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-border rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="font-heading text-lg text-left hover:no-underline">
                  Eu já tentei tudo e nada funcionou. Por que seria diferente?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Porque você provavelmente tentou abordagens genéricas que não
                  consideram quem VOCÊ é. Aqui, o plano é 100% personalizado para
                  sua rotina, preferências e desafios emocionais. E você tem
                  acompanhamento contínuo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-border rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="font-heading text-lg text-left hover:no-underline">
                  Como funciona o acompanhamento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Após a consulta inicial e criação do seu plano, mantemos contato
                  regular para ajustes, suporte e motivação. Você não fica sozinha
                  no processo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border border-border rounded-2xl px-6 bg-background"
              >
                <AccordionTrigger className="font-heading text-lg text-left hover:no-underline">
                  As consultas são presenciais ou online?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  As consultas podem ser online, então você pode estar em qualquer
                  lugar do Brasil (ou do mundo) para ter acesso ao acompanhamento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-gradient-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground">
              Está pronta para começar?
            </h2>

            <div className="space-y-4 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <p>Mais um ano vai passar. Você pode continuar no mesmo ciclo de dietas, culpa e frustração...</p>

              <p className="text-2xl font-heading font-semibold text-accent">
                Ou pode escolher um caminho diferente hoje.
              </p>

              <div className="space-y-2 text-lg pt-4">
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Conquista o corpo que deseja sem sacrificar sua sanidade
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Se liberta da culpa e da ansiedade alimentar
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Constrói uma relação saudável com a comida que dura para sempre
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-accent/20 transition-all duration-300 group scale-105"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Agende sua consulta agora
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground">
                Vagas limitadas. Agenda sujeita a disponibilidade.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground italic">
                A escolha é sua. Mas saiba que eu estou aqui, pronta para te ajudar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo e tagline */}
            <div className="space-y-4">
              <Image
                src="/logo-terracota.png"
                alt="Seyune"
                width={120}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-sm text-background/70">
                Cuidar do corpo, respeitar a mente
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    LGPD - Seus Dados
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
              <a
                href="https://www.instagram.com/seyune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @seyune
              </a>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Seyune - Nutrição Comportamental. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
