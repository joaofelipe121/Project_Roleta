import React from 'react';
import { Dice6, Clock, Target, Headphones, ChevronRight, CheckCircle, MessageCircle, Shield } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Dice6 className="w-8 h-8 text-red-600 animate-pulse" />
      <span className="text-2xl font-bold">Roleta<span className="text-red-600">.AI</span></span>
    </div>
  );
}

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-600/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all">
            Acessar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634205234892-1e0b14a3561c')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              Transforme Suas probabilidades em Resultados com o <span className="text-red-600">Roleta.AI</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Descubra como milhares de pessoas estão lucrando com inteligência artificial.
            </p>
          </div>
        </div>
      </header>

      {/* VSL Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-black p-4 rounded-lg aspect-video mb-8">
            <div className="w-full h-full bg-zinc-800 rounded flex items-center justify-center">
              <span className="text-gray-400">Área do VSL</span>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
            Garanta sua Vaga Agora!
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-red-600" />,
                title: "Análises em Tempo Real",
                description: "Receba análises avançadas e estratégias personalizadas em tempo real, direto no grupo - maximize seus resultados com inteligência."
              },
              {
                icon: <Target className="w-12 h-12 text-red-600" />,
                title: "Sinais Exclusivos",
                description: "Decisões que transformam seus lucros! Nossa inteligência artificial entrega sinais exclusivos e precisos, para que você tome as decisões mais lucrativas no momento certo."
              },
              {
                icon: <Headphones className="w-12 h-12 text-red-600" />,
                title: "Suporte Premium",
                description: "Aprendizado contínuo para maximizar seus lucros! Nosso bot utiliza tecnologia avançada de Machine Learning, ou seja, o ele aprende com cada movimento da roleta para oferecer previsões cada vez mais precisas e assertivas. Com nossa inteligência adaptativa, você sempre estará um passo à frente."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg border border-red-600/20 hover:border-red-600 transition-all">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[url('https://images.unsplash.com/photo-1642483200566-e89847b3c9f4')] bg-cover bg-center h-96 rounded-lg"></div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Por Que o Roleta.AI é Diferente?</h2>
              <p className="text-gray-300 mb-8">
                No Roleta.AI, utilizamos uma tecnologia de ponta para trazer estratégias altamente eficazes. 
                Tudo isso entregue de forma simples, prática e diretamente no seu celular. 
                É a sua chance de fazer parte de um grupo seleto que lucra todos os dias!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                Quero Entrar Agora!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Cadastre-se agora e acesse o grupo exclusivo.",
              "Receba os melhores sinais e estratégias diretamente no Telegram.",
              "Aplique as instruções e veja os resultados.",
              "Entre em contato com o suporte sempre que precisar."
            ].map((step, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-red-600/20">
                <div className="text-red-600 text-4xl font-bold mb-4">{index + 1}</div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Oferta Especial Para Quem Age Rápido!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Não deixe essa oportunidade escapar! Aproveite a promoção limitada e garanta o acesso ao Roleta.AI 
            por um preço que você nunca verá novamente.
          </p>
          <div className="mb-8">
            <div className="text-gray-400 line-through text-2xl">De R$247,00</div>
            <div className="text-red-600 text-6xl font-bold">R$97,00</div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg font-bold text-xl transition-all">
            Aproveitar Oferta Agora!
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "O Roleta.AI mudou meu jogo! Estou lucrando como nunca antes.",
                author: "Carlos",
                location: "São Paulo"
              },
              {
                text: "Receber sinais diretamente no Telegram é um divisor de águas. Recomendo a todos!",
                author: "Ana",
                location: "Rio de Janeiro"
              },
              {
                text: "Simples, eficiente e lucrativo. O suporte é incrível!",
                author: "João",
                location: "Belo Horizonte"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                <MessageCircle className="w-8 h-8 text-red-600 mb-4" />
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="text-sm text-gray-400">
                  {testimonial.author}, {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Sem Riscos: Garantia de Satisfação Total</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos tão confiantes no poder do Roleta.AI que oferecemos uma garantia total. 
            Se você não estiver satisfeito, devolvemos o seu dinheiro.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Ainda com Dúvidas?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Como acesso o grupo do Telegram?",
                answer: "Após a compra, você receberá um e-mail com o link de acesso ao grupo exclusivo do Telegram."
              },
              {
                question: "Preciso de experiência prévia?",
                answer: "Não é necessário experiência prévia. Nosso sistema foi desenvolvido para ser intuitivo e fácil de usar."
              },
              {
                question: "O suporte está incluso?",
                answer: "Sim! Você terá acesso ao nosso suporte premium 24/7 para tirar todas as suas dúvidas."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Clique Aqui e Transforme Sua Vida Financeira Agora!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900 border-t border-red-600/20">
        <div className="container mx-auto px-4 text-center">
          <Logo />
          <p className="text-gray-400 mt-4">&copy; 2024 Roleta.AI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;