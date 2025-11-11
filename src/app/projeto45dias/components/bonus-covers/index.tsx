'use client';

import { Scale, Shield, TrendingUp, PartyPopper, ChefHat } from 'lucide-react';
import { BonusCover } from './BonusCover';

export function EmagrecimentoSustentavelCover() {
  return (
    <BonusCover
      title="Emagrecimento Sustentável"
      subtitle="GUIA NUTRICIONAL"
      gradient="green"
      pattern="dots"
      icon={<Scale className="w-12 h-12 text-black" strokeWidth={2.5} />}
    />
  );
}

export function NaoSabotarProcessoCover() {
  return (
    <BonusCover
      title="Não Sabotar Seu Processo"
      subtitle="GUIA COMPORTAMENTAL"
      gradient="blue"
      pattern="lines"
      icon={<Shield className="w-12 h-12 text-black" strokeWidth={2.5} />}
    />
  );
}

export function GanhoMassaCover() {
  return (
    <BonusCover
      title="Ganho de Massa Muscular"
      subtitle="GUIA HIPERTROFIA"
      gradient="purple"
      pattern="grid"
      icon={<TrendingUp className="w-12 h-12 text-black" strokeWidth={2.5} />}
    />
  );
}

export function FestasFimAnoCover() {
  return (
    <BonusCover
      title="Sobrevivência nas Festas"
      subtitle="GUIA ESPECIAL"
      gradient="orange"
      pattern="waves"
      icon={<PartyPopper className="w-12 h-12 text-black" strokeWidth={2.5} />}
    />
  );
}

export function ReceitasImpressionar() {
  return (
    <BonusCover
      title="Receitas Saudáveis"
      subtitle="GUIA DE RECEITAS"
      gradient="gold"
      pattern="dots"
      icon={<ChefHat className="w-12 h-12 text-black" strokeWidth={2.5} />}
    />
  );
}
