
import './index.scss';
import '../../common/common.scss'
import { useState } from 'react'

export default function Home() {
  const [botoesCliques, setBotoesCliques] = useState('card1');
  

  function cliqueAbas(aba) {
    setBotoesCliques(aba);
}

  return (
    <main className="home">

      <header className='cabecalhoP'>
        <div className='div-cabecalho'>
          <img  className="icone-logo"  src='/assets/images/logo.png' alt=''/>
          <h3 className='texto-cabecalho'> CONHEÇA O MELHOR CURSO PARA SUA INICIAÇÃO NO MERCADO DE PROGRAMAÇÃO </h3>
          <img className='icone-asam' src="/assets/images/logoasam.png" alt='' />
        </div>

        <div className='div-opcoes'> 
          <a href='#sobre' className='h-opcoes'>SOBRE O CURSO</a >
          <a href='#semestre' className='h-opcoes'>SEMESTRES E MATÉRIAS</a >
          <a href='#entrevista' className='h-opcoes'>ENTREVISTA PROFISSIONAL DA ÁREA</a >
        </div>
      </header>

      <div id="sobre" className='div-sobre'>
        <img src='/assets/images/chapeuformatura.png' alt='' />

        <div className='sobre'>
          <h1 className='titulo-sobre'>SOBRE</h1>
          <p className='texto-sobre'> O curso de Análise e Desenvolvimento de Sistemas (ADS) é projetado para formar profissionais aptos a lidar com os desafios do mundo da tecnologia da informação. Os alunos estudam uma variedade de disciplinas, desde os fundamentos da computação até o desenvolvimento de software, análise de sistemas, bancos de dados e segurança da informação. Eles aprendem a projetar, desenvolver e gerenciar sistemas computacionais, aplicando conhecimentos em linguagens de programação, metodologias ágeis, integração de sistemas e gestão de projetos de TI. Além disso, o curso aborda tendências emergentes, como computação em nuvem, inteligência artificial e internet das coisas.  </p>
        </div>
      </div>


      <div id="semestre" className='div2'>
        <div className='div-semestre'>

          <div className='div-cards'>

            <div className={botoesCliques === 'card1' ? "cards2" : "cards"} onClick={() => cliqueAbas('card1')}> 1º Semestre  </div>
            <div className={botoesCliques === 'card2' ? "cards2" : "cards"} onClick={() => cliqueAbas('card2')}> 2º Semestre  </div>
            <div className={botoesCliques === 'card3' ? "cards2" : "cards"} onClick={() => cliqueAbas('card3')}> 3º Semestre  </div>
            <div className={botoesCliques === 'card4' ? "cards2" : "cards"} onClick={() => cliqueAbas('card4')}> 4º Semestre  </div>
            <div className={botoesCliques === 'card5' ? "cards2" : "cards"} onClick={() => cliqueAbas('card5')}> 5º Semestre  </div>

          </div>

          
          {botoesCliques === 'card1' &&
          <div className='semestre'>
            <p>Algoritmos e Programação I</p>
            <p>Banco de Dados</p>
            <p>Conceitos de Computação</p>
            <p>Evolução da Tecnologia e Socieade</p>
            <p>Fundamentos de Administração</p>
            <p>Projeto Integrador: Desenvolvimento de Lógica</p>
            <p>Usabilidade Interface e UX</p>
            </div>
          }

          {botoesCliques === 'card2' &&
          <div className='semestre'>
            <p>Algoritmos e Programação II</p>
            <p>Análise e Desenvolvimento de Sistemas</p>
            <p>Ética, Cidadania e Sustentabilidade - acões extensionista</p>
            <p>Programação para Banco de Dados</p>
            <p>Programação Web</p>
            <p>Projeto Integrador: desenvolvimento estruturado de sistemas</p>
            </div>
          } 

          {botoesCliques === 'card3' &&
          <div className='semestre'>
            <p>Desenvolvimento de Sistemas Web</p>
            <p>Estrutura de Dados</p>
            <p>Infraestrutura de TI</p>
            <p>Programação Orientada a Objetos</p>
            <p>Projeto Integrador: Desenvolvimento de Sistemas Orientado a Web</p>
            </div>
          } 

          {botoesCliques === 'card4' &&
          <div className='semestre'>
            <p>Análise de Dados e Estatística</p>
            <p>Desenvolvimento de Sistemas para Dispositivos Móveis</p>
            <p>Engenharia e Arquitetura de Software</p>
            <p>Gerenciamento de Projetos</p>
            <p>Projeto Integrador: Desenvolvimento para Dispositivos Móveis</p>
            <p>Qualidade de Software</p>
            </div>
          } 

          {botoesCliques === 'card5' &&
          <div className='semestre'>
            <p>Administração de Tecnologias da Informação</p>
            <p>Comunicação, Liderança e Negociação em TI</p>
            <p>Desenvolvimento em Nuvem e IoT</p>
            <p>Empreendedorismo, Inovação e Economia Criativa - ações extensionista</p>
            <p>Projeto Integrador: Análise de Soluções Integradas para Organizações</p>
            <p>Segurança e Auditoria de Sistemas de Informação</p>
            </div>
          } 
        </div>
      </div>

       <div id="entrevista" className='div3'>
          <div className='div3-esquerda'>
              <img src='/assets/images/fotoamazon.png' alt='' />
          </div>


          <div className='div3-direita'>
            <div >
              <p className='texto-direita'>Tive o privilégio de entrevistar um Programador Sênior com mais de 25 anos de experiência e que hoje em dia está trabalhando na AWS (Amazon Web Services) que é uma plataforma de serviços de computação em nuvem. A entrevista foi gravada em áudio, e se tiver curiosidade só escanear o <span>QR-CODE</span> abaixo.</p>
            </div>
          
            <div className='div-qrcode'>
              <div>
                <img src='/assets/images/qrcode.png' alt=''/>
              </div>

              <div className='div-texto'>
                <p className='texto-botao'>Se quiser também ver alguns pontos importantes e resumidos que o entrevistado citou, clique no botão abaixo. </p>
                <a href='/entrevista' className='botao-entrevista'>CLIQUE AQUI!</a>
              </div>
            </div>
          
          </div>



       </div>


    </main>
  );
}