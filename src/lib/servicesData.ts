import { Services } from '../types';

import erikaImg from '../assets/images/professionals/erika.png';
import karinaImg from '../assets/images/professionals/karina.png';
import elaineImg from '../assets/images/professionals/elaine.png';
import mirellaImg from '../assets/images/professionals/mirella.png';
import lucasImg from '../assets/images/professionals/lucas.png';

import drenagemHero from '../assets/images/specialties/actions/drenagem/drenagem-banner.jpg';
import fisioHero from '../assets/images/specialties/actions/fisioterapia/fisio-banner.jpeg';
import pilatesHero from '../assets/images/specialties/actions/pilates/pilates-banner.jpg';
import toHero from '../assets/images/specialties/actions/terapiaOcupacional/to-banner.jpeg';
import abaHero from '../assets/images/specialties/actions/terapiaABA/aba-banner.png';
import rpgHero from '../assets/images/specialties/actions/RPG/rpg-banner.jpeg';
import manualHero from '../assets/images/specialties/actions/terapiaManual/manual-banner.jpeg';
import odontoHero from '../assets/images/specialties/actions/odontologia/odonto-banner.jpeg';

export const servicesData: Services = {
  drenagem: {
    title: "Drenagem Linfática",
    description: "A drenagem linfática é uma técnica de massagem terapêutica, realizada com movimentos suaves e precisos, que estimula o sistema linfático a trabalhar de forma mais acelerada. O resultado é a eliminação do excesso de líquidos e toxinas, promovendo alívio de inchaços, bem-estar e melhora da saúde.",
    heroImage: drenagemHero,
    accordionTitle: "Nossas Aplicações e Benefícios",
    accordionItems: [
      {
        title: "Drenagem Pós-Operatória",
        content: "Essencial para a recuperação de cirurgias plásticas e outros procedimentos. A drenagem acelera a cicatrização, reduz o inchaço (edema), diminui hematomas, alivia dores e ajuda a prevenir a formação de fibrose, garantindo um resultado mais satisfatório."
      },
      {
        title: "Drenagem para Gestantes",
        content: "Proporciona alívio e conforto durante a gravidez. Com técnica especializada e segura para a gestante, a drenagem melhora a circulação e reduz significativamente o inchaço nas pernas, pés e mãos, além de promover um relaxamento profundo para a futura mamãe."
      },
      {
        title: "Redução de Lipedemas e Retenção de Líquido",
        content: "Ideal para o manejo dos sintomas do lipedema e para combater a retenção de líquidos. A drenagem linfática auxilia na eliminação do excesso de fluido acumulado, aliviando o inchaço, a sensação de peso e o desconforto, proporcionando mais bem-estar e melhora na qualidade de vida."
      },
      {
        title: "Relaxamento e Bem-Estar",
        content: "Além dos benefícios terapêuticos, a drenagem linfática é uma experiência profundamente relaxante. Seus movimentos suaves e rítmicos acalmam o sistema nervoso, aliviam o estresse e a ansiedade, e melhoram a qualidade do sono, contribuindo para a saúde integral do corpo e da mente."
      }
    ],
    specialistsTitle: "Nossas Especialistas",
    specialists: [
      {
        name: "Karina",
        specialty: "Fisioterapeuta em Saúde da Mulher",
        shortDescription: "Drenagem Geral",
        img: karinaImg,
        fullDescription: "Karina dedica-se à saúde e bem-estar feminino em todas as fases da vida. É especialista em drenagem linfática para gestantes, aliviando o desconforto do inchaço, e também atua com a drenagem para fins estéticos e de relaxamento, ajudando a combater a retenção de líquido e a promover uma sensação de leveza.",
        callToWhatsapp: "Olá! Gostaria de saber mais sobre a Drenagem Linfática e bem-estar com a fisioterapeuta Karina."
      }
    ],
    ctaText: "Pronta para sentir a leveza e o bem-estar que seu corpo merece?"
  },
  fisioterapia: {
    title: "Fisioterapia",
    description: "A fisioterapia é a ciência que estuda, previne e trata os distúrbios do movimento humano. Na Vitta Integrale, oferecemos um tratamento humanizado e personalizado para reabilitar, fortalecer e devolver a qualidade de vida aos nossos pacientes, seja qual for a sua necessidade.",
    heroImage: fisioHero,
    accordionTitle: "Nossas Especialidades em Fisioterapia",
    accordionItems: [
      {
        title: "Neurológica",
        content: "Atua na reabilitação de pacientes com doenças neurológicas, como AVC, Parkinson, lesões medulares e paralisia cerebral. Nosso objetivo é restaurar a função motora, melhorar o equilíbrio e a coordenação, promovendo maior independência nas atividades diárias."
      },
      {
        title: "Pélvica",
        content: "Trata disfunções do assoalho pélvico, como incontinência urinária, dor pélvica crônica e prepara o corpo para o parto e pós-parto. Utilizamos técnicas especializadas para fortalecer a musculatura e restaurar a função, melhorando significativamente a qualidade de vida."
      },
      {
        title: "Cardiorrespiratória",
        content: "Focada na prevenção e tratamento de doenças cardíacas e respiratórias. Através de exercícios supervisionados e técnicas de higiene brônquica, buscamos melhorar a capacidade pulmonar, a resistência física e o bem-estar geral de pacientes com condições como asma, DPOC e pós-operatório cardíaco."
      },
      {
        title: "Pediátrica",
        content: "Cuidamos do desenvolvimento motor de bebês e crianças com atrasos, síndromes genéticas ou condições neurológicas. De forma lúdica e interativa, estimulamos o movimento correto, a força e o equilíbrio, garantindo que cada criança atinja seu máximo potencial."
      },
      {
        title: "Ortopédica",
        content: "Especializada na reabilitação de lesões musculares, fraturas, entorses e pós-operatórios. Nosso foco é aliviar a dor, restaurar a mobilidade, fortalecer os músculos e acelerar sua recuperação para que você possa retornar às suas atividades com segurança e confiança."
      },
      {
        title: "Geriátrica",
        content: "Dedicada a promover a saúde e a qualidade de vida para idosos. Atuamos na prevenção de quedas, na melhora do equilíbrio, força e flexibilidade, visando manter a independência funcional e a autonomia para uma vida mais ativa e segura."
      }
    ],
    specialistsTitle: "Nossos Especialistas",
    specialists: [
      {
        name: "Érika Shirley",
        specialty: "Fisioterapeuta Pediátrica e Neurológica",
        shortDescription: "Fisioterapeuta",
        img: erikaImg,
        fullDescription: "Érika é uma fisioterapeuta dedicada a oferecer um tratamento completo e humanizado. Com vasta experiência e uma especialização destacada no atendimento de crianças e pacientes com distúrbios neurológicos (neuropediatria), sua abordagem integrada permite tratar com a mesma excelência pacientes adultos com queixas ortopédicas, dores crônicas e outras necessidades de reabilitação. Ela utiliza técnicas avançadas para promover independência e qualidade de vida a todos os seus pacientes.",
        callToWhatsapp: "Olá! Vi no site sobre a Fisioterapia Pediátrica e Neurológica com a Érika Shirley e gostaria de mais informações."
      },
      {
        name: "Karina",
        specialty: "Fisioterapeuta Ortopédica e Traumatológica",
        shortDescription: "Fisioterapeuta",
        img: karinaImg,
        fullDescription: "Karina é uma fisioterapeuta versátil, comprometida com a recuperação funcional de seus pacientes. Seu forte enfoque está na reabilitação de lesões musculoesqueléticas (ortopedia e traumatologia), tratando desde atletas a idosos. Além de sua especialidade, possui ampla capacidade para atender outras áreas, como saúde da mulher e disfunções posturais, utilizando uma combinação de terapia manual, cinesioterapia e recursos modernos para restaurar a função global do corpo.",
        callToWhatsapp: "Olá! Tenho interesse na Fisioterapia Ortopédica com a especialista Karina e gostaria de agendar uma avaliação."
      },
      {
        name: "Elaine",
        specialty: "Fisioterapeuta Cardiorrespiratória",
        shortDescription: "Fisioterapeuta",
        img: elaineImg,
        fullDescription: "Elaine é uma fisioterapeuta experiente, focada em promover saúde e bem-estar. Sua principal área de especialização é a fisioterapia cardiorrespiratória, essencial na reabilitação de pacientes com DPOC, asma e pós-cirúrgicos cardíacos. Para além desse campo, Elaine atua com maestria na fisioterapia geral, tratando condições ortopédicas e aplicando técnicas como RPG para correção postural e alívio de dores, garantindo um cuidado integral e personalizado a cada paciente.",
        callToWhatsapp: "Olá! Gostaria de mais informações sobre a Fisioterapia Cardiorrespiratória com a especialista Elaine."
      }
    ],
    ctaText: "Pronto para iniciar sua jornada de recuperação e bem-estar?"
  },
  pilates: {
    title: "Pilates",
    description: "O método Pilates é uma forma de exercício que integra corpo e mente, focando no fortalecimento do core, na melhora da postura e no aumento da flexibilidade. Na Vitta Integrale, nossas aulas são personalizadas para atender aos seus objetivos, seja para reabilitação, condicionamento físico ou bem-estar geral.",
    heroImage: pilatesHero,
    accordionTitle: "Nossas Modalidades e Benefícios do Pilates",
    accordionItems: [
      {
        title: "Pilates Clínico e Reabilitação",
        content: "Guiado por fisioterapeutas, o Pilates Clínico é uma ferramenta poderosa para a reabilitação de lesões, alívio de dores crônicas (especialmente na coluna) e recuperação pós-cirúrgica. Os exercícios são adaptados para fortalecer e estabilizar o corpo de forma segura e eficaz."
      },
      {
        title: "Fortalecimento e Condicionamento Físico",
        content: "Para quem busca um corpo mais forte, definido e consciente. O Pilates trabalha a musculatura profunda do abdômen e das costas, tonifica braços e pernas, melhora a resistência e a consciência corporal, resultando em um condicionamento físico completo e equilibrado."
      },
      {
        title: "Pilates para Gestantes",
        content: "Uma prática segura e altamente recomendada durante a gravidez. Ajuda a fortalecer o assoalho pélvico, alivia dores lombares comuns na gestação, melhora a circulação e a postura, preparando o corpo para o parto e contribuindo para uma recuperação mais rápida no pós-parto."
      },
      {
        title: "Melhora da Postura e Flexibilidade",
        content: "Combata os efeitos de longas horas na mesma posição. O Pilates promove o realinhamento da coluna, aumenta a flexibilidade e a mobilidade das articulações, aliviando tensões musculares e dores. O resultado é uma postura mais ereta e um corpo mais alongado e livre de desconfortos."
      }
    ],
    specialistsTitle: "Nossa Especialista",
    specialists: [
      {
        name: "Karina",
        specialty: "Fisioterapeuta e Instrutora de Pilates Clínico",
        shortDescription: "Fisioterapeuta e Instrutora de Pilates",
        img: karinaImg,
        fullDescription: "Karina une sua sólida formação em Fisioterapia com a paixão pelo método Pilates para oferecer uma abordagem terapêutica completa. Ela desenvolve planos de tratamento individualizados, utilizando o Pilates para reabilitar lesões, corrigir desvios posturais e aliviar dores crônicas. Sua expertise também abrange o Pilates para populações especiais, como gestantes e idosos, focando sempre na segurança, precisão e bem-estar de cada aluno.",
        callToWhatsapp: "Olá! Gostaria de agendar uma avaliação ou saber mais sobre as aulas de Pilates com a fisioterapeuta Karina."
      }
    ],
    ctaText: "Pronto para transformar seu corpo e mente com o Pilates?"
  },
  RPG: {
    title: "Reeducação Postural Global (RPG)",
    description: "O RPG é um método fisioterapêutico que busca a correção da postura através de exercícios específicos, alongamentos e técnicas de respiração. Na Vitta Integrale, focamos em identificar e tratar a causa das dores e alterações posturais, proporcionando alívio, realinhamento corporal e prevenção de futuras lesões.",
    heroImage: rpgHero,
    accordionTitle: "Benefícios da RPG",
    accordionItems: [
      {
        title: "Alívio de Dores Crônicas",
        content: "A RPG é altamente eficaz no tratamento de dores crônicas, como lombalgias, cervicalgias e dores de cabeça tensionais. Através da correção das cadeias musculares e do alinhamento postural, reduzimos a pressão sobre as articulações e músculos, proporcionando alívio duradouro."
      },
      {
        title: "Correção Postural",
        content: "A RPG atua na identificação e correção de desvios posturais como escoliose, hipercifose e hiperlordose. O tratamento melhora a simetria corporal, a distribuição de carga e a consciência corporal, resultando em uma postura mais ereta e saudável."
      },
      {
        title: "Melhora de Flexibilidade e Mobilidade",
        content: "Com exercícios de alongamento específicos e globais, a RPG aumenta a flexibilidade dos músculos e a mobilidade das articulações. Isso não só melhora a amplitude de movimento, mas também previne rigidez e lesões, facilitando as atividades diárias."
      },
      {
        title: "Prevenção de Lesões",
        content: "Ao realinhar o corpo e fortalecer a musculatura profunda, a RPG cria uma base sólida para a prevenção de futuras lesões musculoesqueléticas, especialmente em atletas ou pessoas que realizam movimentos repetitivos no trabalho."
      }
    ],
    specialistsTitle: "Nossa Especialista",
    specialists: [
      {
        name: "Elaine",
        specialty: "Fisioterapeuta",
        shortDescription: "Fisioterapeuta",
        img: elaineImg,
        fullDescription: "Elaine combina sua expertise em fisioterapia com a metodologia da RPG e Pilates para oferecer um tratamento completo para seus pacientes. Ela foca no fortalecimento do core, na melhora da consciência corporal e no alongamento, sendo ideal para quem busca reabilitação, prevenção e bem-estar através do movimento.",
        callToWhatsapp: "Olá! Gostaria de saber mais sobre as sessões de RPG com a fisioterapeuta Elaine."
      }
    ],
    ctaText: "Pronto para transformar seu corpo e mente com o Pilates?"
  },
  "terapia-ocupacional": {
    title: "Terapia Ocupacional",
    description: "A Terapia Ocupacional promove a saúde e o bem-estar através da ocupação. Nosso objetivo é capacitar as pessoas para participarem das atividades do dia a dia, utilizando abordagens personalizadas para ajudar crianças, adultos e idosos a alcançar independência, propósito e satisfação em todas as fases da vida.",
    heroImage: toHero,
    accordionTitle: "Nossas Áreas de Atuação em Terapia Ocupacional",
    accordionItems: [
      {
        title: "Desenvolvimento Infantil",
        content: "Apoiamos crianças a desenvolverem habilidades essenciais para o brincar, aprender e socializar. Trabalhamos com condições como atraso no desenvolvimento, Transtorno do Espectro Autista (TEA) e dificuldades de processamento sensorial, criando estratégias para que atinjam seu pleno potencial."
      },
      {
        title: "Reabilitação de Adultos e Idosos",
        content: "Auxiliamos na recuperação da independência em atividades de autocuidado, trabalho e lazer após lesões, cirurgias ou condições neurológicas (como AVC). Para idosos, focamos na adaptação de ambientes para prevenção de quedas e na manutenção da autonomia e qualidade de vida."
      },
      {
        title: "Saúde Mental e Bem-Estar Cognitivo",
        content: "A Terapia Ocupacional é fundamental no tratamento de condições como depressão, ansiedade e estresse. Ajudamos a organizar rotinas, desenvolver estratégias de enfrentamento e a (re)descobrir atividades significativas que tragam propósito e melhorem o bem-estar emocional e a função cognitiva."
      }
    ],
    specialistsTitle: "Nossa Especialista",
    specialists: [
       {
        name: "Mirella",
        specialty: "Terapeuta Ocupacional com Foco Infantil",
        shortDescription: "T.O. com Foco Infantil",
        img: mirellaImg,
        fullDescription: "Mirella é apaixonada por promover o desenvolvimento saudável e a autonomia das crianças. Com especialização em Terapia Ocupacional Pediátrica, ela atua com foco em integração sensorial, seletividade alimentar e no desenvolvimento de habilidades motoras e sociais através do brincar terapêutico. Seu objetivo é ajudar cada criança a superar desafios e a se engajar plenamente em suas ocupações diárias, como a escola e as atividades de autocuidado.",
        callToWhatsapp: "Olá! Vi no site sobre a Terapia Ocupacional Infantil com a Mirella e gostaria de mais informações."
      }
    ],
    ctaText: "Quer retomar suas atividades diárias com mais independência e confiança?"
  },
  "terapia-aba": {
    title: "Terapia ABA",
    description: "A Terapia ABA (Análise do Comportamento Aplicada) é uma abordagem científica e intensiva, focada no desenvolvimento de habilidades e na redução de comportamentos desafiadores em indivíduos com Transtorno do Espectro Autista (TEA) e outras condições do neurodesenvolvimento. Nosso objetivo é promover a autonomia e a participação social.",
    heroImage: abaHero,
    accordionTitle: "Como a Terapia ABA Pode Ajudar",
    accordionItems: [
      {
        title: "Desenvolvimento de Habilidades Sociais",
        content: "Ajudamos a desenvolver habilidades de interação, comunicação e socialização, como contato visual, iniciar e manter conversas, e brincar de forma cooperativa. Isso facilita a participação em ambientes escolares e sociais."
      },
      {
        title: "Comunicação e Linguagem",
        content: "Trabalhamos para expandir o vocabulário, aprimorar a capacidade de expressar desejos e necessidades, e melhorar a compreensão da linguagem verbal e não verbal, usando métodos que se adaptam às necessidades individuais."
      },
      {
        title: "Redução de Comportamentos Disruptivos",
        content: "Através da análise funcional, identificamos as causas de comportamentos disruptivos (como agressão ou autoagressão) e implementamos estratégias para reduzir sua ocorrência, ensinando comportamentos alternativos e mais adaptativos."
      },
      {
        title: "Desenvolvimento Psicomotor",
        content: "Estimulamos o desenvolvimento global da criança através da psicomotricidade, integrando as funções motoras, cognitivas e afetivas. Nossas atividades trabalham o equilíbrio, a coordenação, a lateralidade e a noção de espaço e tempo, fundamentais para a aprendizagem e a socialização."
      },
      {
        title: "Autonomia e Habilidades de Vida Diária",
        content: "Focamos no ensino de habilidades essenciais para a vida cotidiana, como higiene pessoal, alimentação, vestir-se, e outras atividades que promovam maior independência e participação ativa no lar e na comunidade."
      }
    ],
    specialistsTitle: "Nossa Especialista em Terapia ABA",
    specialists: [
      {
        name: "Érika Shirley",
        specialty: "Fisioterapeuta e Especialista em Terapia ABA",
        shortDescription: "Especialista em Terapia ABA",
        img: erikaImg,
        fullDescription: "Érika é uma profissional dedicada e experiente na aplicação da Terapia ABA. Com um olhar atento ao desenvolvimento infantil e às necessidades individuais de cada criança, ela trabalha para promover a comunicação, habilidades sociais e autonomia, utilizando estratégias lúdicas e baseadas em evidências científicas.",
        callToWhatsapp: "Olá! Gostaria de mais informações sobre a Terapia ABA com a especialista Érika Shirley."
      }
    ],
    ctaText: "Quer saber mais sobre como a Terapia ABA pode transformar vidas?"
  },
  "terapia-manual": {
    title: "Terapia Manual",
    description: "A Terapia Manual é uma abordagem da fisioterapia que utiliza técnicas manuais e práticas para diagnosticar e tratar disfunções musculoesqueléticas. Na Vitta Integrale, aplicamos diversas técnicas para aliviar a dor, restaurar a mobilidade e otimizar a função do corpo de forma precisa e personalizada.",
    heroImage: manualHero,
    accordionTitle: "Nossas Abordagens em Terapia Manual",
    accordionItems: [
      {
        title: "Osteopatia",
        content: "A Osteopatia é uma filosofia de tratamento que reconhece a interconexão do corpo e a capacidade inata de autocura. Através de técnicas manuais suaves e precisas, buscamos identificar e corrigir as causas primárias de disfunções, restaurando a mobilidade, aliviando a dor e otimizando a função de todas as estruturas do corpo, incluindo sistema musculoesquelético, visceral e craniano."
      },
      {
        title: "Liberação Miofacial",
        content: "Técnica focada na liberação de tensões e restrições na fáscia, o tecido conjuntivo que envolve músculos e órgãos. Através de pressão e alongamentos, ajudamos a aliviar dores musculares, melhorar a flexibilidade e o fluxo sanguíneo, sendo eficaz para atletas e indivíduos com dores crônicas ou pós-exercício intenso."
      },
      {
        title: "Mobilização Articular",
        content: "Consiste em movimentos passivos e graduados aplicados às articulações para restaurar sua amplitude de movimento e reduzir a dor. É indicada para tratar rigidez articular, capsulites e limitações de movimento decorrentes de lesões ou imobilização, promovendo a saúde das cartilagens e a função articular."
      },
      {
        title: "Kinesio Taping",
        content: "Aplicação de fitas elásticas adesivas sobre a pele para oferecer suporte muscular, reduzir inchaço, aliviar a dor e melhorar a circulação. É amplamente utilizada em lesões esportivas, pós-operatório e para suporte postural, sem restringir o movimento."
      }
    ],
    specialistsTitle: "Nossos Especialistas em Terapia Manual",
    specialists: [
      {
        name: "Érika Shirley",
        specialty: "Fisioterapeuta",
        shortDescription: "Especialista em Terapia Manual",
        img: erikaImg,
        fullDescription: "Érika é especialista no atendimento de crianças e pacientes com distúrbios neurológicos. Com vasta experiência em reabilitação motora e desenvolvimento infantil, ela utiliza abordagens lúdicas e técnicas avançadas de terapia manual para garantir que cada paciente atinja seu máximo potencial funcional, promovendo independência e qualidade de vida.",
        callToWhatsapp: "Olá! Gostaria de saber mais sobre os tratamentos de Terapia Manual com a fisioterapeuta Érika."
      },
      {
        name: "Karina",
        specialty: "Fisioterapeuta Ortopédica",
        shortDescription: "Especialista em Terapia Manual",
        img: karinaImg,
        fullDescription: "Karina utiliza a Terapia Manual como uma ferramenta chave na reabilitação ortopédica. Sua abordagem visa aliviar a dor, restaurar a mobilidade e corrigir disfunções articulares e musculares, sendo ideal para o tratamento de lesões, dores na coluna e recuperação pós-cirúrgica.",
        callToWhatsapp: "Olá! Gostaria de mais informações sobre a Terapia Manual focada em ortopedia com a fisioterapeuta Karina."
      }
    ],
    ctaText: "Pronto para sentir o alívio e a recuperação que a Terapia Manual pode oferecer?"
  },
  odontologia: {
    title: "Odontologia Integrada",
    description: "Cuidar do sorriso é cuidar da saúde e da autoestima. Na Vitta Integrale, oferecemos uma odontologia integrada que une tecnologia de ponta, um atendimento humanizado e todas as especialidades para garantir sua saúde bucal e a estética do seu sorriso em um só lugar.",
    heroImage: odontoHero,
    accordionTitle: "Nossos Tratamentos Odontológicos",
    accordionItems: [
      {
        title: "Clínica Geral e Prevenção",
        content: "A base para um sorriso duradouro. Realizamos check-ups digitais, profilaxia (limpeza), aplicação de flúor e restaurações estéticas. Nosso foco é diagnosticar e prevenir problemas, orientando sobre a higiene ideal para manter sua saúde bucal em dia."
      },
      {
        title: "Ortodontia",
        content: "Alinhe seu sorriso e corrija a função mastigatória. Oferecemos desde os aparelhos fixos tradicionais até os modernos alinhadores invisíveis, planejando um tratamento eficiente e discreto para conquistar o sorriso que você sempre desejou."
      },
      {
        title: "Periodontia (Tratamento de Gengiva)",
        content: "A saúde da gengiva é o alicerce do seu sorriso. Tratamos desde a gengivite até a periodontite avançada, removendo a inflamação e o tártaro para garantir a sustentação dos dentes e evitar a perda dental."
      },
      {
        title: "Endodontia (Tratamento de Canal)",
        content: "Salvamos seu dente e eliminamos a dor com tecnologia de ponta. O tratamento de canal é realizado de forma rápida e indolor com sistemas mecanizados, removendo a infecção e preservando a estrutura dental para uma futura reabilitação."
      },
      {
        title: "Implantes e Próteses (Reabilitação Oral)",
        content: "A solução definitiva para a perda de dentes. Realizamos a instalação de implantes dentários que funcionam como raízes artificiais e confeccionamos próteses (coroas, pontes) para devolver a função, a estética e a segurança ao mastigar e sorrir."
      },
      {
        title: "Estética do Sorriso",
        content: "Desenvolvemos a harmonia e a beleza do seu sorriso. Oferecemos clareamento dental, facetas em resina e porcelana (lentes de contato dentais) e realizamos o planejamento digital para que você visualize e aprove o resultado antes mesmo de começar."
      }
    ],
    specialistsTitle: "Nosso Especialista",
    specialists: [
      {
        name: "Dr. Lucas",
        specialty: "Especialista em Implantodontia e Reabilitação Oral",
        shortDescription: "Odontologia Geral",
        img: lucasImg,
        fullDescription: "Dr. Lucas é nosso especialista dedicado a devolver a função e a estética do sorriso através de técnicas avançadas de reabilitação oral. Com grande experiência em implantes dentários, próteses e restaurações complexas, ele utiliza planejamento digital para garantir tratamentos precisos, seguros e com resultados naturais e duradouros.",
        callToWhatsapp: "Olá! Gostaria de agendar uma avaliação odontológica com o Dr. Lucas."
      }
    ],
    ctaText: "Pronto para cuidar da saúde e da beleza do seu sorriso?"
  }
};