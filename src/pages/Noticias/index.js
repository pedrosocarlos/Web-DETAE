import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';

export default function Noticias() {
    return ( 
     
        <body id="tres-colunas" class="noticias">

		<div id="container">

			
             <div id="topo" class="title">

		        <h1>Seja bem-vindo ao Grupo de Pesquisa DETAE da Unioeste!</h1>
		        
				<nav class="menu">
		        <ul id="navegacao">
		          <li  class="primeiro">
				    <Link  to="/" id="home" > Ínicio</Link>
		          </li>
		          <li >
				    <Link  to="/apresentacao" id="apresentacao" > Apresentação</Link>
		          </li>
		          <li>
		            <Link to="/equipe" id="equipe">Equipe</Link>
		          </li>
		          <li>
				    <Link to="/atuacao" id="atuacao">Atuação</Link>
		          </li>
		          <li>
				      <Link to="/atividades" id="atividades">Atividades</Link>
		            <ul>
						<li> <Link to="/#" id="pesquisa">Pesquisa</Link>
							<ul>
							<li>
								<Link to="/#" id="projetos">Projetos</Link>
							</li>
							<li>
							    <Link to="/#" id="orientacoes">Orientações</Link>
							</li>
							</ul>
						</li>

						<li> <Link to="/#" id="extensao">Extensão</Link>
							<ul>
								<li><Link to="/#" id="projetos1">Projetos</Link></li>
								<li><Link to="/#" id="orientacoes1">Orientações</Link></li>
							</ul>
						</li>
					</ul>
		          </li>
		          <li>
				     <Link to="/publicacoes" id="publicacoes">Publicações</Link>
		          </li>
		          <li>
				     <Link to="/noticias" id="noticias">Notícias</Link>
		          </li>
		          <li>
				     <Link to="/contatos" id="contatos">Contatos</Link>
		          </li>
		        </ul>
		        </nav>
            </div> 

			<div id="conteudo">

				<div id="primario">
					<div class="caixa destaque">
						<h2>Destaques</h2>
						<div class="caixa-conteudo">
							<h3>Impressora 3D</h3>
							<img src="https://lh3.googleusercontent.com/-zJ4_m7oLnqfvsB5mdlzGhdE3jadwuHYFCmhTcb4msAxJ_6WplIJvLEBQgAZIaCkAlNDknDpGYJ4_FUa0trMC_5iZm4C87NWqQg1uateRY27FRPnj__pwICpY3AkSHFfZh_g73PIjqv-w1JbpFaoUIQX5yvQWDkbKyid9NFg7wZ_B1Lx1avm_XfkpcBwhXg0s_Chq_cp-ZRLt6cj6zVrTrza3BlGyUHX5rBFYgu4RtzcOhTid9KoFbd05Hn5DPSQsB_w1d0kjF70lbvpAd0xeKvi04w0mkWQXz2q5yTomK_bBj5ZrBjFJ-ymi8GzxAZKgEanRrJFUuVu_yi0S9rqudtc5HHZZ7wNvyoAejTLl_HHFm2utTp-f2VZWoMhBnt7widjP1SQq6YwiRXYDQ4e-mi9OzXRYU-xGf3uk4X4gcuMq4qo7t2IRcnlbE4rtZ4oIqwN_TSEGQcp-rr1zi-udR-W274AkjQV8k01CvCVE4Xarh2kJ7Fzk8dXZr4JZIiz2WmCOahO0SK1z0cjmFBaFuahFf73eLHYhw1fQgEw6-OJUfVHyrSP7paEhSTbpwNGaW8eDXEtbZySDZgekG9swjDgAvnDdjzKEjhHr7f_9KtJ7RvbmFpCgOnYhaxeYvi2S5zeiFF9JqGJtzVHu74gCMvfr1NOQYaFmC6ggA6EIR_A_1K3jQSGb9Y1w8-V=w822-h549-no?authuser=3" class="imagem-principal" />
							<p>
                              Alunos do curso de Ciência da Computação da Unioeste, campus de Foz do Iguaçu, se uniram para a construção de impressoras 3D e estão estudando aplicações na educação.
							</p>
							<a href="https://www5.unioeste.br/portalunioeste/maisnoticias/50847-unioeste-foz-alunos-de-ciencia-da-computacao-constroem-impressoras-3d?fbclid=IwAR3mgqfSfx-gV0ba1lfLE42V98AGqcx-y69N0bBHBCnvQVRFPuS84Tde0FE">Leia Mais</a>
							<br/>
						</div>

						<div class="caixa-conteudo">
							<h3>Entrega de Máscaras</h3>
							<img src="https://lh3.googleusercontent.com/pw/ACtC-3d9EmaZ_rD8_wVXY_X3gHhbhKva9g5KvG3yVITM5Z2DZNjwBGtH-w5jvc4LsGfx0FQUvJvZkApirTP966tw8reMx2o5J9icqBdLh7-yCgd_8Swg8jJiXHfPar0wVOZbx2IlaPf-vbKTng_407XRuBfO6g=w876-h657-no?authuser=3" class="imagem-principal" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu sem, porta eu aliquam vel, malesuada magna. 
							</p>
							<a href="https://www5.unioeste.br/portalunioeste/maisnoticias/50847-unioeste-foz-alunos-de-ciencia-da-computacao-constroem-impressoras-3d?fbclid=IwAR3mgqfSfx-gV0ba1lfLE42V98AGqcx-y69N0bBHBCnvQVRFPuS84Tde0FE">Leia Mais</a>
							<br/>
						</div>


						<div class="caixa-conteudo">
							<h3>Novas Tecnologias</h3>
							<img src="https://lh3.googleusercontent.com/pw/ACtC-3dOkEWGCxgma4pyiisQ9WXGnhPWLIlqAtF8O_w2OwljjS_5RD81u8Q908813IxsslkhntroSAVtWK4G_Ve-cG6JpxNb0vzT7pzIBg2Haj0Y9DZJhr9yf3SznBKiX8kk1lw24lMuy4nI6W28WYFeI_vuoQ=w876-h657-no?authuser=3" class="imagem-principal" />
							<p>
								A tecnologia da impressão 3D tem se tornado cada vez mais popular sendo aplicada e aderida, com impactos positivos, revolucionando diversas áreas, incluindo a educação.
							</p>
							<a href="https://www5.unioeste.br/portalunioeste/maisnoticias/50847-unioeste-foz-alunos-de-ciencia-da-computacao-constroem-impressoras-3d?fbclid=IwAR3mgqfSfx-gV0ba1lfLE42V98AGqcx-y69N0bBHBCnvQVRFPuS84Tde0FE">Leia Mais</a>
							<br/>
						</div>
					</div>
 	
					</div>
			

				<div id="secundario">
						<div class="caixa entrevista">
						<h2>Posts Recentes</h2>
						<div class="caixa-conteudo">
							<h3>Entrevista na Rádio Clube FM</h3>
							<img src="https://lh3.googleusercontent.com/zweKTMTBwhskx96sOXIJMM63xqyoZ-FL4DgPHSPPaBuY4fsT6J9YG1RHPue-50EVgpoqkSQbQAVi8SjWFGhIU0PrbU20MtRPqi5Ut1dPH2oh8Eg3Vgg08p5gVSq_XGS_B60FKcvdsG7IxhCkiRxZ3QPfp5yI7rplL7sxOjiJL2DF2BhC9Fjs-EOW3VIJUounADYl7z94gS6E5i0VWPNaVwNw491rS33XF3Ot8DOPPZm-B11elNMi6W5CswMpCSXdhXrjeP53wA0HYQInYchrP5RQe9wZxOrfNSMmNHN9xosisp2Nk8CzL7W8KPU7_VyS0Mx08Yy42B1RcKB4FXkA1_9hvbRQpVyCQDroM52jFcrhukwfONUulZq1Fc3qFc8TPB90t2gNLU8R8k_yH3WTxSmaeX6Vn79E_ENpeq1uc5KUy1pMvuSxLQlESvgGMVBZAWfoYjo2pA7sfL02vE-CZPHPH0geZCeSI5pcz7qPilzb0iQPkYm1SbJ4uuKvLbdKpBjjU3orNu91nLXTpXV3ZjNykRsIJjuxx0iMhI61Wfkr8OfjRX62Y9WZXPpjVcky-otX33TPBqNEDGmV3s2Fj3-ZgpjWxbP2G2S8gwKvZHHHBIONDOT8UltNfn6znQnfihtvqiUBMk8OmCpIRmLYwgSMprHcStrj_nHoyi_D0RZh-YBKyqqkmAZ8z4nv=w822-h549-no?authuser=3" width="100%" class="imagem-principal" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu sem, porta eu aliquam vel, malesuada magna. 
							</p>
							<a href="https://www.h2foz.com.br/noticia/alunas-da-unioestefoz-falam-sobre-experiencia-em-projeto-de-iniciacao-cientifica-e-de-integracao-com-a-comunidade">Leia Mais</a>
						</div>

			

						<div class="caixa-conteudo">
							<h3>Formandos 2019</h3>
							<img src="https://lh3.googleusercontent.com/JkpBoxaCMAhQBzVDnWH-JE5Yv3PWqBHetitmpQKjmqRleclqfXW39uFl8IUaYAZvT1lyY41VPcIGpOUqMnLe9LFfklVUbwwIZXZ0fgGlN4_DNTv08BM80Ese3eRndAfkE5XDTu4ZmhFfv_jEabJ77NDc124uTbSpHEyzYf6nvCQiHohnkvEfs4z__Hxqy6_3aS9B_rh6MlV1rNivnY4GvhRN4z40B19aYFukMztj_gl0N5YLDM81EtwhuIXcCSGbE3AdB74NwR-L8GgqRyEEdoJuruEWJY3i5WPXEeJY7CTeBt5jTHqP-9I8AIeP3lKbq2OaTp5tkmeJryI47LqU1Xp53MreN-Fv1T0G6EDhRGe8_R4ngPHw8DdjeMgmiTpaX4vl1gRr5ozU7FDh-M8vntJ9Te30ETgNxFHArnGTgrJDOUnbiOAgsh1P32BeGpk1D_jwUg3POHuSHn2UwCBxI5dsqUftBTpdiBIvrUeUJUA9seuxo-m1Npv3Ozg356cj4loWs1cxxggvUvwe6cNe4bUKbavyyRyy17nrBQXANdpMkBlGggmVUWH_NzLNrxFyb_ZUodzSPfLSWnMfSOkXSdXesO6hLv5BR-B-4ghgELoskCkHLzN9eAzsgAsQBZskgneWiUOZsdTvZp4YVAm4AEF_pVNteY6faDGL3P4jXBjPmSuaF5a9FH-IvWaW=w876-h657-no?authuser=3" width="100%" class="imagem-principal" />
							<p>
								A tecnologia da impressão 3D tem se tornado cada vez mais popular sendo aplicada e aderida, com impactos positivos, revolucionando diversas áreas, incluindo a educação. 
							</p>
							<a href="https://www.casadenoticias.com.br/noticias/31868-alunos-de-ciencia-da-computacao-da-unioeste-constroem-impressoras-3d">Leia Mais</a>
							<br/>
						</div>
					</div>
						
					</div>

				</div>

				
				<div id="lateral">
					

					<div class="caixa">
						<h2>Login</h2>
						<div class="caixa-conteudo">
						<form>
								<div>
									<label for="name">Nome: </label>
									<input type="text" name="name" id="name" placeholder="Nome"/>
								</div>
								<div>
									<label for="id">Senha: </label>
									<input type="password" name="id" id="id" placeholder="Senha"/>
								</div>
								<div>
									<input class="submit" type="submit" value="Entrar"/>
								</div>
						</form>



							
						</div>


					</div>



				</div>
			</div>


		<div id="container-rodape">
				<div>
					<strong>&copy; 2020 Todos os direitos reservados</strong>
				</div>
		</div>

	</body>
        
    );

}