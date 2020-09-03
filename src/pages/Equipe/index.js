import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';

export default function Equipe() {
    return (  
    <body id="duas-colunas" class="equipe">
		
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
						<h2>Equipe</h2>
						<div class="caixa-conteudo">
							<h3>Quem Somos?</h3>
							<br/><br/>
							<img src="https://lh3.googleusercontent.com/r0WaIc7PzIzubotvq0-Ke2OhLKXxnPPC4wMPdN2EghDd-lGVuscuMLkFQmA4LvgoWaf0kW6f9qo-dcFqIF6qi9XCY178gC7TY-spnefSEJmfv6t21KSnShcsYLUS62UE2WXpHY8WwNF-ztxlJshUGnlbeo2yue0eMsJ68e6ywXbV-Mkv6usqaDEdAC844rHllKTnX7aE8ju153mTph9d3z76frQVJ5V8tHIn75btKhZpTiNHBSOLZuW3Tr5mj8pHPmwSFvqsHWGhAqumCH1uPn9IS6_L3KLcVSu6EAj3xpHsxz_BSSAKWRMO0qWifZsyPG0c4PmAbNP2TBqQp5bvBqhC_fyId-ELpQ4r4ukmqQH9tCiN_quz35PwrMLvZ8HVaptSKKDjwtRtlVfUM4JiC9yur9cCxXIvPLiowsnSNNzeeVPncg9LJmHIj-8XmW7IjiqSPkMB2t-Jiyq4iaVGgOe5zwSqmjyDplcx3DdJWUf9KTJkEWLY-dbcYMGBvMsQ-o35L7228Awf9k3SAov4tfOLeTTJ8Y6ClcEK1TEN7NzNrTO4SNtk0BLIAu9Lmxp-hpQlXyoiS6_wgfu6F4DgS7o-pVpF2gEGH3TcEBx1ZXcz6AkNvU4sbiaZMOHhyJCCVAz0LC_RG85rfhST6D6JBwkwt7kbHyy7Fg--J6p3TGwFubIow3jlmFMo88Af=w876-h657-no?authuser=3" width="100%" class="imagem-principal" />

							<br/><br/><br/>


							<h3>Pesquisadores / Colaboradores</h3>

							<br/><br/>

							<ul>
							
								<li>Claudio Roberto Marquetto Mauricio  <a href="http://lattes.cnpq.br/9614304238454186">  CV Lattes</a></li>
								<li>Eliane Nascimento Pereira  <a href="http://lattes.cnpq.br/1779566969221196">  CV Lattes</a></li>
								<li>Fabiana Frata Furlan Peres  <a href="http://lattes.cnpq.br/4134919454057451">  CV Lattes</a></li>
								<li>Renata Camacho Bezerra  <a href="http://lattes.cnpq.br/3960357191532853">  CV Lattes</a></li>
								<li>Rômulo César Silva  <a href="http://lattes.cnpq.br/6868372533000061">  CV Lattes</a></li>
								<li>Willian Francisco da Silva<a href= "http://lattes.cnpq.br/2112323830310902">  CV Lattes</a></li>
						
							</ul>

						    <br/>
                            <br/>

							<h3>Estudantes</h3>

							<br/>
                            <br/>

							<ul>
								<li> 
									Ana Paula Merencia
									<a href="http://lattes.cnpq.br/1937699438807620">  CV Lattes
									</a>
								</li>
								<li>
									André Luis Gambetta Mafra
									<a href="http://lattes.cnpq.br/1423732166970210">  CV Lattes</a>
								</li>
								<li>
								 André Sotille Riedi
									<a href="http://lattes.cnpq.br/5185407613942782">  CV Lattes</a>
								</li>
								<li>
									Camila Marques Rodriguez
									<a href="http://lattes.cnpq.br/8711812445197451">  CV Lattes</a>
								</li>
								<li>
									Carina Aragão de Moraes
									<a href=" http://lattes.cnpq.br/1437275819538380">  CV Lattes</a>
								</li>
								<li>
									Carlos Pedroso
									<a href="http://lattes.cnpq.br/4341275574498412">  CV Lattes</a>
								</li>
								<li>
									Douglas Pereira Pavan
									<a href="http://lattes.cnpq.br/6194910227281734">  CV Lattes</a>
								</li>
								<li>
									Felipe Satoru Asano
									<a href="http://lattes.cnpq.br/8679273467187595">  CV Lattes</a>
								</li>
								<li>
									Franklin Luiz do Nascimento Fracaro
									<a href=" http://lattes.cnpq.br/4717192191020705">  CV Lattes</a>
								</li>
								<li>
									Gabriel Horst Montoanelli
									<a href="http://lattes.cnpq.br/5600947706876661">  CV Lattes</a>
								</li>
								<li>
									Gisele Vitória Cassuboski
									<a href=" http://lattes.cnpq.br/1649933353635738">  CV Lattes</a>
								</li>
								<li>
									Gustavo Henrique de Almeida
									<a href="http://lattes.cnpq.br/2644673394076160">  CV Lattes</a>
								</li>
								<li>
									Joana Pacheco Rolim
									<a href=" http://lattes.cnpq.br/3750563899638017">  CV Lattes</a>
								</li>
								<li>
									Leonardo de Jesus Queiroz
									<a href=" http://lattes.cnpq.br/6788901762238782">  CV Lattes</a>
								</li>
								<li>
									Marcos Roque da Rosa   
									<a href=" http://lattes.cnpq.br/6726801451000730">  CV Lattes</a>
								</li>
								<li>
									Yasmin Fernandes do Carmo
									<a href="http://lattes.cnpq.br/3149883625568150">  CV Lattes</a>
								</li>
								<li>
									Yuri Fernando Tiecher Sefrin
									<a href="http://lattes.cnpq.br/8414244005798745">  CV Lattes</a>
								</li>
							</ul>


							<br/><br/>

							<hr/>

						
							
							<div class="caixa destaque">
							    <h2>Egressos</h2>
                            </div>    
                            
							<h3>Pesquisadores</h3>

							<br/>
                            <br/>

							<ul>
								<li>
									Eliane Nascimento Pereira
								</li>
								<li>
									Eliane Raquel Peres Lala
								</li>
								<li>
									Fabiana Frata Furlan Peres
								</li>
								<li>
									Itamar Pena Nieradka
								</li>
								<li>
									Izaura Maria Carelli
								</li>
								<li>
									João Alberto Fabro
								</li>
							</ul>

							<br/>
                            <br/>

							<h3>Estudantes</h3>

							<br/>
                            <br/>

							<ul>
								<li>
									Cinthia Rodrigues da Silva
								</li>
								<li>
									Eduardo Menezes Rocha
								</li>
								<li>
									Francisco Xavier Chiang
								</li>
								<li>
									Gustavo Ramon Bellettieri Herbig
								</li>
								<li>
									Marcos Daniel de Moraes Insfran
								</li>
								<li>
									Wagner José Florencio Junior
								</li>
						
                        	</ul>
						</div>
                    </div>
					
				</div>
			</div>



				
				<div id="lateral">

					<div class="caixa">
							<h2>Líderes do Grupo</h2>
							<div class="caixa-conteudo">
								<ul>
									<li><a href="http://lattes.cnpq.br/1779566969221196">Eliane N. Pereira</a></li>
									
									<li><a href="http://lattes.cnpq.br/6868372533000061">Rômulo César Silva</a></li>
									
								</ul>
							</div>
					</div>
					
					<div class="caixa">
						       <h2>Pesquisadores</h2>
							   <div class="caixa-conteudo">
							<ul>
								<li><a href="http://lattes.cnpq.br/9614304238454186">Claudio R. M. Mauricio</a></li>
								<li><a href="http://lattes.cnpq.br/1779566969221196">Eliane N. Pereira</a></li>
								<li><a href="http://lattes.cnpq.br/4134919454057451">Fabiana F. Furlan Peres</a></li>
								<li><a href="http://lattes.cnpq.br/3960357191532853">Renata Camacho Bezerra</a></li>
								<li><a href="http://lattes.cnpq.br/6868372533000061">Rômulo César Silva</a></li>
								<li><a href="http://lattes.cnpq.br/2112323830310902">Willian Francisco da Silva</a></li>
							</ul>
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