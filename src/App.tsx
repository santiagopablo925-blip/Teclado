import { useState } from 'react';
import {
  Lock,
  Flame,
  Zap,
  Check,
  ShieldCheck,
  X,
  Star,
  Sparkles
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const CHECKOUT_FICHAS_10 = 'https://ggcheckout.app/checkout/v2/4N5Ie5cMngSx0OgToGlMhB';
const CHECKOUT_PACOTE_24 = 'https://ggcheckout.app/checkout/v2/uGr9T1HZShxETItmkP1Lch';
const CHECKOUT_UPSELL_18 = 'https://ggcheckout.app/checkout/v2/VRBN91Ah0F2w0oJ5CK0b7x';

const FAQ_DATA: FaqItem[] = [
  {
    question: 'O que são as 90 fichas visuais?',
    answer: 'Um PDF de consulta para fazer as primeiras verificações em teclados musicais e pianos digitais.'
  },
  {
    question: 'Como vou receber o material?',
    answer: 'O acesso é digital. Confira no checkout as instruções de entrega após a confirmação da compra.'
  },
  {
    question: 'O material é físico ou digital?',
    answer: 'É um PDF que você pode abrir no celular, tablet ou computador e imprimir.'
  },
  {
    question: 'O que está incluído no Pacote Completo?',
    answer: '90 fichas visuais em PDF + 6 bônus digitais listados na oferta.'
  },
  {
    question: 'Posso consultar as fichas com o instrumento em mãos?',
    answer: 'Sim. Abra o índice, escolha o sintoma e acompanhe a checagem pela ficha.'
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Consulte no checkout as condições de garantia e reembolso aplicáveis à sua compra.'
  }
];

const AMOSTRA_IMAGES = [
  {
    src: '/Páginas/Captura de tela 2026-11-13 113742.png',
    alt: 'Ficha 11 — Liga, mas não sai som (Página 20)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113727.png',
    alt: 'Ficha 01 — Uma tecla está falhando (Página 10)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113751.png',
    alt: 'Ficha 21 — Pedal de sustain sem resposta (Página 30)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113759.png',
    alt: 'Ficha 31 — O teclado não liga (Página 40)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113819.png',
    alt: 'Ficha 14 — O fone só toca de um lado (Página 23)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113839.png',
    alt: 'Ficha 45 — Aparece um zumbido quando conecto o teclado à mesa (Página 54)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113904.png',
    alt: 'Ficha 53 — As notas chegam ao programa, mas o instrumento virtual não soa (Página 62)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113921.png',
    alt: 'Ficha 63 — Uma região do teclado ficou muda (Página 72)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113934.png',
    alt: 'Ficha 81 — Como identificar o modelo exato antes de pedir uma peça ou acessório (Página 90)'
  },
  {
    src: '/Páginas/Captura de tela 2026-11-13 113940.png',
    alt: 'Ficha 83 — Como testar todas as teclas antes de comprar (Página 92)'
  }
];

const GUIDES_FROM_ZERO = [
  {
    icon: '/mvt/laser.png',
    title: '90 fichas visuais',
    desc: 'Consulte falhas de teclas, pedais, som, alimentação, conexões e configurações.'
  },
  {
    icon: '/mvt/scale.png',
    title: 'Índice clicável por sintoma',
    desc: 'Toque no problema que percebeu para abrir a ficha correspondente.'
  },
  {
    icon: '/mvt/manual-book.png',
    title: 'Imagens que mostram onde olhar',
    desc: 'Localize a tecla, o controle, a saída ou o acessório que precisa conferir.'
  },
  {
    icon: '/mvt/download.png',
    title: 'Testes com próximo passo',
    desc: 'Veja o que testar primeiro e como seguir conforme o resultado.'
  },
  {
    icon: '/mvt/folders-1.png',
    title: 'PDF para celular ou impressão',
    desc: 'Abra no celular ou imprima as fichas que quer deixar perto do instrumento.'
  }
];

const IDEAL_FOR = [
  {
    title: 'ENCONTRAR A FICHA PELO SINTOMA',
    desc: 'Vá direto ao problema que você percebeu no instrumento.'
  },
  {
    title: 'CONFERIR UMA TECLA QUE FALHA',
    desc: 'Compare a resposta com as teclas vizinhas e repita o teste em outro timbre.'
  },
  {
    title: 'VERIFICAR O PEDAL DE SUSTAIN',
    desc: 'Confira a entrada, a compatibilidade e o comportamento do pedal.'
  },
  {
    title: 'INVESTIGAR FALHAS DE SOM',
    desc: 'Compare fones, alto-falantes e saídas conforme os recursos do seu modelo.'
  },
  {
    title: 'CUIDAR DO INSTRUMENTO NO DIA A DIA',
    desc: 'Consulte fichas de limpeza, conservação e transporte.'
  },
  {
    title: 'SABER COMO SEGUIR APÓS O TESTE',
    desc: 'Registre o resultado e reúna informações para a assistência quando precisar.'
  }
];

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showSquarePopup, setShowSquarePopup] = useState(false);

  const handleOpenAtlasPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSquarePopup(true);
  };

  const handleCloseSquarePopup = () => {
    setShowSquarePopup(false);
  };

  const handleBuyFichas10 = () => {
    setShowSquarePopup(false);
    window.open(CHECKOUT_FICHAS_10, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToPlanos = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('planos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1930] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="w-full px-4 pt-12 pb-16 sm:py-20 bg-[#0A1930] text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Security Pill */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full mb-6 bg-[#122B49] text-[#E7F5FC] border border-[#FFDA05]/30 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-[#FFDA05]" />
            <span>Compra pelo checkout</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.08] uppercase text-white max-w-4xl mx-auto">
            Fichas Visuais de Manutenção e Diagnóstico de Teclados e Pianos Digitais
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl mt-4 font-medium text-[#E7F5FC] max-w-2xl mx-auto leading-snug">
            Uma tecla falha, o pedal não responde ou o teclado liga, mas não sai som? Abra o PDF pelo sintoma, veja na imagem onde olhar e saiba o que conferir primeiro.
          </p>

          {/* Hero Mockup Image (Não clicável) */}
          <div className="my-6 relative flex justify-center">
            <img
              src="/mockups/Mockup_Com_Novas_Capas.webp"
              alt="Fichas Visuais de Manutenção e Diagnóstico de Teclados e Pianos Digitais"
              width="900"
              height="600"
              className="max-h-[460px] sm:max-h-[500px] w-auto object-contain drop-shadow-2xl select-none"
            />
          </div>

          {/* DESTAQUES DO MATERIAL */}
          <div className="max-w-3xl mx-auto text-left bg-[#122B49] rounded-2xl p-6 sm:p-8 border border-white/10 mt-6 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-center text-[#FFDA05] mb-4 tracking-wide flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFDA05]" />
              <span>DESTAQUES DO MATERIAL</span>
            </h2>

            {/* Bullet points */}
            <ul className="space-y-3">
              {[
                '90 fichas visuais em PDF',
                'Índice clicável por sintoma',
                'Fotos e orientações de teste',
                'Próximo passo conforme o resultado',
                'Consulta no celular ou impressão'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center text-base sm:text-lg font-bold text-white">
                  <span className="w-5 h-5 rounded-full bg-[#FFDA05] flex items-center justify-center shrink-0 text-[#0A1930] shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero CTA Button */}
          <div className="mt-10">
            <a
              href="#planos"
              onClick={scrollToPlanos}
              className="inline-block px-8 sm:px-12 py-5 text-lg sm:text-xl font-black uppercase rounded-full bg-[#FFDA05] hover:bg-[#e6c400] text-[#0A1930] shadow-[0_12px_28px_-6px_rgba(255,218,5,0.45)] hover:shadow-[0_16px_32px_-4px_rgba(255,218,5,0.65)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              QUERO ACESSAR AS FICHAS
            </a>
            <p className="text-xs sm:text-sm text-[#E7F5FC] mt-3 font-medium">
              Material digital em PDF. Confira as instruções de acesso no checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: VEJA O MATERIAL POR DENTRO (Apenas imagens limpas, 1 fileira, NÃO clicáveis) */}
      <section className="w-full px-4 py-16 sm:py-24 bg-[#0A1930] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-center text-white mb-10 sm:mb-14">
            VEJA O MATERIAL POR DENTRO
          </h2>

          {/* Marquee (Scrolling Left - Pure Images - 1 Fileira - NÃO clicáveis) */}
          <div className="relative overflow-hidden w-full py-3">
            <div className="animate-marquee-left flex items-center gap-6">
              {[...AMOSTRA_IMAGES, ...AMOSTRA_IMAGES].map((item, i) => (
                <div key={`amostra-${i}`} className="flex-shrink-0 select-none">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-[360px] sm:h-[460px] w-auto object-contain block rounded-xl drop-shadow-2xl border border-white/10"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: UM GUIA PARA CONSULTAR QUANDO SURGIR UMA FALHA */}
      <section className="w-full px-4 py-16 sm:py-20 bg-[#0A1930]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-center text-white">
            UM GUIA PARA CONSULTAR QUANDO SURGIR UMA FALHA
          </h2>
          <p className="mt-3 text-center text-[#E7F5FC] text-base sm:text-lg max-w-xl mx-auto">
            Escolha o sintoma, localize na imagem o que precisa conferir e siga a ficha conforme o resultado do teste.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {GUIDES_FROM_ZERO.map((feat, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-5 flex gap-4 items-center bg-[#122B49] border border-white/10 transition-all duration-300 hover:border-[#FFDA05]/40 ${
                  idx === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full' : ''
                }`}
              >
                <img
                  src={feat.icon}
                  alt=""
                  className="h-12 w-12 shrink-0 object-contain drop-shadow select-none"
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#E7F5FC] mt-0.5 leading-snug">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CONSULTA RÁPIDA PERTO DO INSTRUMENTO */}
      <section className="w-full px-4 py-16 sm:py-20 bg-[#0A1930]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-white">
            CONSULTA RÁPIDA PERTO DO INSTRUMENTO
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#E7F5FC] max-w-2xl mx-auto leading-relaxed">
            Use as fichas durante o estudo, o ensaio ou a preparação para tocar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 max-w-3xl mx-auto">
            {/* Stat 1 */}
            <div className="rounded-2xl p-6 bg-[#122B49] border border-white/10 flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-black text-[#FFDA05] tracking-tight">
                90
              </span>
              <span className="mt-2 text-sm sm:text-base font-semibold text-[#E7F5FC]">
                fichas visuais
              </span>
            </div>

            {/* Stat 2 */}
            <div className="rounded-2xl p-6 bg-[#122B49] border border-white/10 flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-black text-[#FFDA05] tracking-tight">
                9
              </span>
              <span className="mt-2 text-sm sm:text-base font-semibold text-[#E7F5FC]">
                temas de consulta
              </span>
            </div>

            {/* Stat 3 */}
            <div className="rounded-2xl p-6 bg-[#122B49] border border-white/10 flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-black text-[#FFDA05] tracking-tight">
                PDF
              </span>
              <span className="mt-2 text-sm sm:text-base font-semibold text-[#E7F5FC]">
                para celular e impressão
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CHAMADA INTERMEDIÁRIA */}
      <section className="w-full px-4 py-16 sm:py-20 bg-[#122B49] border-y border-white/10 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#FFDA05] flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4 text-[#FFDA05]" />
            <span>CONSULTA DIGITAL EM PDF</span>
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-white leading-[1.1]">
            Saiba por onde começar quando o teclado falhar
          </h2>
          <p className="text-base sm:text-xl text-[#E7F5FC] max-w-xl mx-auto leading-relaxed">
            Encontre a ficha pelo sintoma e faça a primeira checagem com o instrumento em mãos.
          </p>

          <div className="pt-4">
            <a
              href="#planos"
              onClick={scrollToPlanos}
              className="inline-block px-10 py-4 text-base sm:text-lg font-black uppercase rounded-full bg-[#FFDA05] hover:bg-[#e6c400] text-[#0A1930] shadow-[0_10px_25px_-5px_rgba(255,218,5,0.45)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              QUERO ACESSAR AS FICHAS
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: ESTE MATERIAL É PARA VOCÊ QUE DESEJA */}
      <section className="w-full px-4 py-16 sm:py-20 bg-[#0A1930]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-center text-white">
            ESTE MATERIAL É PARA VOCÊ QUE DESEJA
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {IDEAL_FOR.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col gap-2.5 bg-[#122B49] border border-white/10 transition-all duration-300 hover:border-[#FFDA05]/40"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-[#FFDA05]/20 text-[#FFDA05] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <h3 className="font-bold text-base sm:text-lg uppercase text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#E7F5FC] pl-8 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: TUDO O QUE VOCÊ VAI RECEBER (Não clicável) */}
      <section className="w-full px-4 py-16 sm:py-20 bg-[#0A1930]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-center text-white mb-10">
            TUDO O QUE VOCÊ VAI RECEBER
          </h2>

          <div className="rounded-2xl p-6 sm:p-10 bg-[#122B49] border border-[#FFDA05]/30 shadow-2xl space-y-6 text-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold px-6 py-2 rounded-full bg-[#FFDA05] text-[#0A1930] tracking-wide uppercase shadow">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Acesso digital</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
              FICHAS VISUAIS DE MANUTENÇÃO E DIAGNÓSTICO DE TECLADOS E PIANOS DIGITAIS
            </h3>

            <p className="text-base sm:text-lg text-[#E7F5FC]">
              90 fichas de uma página, organizadas por sintoma para consulta rápida no celular ou impressão.
            </p>

            {/* Pack Bundle Mockup (Não clicável) */}
            <div className="flex justify-center my-4">
              <img
                src="/mockups/Mockup_Principal_Transparente.webp"
                alt="90 Fichas Visuais de Manutenção e Diagnóstico de Teclados e Pianos Digitais"
                width="700"
                height="500"
                className="max-h-[360px] w-auto object-contain drop-shadow-xl select-none"
              />
            </div>

            {/* Check List */}
            <div className="text-left max-w-md mx-auto pt-2">
              <ul className="divide-y divide-white/10">
                {[
                  '90 fichas visuais',
                  'Índice clicável',
                  'Referências visuais de teclas e conexões',
                  'Primeiras checagens passo a passo',
                  'Orientação conforme o resultado',
                  'Material digital em PDF'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center py-3 text-base sm:text-lg font-semibold text-white">
                    <span className="w-5 h-5 rounded-full bg-[#FFDA05] flex items-center justify-center shrink-0 text-[#0A1930]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm sm:text-base text-[#E7F5FC] italic pt-2">
              Consulte as fichas visuais pelo sintoma e saiba o que conferir primeiro com o instrumento em mãos.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Banner */}
      <section className="w-full px-4 py-14 bg-[#122B49] border-y border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            ESCOLHA A MELHOR OPÇÃO PARA VOCÊ
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#E7F5FC] max-w-xl mx-auto">
            Escolha as 90 fichas avulsas ou o Pacote Completo com os seis bônus.
          </p>
        </div>
      </section>

      {/* Section 8: SEÇÃO PRINCIPAL DE PREÇOS (Cards das Duas Ofertas) */}
      <section id="planos" className="w-full px-4 py-16 sm:py-24 bg-[#0A1930] scroll-mt-20">
        <div id="oferta" className="scroll-mt-20"></div>
        <div className="max-w-6xl mx-auto">
          {/* Top urgency badge */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-extrabold px-6 py-2.5 rounded-full bg-[#FFDA05] text-[#0A1930] shadow-md uppercase">
              <Flame className="w-4 h-4 text-[#0A1930]" />
              <span>Ofertas com pagamento único</span>
            </span>
          </div>

          {/* Grid with 2 Offer Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* CARD 1: PRODUTO PRINCIPAL — R$ 10,00 */}
            <div className="rounded-3xl p-6 sm:p-9 flex flex-col justify-between relative bg-[#122B49] border-2 border-white/15 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] text-white">
              {/* Outer top badge */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-black px-5 py-1.5 rounded-full whitespace-nowrap bg-[#0A1930] border border-[#FFDA05]/50 text-[#FFDA05] uppercase shadow-md flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>PRODUTO BÁSICO</span>
              </span>

              <div>
                {/* Title & subtitle */}
                <div className="text-center pt-2">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    90 Fichas Visuais em PDF
                  </h3>
                  <p className="text-xs sm:text-sm font-extrabold text-[#FFDA05] uppercase mt-1 tracking-wider">
                    TECLADOS E PIANOS DIGITAIS — MATERIAL DIGITAL EM PDF
                  </p>
                  <p className="text-sm text-[#E7F5FC] mt-3 leading-snug px-2">
                    Inclui o índice clicável, as referências visuais, as checagens passo a passo e a versão para consultar no celular ou imprimir.
                  </p>
                </div>

                {/* Mockup image (Não clicável) */}
                <div className="flex justify-center my-4">
                  <img
                    src="/mockups/Mockup_Principal_Transparente.webp"
                    alt="90 Fichas Visuais em PDF para Teclados e Pianos Digitais"
                    width="600"
                    height="450"
                    className="h-52 sm:h-64 w-auto object-contain select-none"
                  />
                </div>

                {/* What is included */}
                <ul className="divide-y divide-white/10 text-left text-sm sm:text-base">
                  {[
                    '90 fichas visuais em PDF',
                    'Índice clicável por sintoma',
                    'Referências visuais de teclas e conexões',
                    'Checagens passo a passo',
                    'Versão para consultar no celular ou imprimir',
                    'Acesso digital em PDF'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center py-2.5 text-white">
                      <span className="w-5 h-5 rounded-full bg-[#FFDA05] flex items-center justify-center shrink-0 text-[#0A1930]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-xs font-extrabold uppercase text-[#E7F5FC] mt-0.5 tracking-wider">
                  POR APENAS
                </p>
                <p className="text-5xl sm:text-6xl font-black mt-0.5 text-[#FFDA05] tracking-tight">
                  R$ 10,00
                </p>
                <p className="text-xs sm:text-sm mt-1 text-[#E7F5FC] font-medium">
                  Pagamento único, sem mensalidades.
                </p>

                {/* CTA Button -> Abre o Pop-up com oferta com desconto */}
                <button
                  type="button"
                  onClick={handleOpenAtlasPopup}
                  className="w-full mt-5 py-4 sm:py-5 px-6 text-center text-base sm:text-lg font-black uppercase rounded-full bg-[#FFDA05] hover:bg-[#e6c400] text-[#0A1930] shadow-[0_12px_28px_-6px_rgba(255,218,5,0.45)] hover:shadow-[0_16px_32px_-4px_rgba(255,218,5,0.65)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] tracking-tight block cursor-pointer"
                >
                  QUERO AS 90 FICHAS
                </button>

                <div className="flex justify-center pt-3">
                  <img
                    src="/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png"
                    alt="Meios de pagamento disponíveis no checkout"
                    className="h-6 w-auto object-contain opacity-80 select-none"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2: PACOTE COMPLETO — R$ 24,90 */}
            <div className="rounded-3xl p-6 sm:p-9 flex flex-col justify-between relative bg-[#122B49] border-2 border-[#FFDA05] shadow-[0_25px_60px_-15px_rgba(255,218,5,0.28)] text-white">
              {/* Outer top badge */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-black px-6 py-1.5 rounded-full whitespace-nowrap bg-[#FFDA05] text-[#0A1930] uppercase shadow-lg flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-current text-[#0A1930]" />
                <span>PACOTE COMPLETO</span>
              </span>

              <div>
                {/* Title & subtitle */}
                <div className="text-center pt-2">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    90 Fichas Visuais + 6 Bônus
                  </h3>
                  <p className="text-xs sm:text-sm font-extrabold text-[#FFDA05] uppercase mt-1 tracking-wider">
                    90 FICHAS VISUAIS EM PDF + 6 BÔNUS DIGITAIS
                  </p>
                  <p className="text-sm text-[#E7F5FC] mt-3 leading-snug px-2">
                    Inclui 90 fichas visuais em PDF + 6 bônus digitais.
                  </p>
                </div>

                {/* Mockup area: Mockup_Com_Novas_Capas (Não clicável) */}
                <div className="flex justify-center my-4">
                  <img
                    src="/mockups/Mockup_Com_Novas_Capas.webp"
                    alt="Pacote Completo — 90 Fichas Visuais em PDF + 6 Bônus Digitais"
                    width="600"
                    height="450"
                    className="h-56 sm:h-64 w-auto object-contain drop-shadow-xl select-none"
                  />
                </div>

                {/* What is included in Pacote Completo */}
                <ul className="divide-y divide-white/10 text-left text-sm sm:text-base">
                  {[
                    '90 fichas visuais em PDF',
                    'Índice clicável por sintoma',
                    'Referências visuais de teclas e conexões',
                    'Checagens passo a passo',
                    'Versão para consultar no celular ou imprimir',
                    'Acesso digital em PDF'
                  ].map((item, i) => (
                    <li key={`base-${i}`} className="flex gap-3 items-center py-2.5 text-[#A8BBD0]">
                      <span className="w-5 h-5 rounded-full bg-[#FFDA05] flex items-center justify-center shrink-0 text-[#0A1930]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                  {[
                    'Manual de Ferramentas e Acessórios',
                    'Tabela de Especificações de Fontes, Pedais e Conexões',
                    'Mapa de Diagnóstico Rápido',
                    'Manual de Manutenção Preventiva',
                    'Catálogo Visual de Peças e Componentes',
                    'Checklist de Inspeção'
                  ].map((bonus, i) => (
                    <li key={`bonus-${i}`} className="flex gap-3 items-center py-2.5 text-white">
                      <span className="w-5 h-5 rounded-full bg-[#FFDA05] flex items-center justify-center shrink-0 text-[#0A1930]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="font-medium">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-xs font-extrabold uppercase text-[#E7F5FC] mt-0.5 tracking-wider">
                  POR APENAS
                </p>
                <p className="text-5xl sm:text-6xl font-black mt-0.5 text-[#FFDA05] tracking-tight">
                  R$ 24,90
                </p>
                <p className="text-xs sm:text-sm mt-1 text-[#E7F5FC] font-medium">
                  Pagamento único, sem mensalidades.
                </p>

                {/* Direct CTA button to R$ 24,90 checkout */}
                <a
                  href={CHECKOUT_PACOTE_24}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-5 py-4 sm:py-5 px-6 text-center text-base sm:text-lg font-black uppercase rounded-full bg-[#FFDA05] hover:bg-[#e6c400] text-[#0A1930] shadow-[0_12px_28px_-6px_rgba(255,218,5,0.5)] hover:shadow-[0_16px_32px_-4px_rgba(255,218,5,0.75)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] tracking-tight block"
                >
                  QUERO O PACOTE COMPLETO
                </a>

                <div className="flex justify-center pt-3">
                  <img
                    src="/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png"
                    alt="Meios de pagamento disponíveis no checkout"
                    className="h-6 w-auto object-contain opacity-80 select-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COMPRA SEGURA & GARANTIA info block */}
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl p-6 bg-[#122B49] border border-white/10 space-y-3">
            <div className="flex gap-3 items-center">
              <ShieldCheck className="w-6 h-6 text-[#FFDA05] shrink-0" />
              <h4 className="font-black uppercase text-base sm:text-lg text-white">
                COMPRA, GARANTIA E SATISFAÇÃO
              </h4>
            </div>
            <p className="text-sm sm:text-base text-[#E7F5FC] leading-relaxed">
              Finalize seu pedido pelo checkout. As instruções de acesso ao PDF e as condições de garantia e reembolso são informadas durante a compra.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-[#E7F5FC]/80">
              <span>Garantia e satisfação</span>
              <span>Consulte condições no checkout</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: GARANTIA */}
      <section className="w-full px-4 py-16 sm:py-20 bg-[#0A1930]">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-[280px_1fr] gap-8 sm:gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/aecffb76-e08d-49e8-97bb-287e479d0755/garantia-selo-1789576662870.webp"
              alt="Selo de garantia e satisfação"
              width="300"
              height="300"
              className="w-full max-w-[240px] sm:max-w-[280px] object-contain drop-shadow-2xl select-none"
              loading="lazy"
            />
          </div>

          <div className="text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-white leading-tight mb-4">
              GARANTIA E SATISFAÇÃO
            </h2>

            <p className="text-base sm:text-lg mb-4 text-[#E7F5FC] leading-relaxed">
              Finalize seu pedido pelo checkout. As instruções de acesso ao PDF e as condições de garantia e reembolso são informadas durante a compra.
            </p>

            <ul className="space-y-3 mb-5">
              {[
                'Material digital em PDF para consultar no celular ou imprimir',
                '90 fichas visuais organizadas por sintoma',
                'Instruções de entrega e condições informadas no checkout'
              ].map((bullet, bIdx) => (
                <li key={bIdx} className="flex gap-2.5 items-center text-sm sm:text-base text-[#E7F5FC]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFDA05] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-[#E7F5FC]/85 leading-relaxed">
              Confira todas as informações de acesso, meios de pagamento e garantia diretamente no checkout antes de concluir o pedido.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: DÚVIDAS FREQUENTES */}
      <section className="w-full px-4 py-16 sm:py-24 bg-[#0A1930]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-center text-white mb-10">
            DÚVIDAS FREQUENTES
          </h2>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFDA05] transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={`text-2xl sm:text-3xl font-light text-[#E7F5FC]/70 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-45 text-[#FFDA05]' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 text-base sm:text-lg text-[#E7F5FC] leading-relaxed pr-8 animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final CTA button under FAQ */}
          <div className="mt-14 text-center">
            <a
              href="#planos"
              onClick={scrollToPlanos}
              className="inline-block px-10 py-5 text-lg font-black uppercase rounded-full bg-[#FFDA05] hover:bg-[#e6c400] text-[#0A1930] shadow-[0_12px_28px_-6px_rgba(255,218,5,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              QUERO ACESSAR AS FICHAS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-14 text-center text-xs sm:text-sm text-[#E7F5FC]/70 space-y-4 bg-[#071224] border-t border-white/10">
        <p className="font-bold text-sm sm:text-base text-white/90">
          ©️ Fichas Visuais de Manutenção e Diagnóstico de Teclados e Pianos Digitais — Todos os direitos reservados.
        </p>
        <p className="max-w-3xl mx-auto leading-relaxed text-[#E7F5FC]/60">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar as informações reais do material e usamos imagens reais das fichas visuais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros.
        </p>
      </footer>

      {/* POP-UP QUADRADO DESTACADO */}
      {showSquarePopup && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
          onClick={handleCloseSquarePopup}
        >
          <div
            className="relative w-[92vw] max-w-[430px] aspect-square bg-[#122B49] border-2 border-[#FFDA05] text-white rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.8)] flex flex-col justify-between items-center text-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Discrete Close Button (X) */}
            <button
              onClick={handleCloseSquarePopup}
              className="absolute top-3 right-3 p-2 rounded-full bg-[#0A1930]/80 hover:bg-[#0A1930] text-[#E7F5FC] hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Fechar pop-up"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Top Tag & Title */}
            <div className="w-full pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1 rounded-full bg-[#FFDA05] text-[#0A1930] uppercase shadow-sm">
                <Flame className="w-3.5 h-3.5 text-[#0A1930] fill-current" />
                <span>OFERTA ESPECIAL</span>
              </span>

              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mt-2 leading-tight">
                Leve as 90 fichas + 6 bônus
              </h3>

              <p className="text-[11px] sm:text-xs text-[#E7F5FC] mt-1 leading-snug px-1 font-medium">
                Receba 90 fichas visuais em PDF + 6 bônus digitais.
              </p>
            </div>

            {/* Mockup image */}
            <div className="my-1 flex justify-center items-center">
              <img
                src="/mockups/Mockup_Com_Novas_Capas.webp"
                alt="Pacote Completo — 90 Fichas Visuais em PDF + 6 Bônus Digitais"
                className="max-h-28 sm:max-h-36 w-auto object-contain drop-shadow-md select-none"
              />
            </div>

            {/* Price announcement */}
            <div className="w-full py-1.5 border-y border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-[#FFDA05] tracking-tight">
                R$ 18,90
              </p>
              <p className="text-[10px] text-[#E7F5FC] font-medium">
                Pagamento único, sem mensalidades.
              </p>
            </div>

            {/* Actions */}
            <div className="w-full space-y-2 pb-1">
              <a
                href={CHECKOUT_UPSELL_18}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center text-xs sm:text-sm font-black uppercase rounded-full bg-[#FFDA05] hover:bg-[#e6c400] text-[#0A1930] shadow-[0_8px_20px_-4px_rgba(255,218,5,0.45)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] block"
              >
                QUERO O PACOTE COMPLETO POR R$ 18,90
              </a>

              <button
                type="button"
                onClick={handleBuyFichas10}
                className="w-full py-1 text-center text-[11px] font-bold text-[#E7F5FC] hover:text-[#FFDA05] transition-colors cursor-pointer underline underline-offset-2"
              >
                PREFIRO SÓ AS 90 FICHAS POR R$ 10,00
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
