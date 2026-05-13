/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Tv, 
  Settings, 
  Smartphone, 
  Wifi, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  Zap, 
  ShieldCheck, 
  Truck,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-colors"
  >
    <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 text-yellow-400">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-600 selection:text-white">
      {/* Promo Banner */}
      <div className="bg-green-700 py-2 text-center text-xs font-bold uppercase tracking-widest px-4 border-b border-yellow-400/30">
        FRETE GRÁTIS PARA TODO O BRASIL - PROMOÇÃO DE LANÇAMENTO
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent italic tracking-tighter">
              WORLDCUP MAX
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">

            <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
            <a href="#especificacoes" className="hover:text-white transition-colors">Especificações</a>
            <a href="#oferta" className="bg-yellow-400 text-black px-5 py-2.5 rounded-full hover:bg-green-600 hover:text-white transition-all transform hover:scale-105 font-black">
              COMPRAR AGORA
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-center"
          >

            <a href="#recursos" className="text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Recursos</a>
            <a href="#oferta" className="bg-white text-black py-3 rounded-full font-bold" onClick={() => setIsMenuOpen(false)}>COMPRAR AGORA</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop" 
            alt="Stadium Background" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-yellow-400/30">
              <Zap size={14} className="fill-current" />
              Sinta a Emoção do Estádio em Casa
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.95] tracking-tight uppercase">
              Transforme sua <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent italic">Sala no Estádio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg font-medium drop-shadow-lg">
              Tecnologia de projeção cinematográfica portátil de última geração. Imagem de até 200 polegadas para uma imersão total nos jogos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#oferta" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-green-600/20 transition-all group border border-green-400/30">
                GARANTIR O MEU AGORA
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=user${i}`} className="w-8 h-8 rounded-full border-2 border-black" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-gray-500 font-medium">+15.000 Clientes Felizes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Product Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-600/20 to-transparent rounded-full blur-[100px] z-10"
        />
        <motion.img 
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/689891603_1307085300776923_8972242133803888524_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XMvUgxS8RMUQ7kNvwEUtAF9&_nc_oc=AdoAKE93JFwGShUzJQOAG2auhcbL1goIoa1Ymaa5Oe8eNbeOMhGbVKvzD9WQ3fBQ50MFh7yORuF1LHFA6nz1AvXw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD5QFYptVP-3PG4KymIKpzUX_hCXcY17GlEj4zV06M5ESYRw&oe=6A2B5F2B" 
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[550px] h-auto object-contain z-20 drop-shadow-[0_20px_50px_rgba(34,197,94,0.5)] pointer-events-none rounded-2xl border border-yellow-400/20"
          alt="Copa Max Projector"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* Social Proof Stats */}
      <section className="py-12 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-white">4K</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Resolução Ultra</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">200"</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Até 200 Polegadas</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">5000+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Unidades Vendidas</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="recursos" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            O Projetor que vai mudar a sua forma de <span className="text-yellow-400">ver o jogo</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Combinamos portabilidade extrema com potência cinematográfica para criar a experiência definitiva do torcedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={Tv} 
            title="Maxi-Tela" 
            description="Projete até 200 polegadas em qualquer parede branca. É como ter um telão de LED em casa."
          />
          <Feature 
            icon={Smartphone} 
            title="Espelhamento" 
            description="Conecte seu celular Android ou iOS e espelhe o Premiere, Globoplay ou YouTube instantaneamente."
          />
          <Feature 
            icon={Wifi} 
            title="Wi-Fi de Alta Velocidade" 
            description="Streamings sem travamentos durante o gol. Tecnologia 5G integrada para baixa latência."
          />
          <Feature 
            icon={Settings} 
            title="Fácil Ajuste" 
            description="Correção de keystone automática. Coloque o projetor onde quiser e a imagem sempre estará reta."
          />
        </div>
      </section>



      {/* Pricing / CTA Section */}
      <section id="oferta" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111] rounded-[48px] p-8 md:p-20 border border-white/5 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img 
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/691953395_3463576867153218_3165953873132356936_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=CNFVazs21jcQ7kNvwFo-kfN&_nc_oc=AdrVXuHABya6bE4WGJTX4nuRk5gpJ2iCEFtv0wFzfOQ6mqnSi5LTZka21cbaj2xMF33zLIazb2l-kGh9CMLBCApw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD5QGDnsxilmJj0suy9Z6ORpL_irGWpmk6KZwYeb8aVziFXg&oe=6A2B4E58" 
                alt="Copa Max Box" 
                className="rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="text-yellow-400 font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Star size={18} fill="currentColor" />
                O FAVORITO DOS TORCEDORES EM 2024
              </div>
              <h2 className="text-5xl font-black mb-6 uppercase tracking-tight italic">
                OFERTA POR <span className="text-green-500">TEMPO LIMITADO</span>
              </h2>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="text-gray-500 line-through text-2xl font-bold">R$ 397,00</span>
                  <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-black uppercase italic">
                    OFERTA ESPECIAL
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 font-bold text-sm">POR APENAS</span>
                  <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                    R$ 297,00
                  </span>
                  <span className="text-yellow-400 font-bold mt-2 font-mono">OU ATÉ 12X DE R$ 29,82</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Truck size={18} className="text-green-500" />
                  Envio Imediato
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <ShieldCheck size={18} className="text-green-500" />
                  1 Ano Garantia
                </div>
              </div>

              <button className="w-full bg-yellow-400 hover:bg-green-600 text-black hover:text-white px-8 py-6 rounded-2xl font-black text-2xl transition-all transform hover:scale-[1.02] shadow-2xl">
                QUERO O MEU AGORA
              </button>
              <p className="text-center md:text-left text-gray-500 text-sm mt-4">
                Compra 100% Segura através do Mercado Pago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-black italic tracking-tighter mb-6 bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
              WORLDCUP MAX
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Dedicados a levar a emoção do esporte para dentro de cada casa brasileira através da melhor tecnologia de projeção do mercado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-green-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-yellow-400 mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rastreio de Pedido</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Troca</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-yellow-400 mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>suporte@worldcupmax.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Atendimento: Seg-Sex, 09h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-xs text-gray-600">
          © 2024 WorldCup Max Projeções LTDA. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
        </div>
      </footer>
    </div>
  );
}
