import './index.scss';
import '../../common/common.scss';

export default function Entrevista() {
  return (
    <main className="entrevista">

      <header className='cabecalhoP'>
        <div className='div-cabecalho'>
          <img className="icone-logo"  src='/assets/images/logo.png' alt=''/>
          <h3 className='texto-cabecalho'> CONHEÇA O MELHOR CURSO PARA SUA INICIAÇÃO NO MERCADO DE PROGRAMAÇÃO </h3>
          <img className='icone-asam' src="/assets/images/logoasam.png" alt='' />
        </div>
      </header>
      
      <div className='div2'>

        <div className='card'>

          <div className='header-card'>
            <img src='/assets/images/lamp.png' alt='' />
            <p> Resumo da Entrevista </p>
          </div>

          <div className='div-textocard'>
            <p className='texto-card'>
            O entrevistado destaca a importância do pensamento crítico e analítico ao refletir sobre sua carreira. Ele menciona que ter clareza sobre os objetivos, estabelecer planos e revisá-los periodicamente são aspectos essenciais para o sucesso profissional. A capacidade de dizer não, priorizar tarefas e manter um mindset de crescimento também são abordados como fatores determinantes para o progresso na carreira. Além disso, o entrevistado compartilha sua abordagem para se manter atualizado na área de tecnologia, destacando a leitura de livros como uma fonte importante de aprendizado, bem como o consumo de conteúdos online, como blogs, vídeos e documentações. Ele enfatiza a importância de seguir um caminho estruturado de aprendizado e de adaptar-se às mudanças do mercado. Por fim, o entrevistado destaca a relevância de livros específicos, como "Essencialismo" e "Mindset", que o ajudaram a aprimorar suas capacidades não técnicas e a cultivar uma mentalidade de crescimento em sua carreira. Ao discutir sobre as áreas de atuação no desenvolvimento de software, o interlocutor menciona a importância do teste de software, do front-end, do back-end, da análise de dados, do suporte ao desenvolvimento (DevOps) e outras áreas relacionadas. Ele enfatiza que, independentemente da área escolhida, a IA terá um papel significativo. Por fim, o interlocutor compartilha sua experiência empreendedora, destacando a importância de focar nos benefícios que se deseja entregar aos clientes e não se perder em detalhes irrelevantes. Ele ressalta a importância de entender o valor agregado ao cliente e evitar otimizações prematuras, priorizando fazer o produto funcionar antes de torná-lo rápido ou bonito.

            </p>
          </div>

        </div>

        <div className='card'>

          <div className='header-card'>
            <img src='/assets/images/lamp.png' alt='' />
            <p className='tituloAdvocate'> Qual o papel de um Devoloper Advocate? </p>
          </div>

          <div className='div-textocard'>
            <p className='texto-card'>
            O papel do Developer Advocate envolve criar conteúdo técnico em várias mídias, como blogs, YouTube, TikTok e LinkedIn, além de participar de eventos e fazer apresentações para educar e informar o público sobre os produtos e serviços da empresa. O foco está em ajudar os desenvolvedores a entenderem como usar essas ferramentas de forma eficaz para criar produtos melhores e mais produtivos. Embora o Developer Advocate tenha um histórico forte em desenvolvimento de software, arquitetura e design de sistemas, o trabalho diário pode variar muito. Por exemplo, um projeto pode envolver aprender sobre inteligência artificial generativa e criar conteúdo relacionado a isso. A escolha da linguagem de programação depende do projeto e das necessidades, e o profissional deve estar aberto a aprender novas linguagens conforme necessário.

            </p>
          </div>

        </div>

        <div className='card'>

          <div className='header-card'>
            <img src='/assets/images/lamp.png' alt='' />
            <p> Pontos Importantes </p>
          </div>

          <div className='div-textocard'>
            <p className='texto-card'>
            No final, há uma reflexão sobre a importância das habilidades interpessoais (soft skills) em conjunto com as habilidades técnicas (hard skills), assim como a necessidade de cuidar da saúde mental. Em resumo, a conversa aborda a importância de entender as necessidades dos clientes, aprender a ouvir, desenvolver um plano estratégico, adaptar-se às mudanças, manter-se atualizado, estabelecer limites, ter clareza sobre os objetivos pessoais, cultivar um mindset de crescimento, desenvolver habilidades interpessoais e cuidar da saúde mental para alcançar o sucesso profissional e pessoal.
            </p>
          </div>
        </div>

        

      </div>

    </main>
  );
}