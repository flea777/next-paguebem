import Image from 'next/image';

interface Testimony {
    id: number;
    name: string;
    company: string;
    text: string;
    imgUrl: string;
}

export const testimonys: Testimony[] = [
    {
        id: 1,
        name: 'Álvaro Leal',
        company: 'Pague Bem Brasil',
        text: 'Estou extremamente satisfeito com a Pague Bem Brasil! O serviço é eficiente, e a praticidade de pagar boletos com taxas menores fez toda a diferença nas minhas finanças. A plataforma é fácil de usar e o atendimento ao cliente sempre me ajudou prontamente. Recomendo a todos que buscam uma solução ágil e econômica para pagamentos.',
        imgUrl: '/icon_testimonialSection_alvaro_leal.jpeg'
    },
    {
        id: 2,
        name: 'Mariana Costa',
        company: 'Smart Solutions',
        text: 'A Pague Bem Brasil revolucionou a maneira como gerencio meus pagamentos. As taxas acessíveis e a interface intuitiva tornam tudo mais prático. O suporte é sempre ágil e amigável, o que me dá muita confiança. Recomendo com certeza!',
        imgUrl: '/icon_testimonialSection_mariana_costa.jpeg'
    },
    {
        id: 3,
        name: 'Lucas Silva',
        company: 'InovaTech',
        text: 'Desde que comecei a usar a Pague Bem Brasil, minhas finanças estão mais organizadas. A plataforma é rápida e confiável, e as taxas reduzidas são um grande benefício. O atendimento ao cliente é excelente, sempre pronto para ajudar.',
        imgUrl: '/icon_testimonialSection_lucas_silva.jpeg'
    },
    {
        id: 4,
        name: 'Fernanda Oliveira',
        company: 'Oliveira & Co',
        text: 'Estou muito satisfeita com a experiência na Pague Bem Brasil. O processo de pagamento é simples e sem complicações, e o suporte é excelente. Uma ótima opção para quem quer economizar e ter mais praticidade.',
        imgUrl: '/icon_testimonialSection_fernanda_oliveira.jpeg'
    },
    {
        id: 5,
        name: 'Carlos Mendes',
        company: 'Tech Vision',
        text: 'A Pague Bem Brasil se tornou uma ferramenta indispensável para meus negócios. A economia nas taxas e a eficiência do serviço fazem toda a diferença. Super recomendo para quem precisa de uma solução prática e econômica!',
        imgUrl: '/icon_testimonialSection_carlos_mendes.jpeg'
    },
    {
        id: 6,
        name: 'Beatriz Rocha',
        company: 'Beta Creative',
        text: 'Uso a Pague Bem Brasil há algum tempo e estou encantada com a agilidade do serviço. O atendimento ao cliente é sempre atencioso, e a plataforma é muito fácil de usar. A economia é grande e o processo é confiável!',
        imgUrl: '/icon_testimonialSection_beatriz_rocha.jpeg'
    },
    {
        id: 7,
        name: 'Rafael Andrade',
        company: 'Grupo Andrade',
        text: 'A Pague Bem Brasil trouxe uma nova eficiência para meus pagamentos. A plataforma é intuitiva, as taxas são baixas e o atendimento é excelente. Com certeza continuarei usando e recomendando!',
        imgUrl: '/icon_testimonialSection_rafael_andrade.jpeg'
    }
];

const idClick: number = 1;

const TestimonialSection = () => {
    const testimony = testimonys.find(t => t.id === idClick);

    if(!testimony) return;

    return ( 
    <section className="flex flex-col bg-backgroundGray w-full items-center pt-12 gap-12">
        <h1 className="font-spartan text-5xl font-bold text-testimonialTitleGreen">O que nossos clientes andam falando?</h1>
            <div className="flex flex-row max-w-7xl">
                <div className="flex flex-col items-center w-1/3 justify-center bg-blue-200">
                    <Image className="rounded-full shadow-custom" 
                    src={testimony.imgUrl} 
                    alt={testimony.name} 
                    width={250} 
                    height={250}/>
                    <h2 className="font-inter font-bold text-nameTitleGreen text-2xl mt-5 mx-11">{testimony.name}</h2>
                    <p className="font-inter text-lg text-paragraphBlack mx-11">{testimony.company}</p>
                </div>

                <div className="flex flex-col w-2/3 mx-4 bg-red-100 gap-12   pb-10">
                    <p className="font-inter text-2xl leading-10 text-paragraphBlack mt-11">{testimony.text}</p>
                    <div className="flex flex-row gap-6">
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGreen border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGray border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGray border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGray border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGray border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGray border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                        <div className="flex w-24 h-16 bg-white rounded-2xl border border-borderGray border-solid shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"></div>
                    </div>
                </div>
            </div>
            
    </section> 
        );
}
 
export default TestimonialSection;
