import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';

export default function Apresentação() {
    return (

     <body id="uma-coluna" class="apresentacao">   
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
						<h2>Seja Bem-vindo ao Grupo de Pesquisa DETAE!</h2>
						<div class="caixa-conteudo">
							<h3>Apresentação</h3>
                            <br />   <br />  
							
							<p>
								O<strong> Grupo de Pesquisa Desenvolvimento de Tecnologias Aplicadas à Educação - DETAE da Unioeste </strong>tem por objetivo desenvolver ferramentas e tecnologias que sejam aplicadas às diversas modalidades da educação, tais como: e-learning, educação especial, sistemas tutores inteligentes, inclusão digital, formação continuada, educação escolar complementar, jogos educativos, produção de materiais didáticos, entre outros. 

							</p>
                            <br />  

							<p>
							   Para escolher o nome do Grupo de Pesquisa, formado em 2004, levamos em consideração as linhas de pesquisa  e temáticas relacionadas à proposta dos estudos: desenvolvimento de novas tecnologias aplicadas à educação presencial e a distância e a aprendizagem efetiva das diversas modalidades educacionais. 
                            </p>


                                <br />  
                                <br />  

							
							<img class="detae" src="https://lh3.googleusercontent.com/QJplqFwC9nVr4NQKTd4sOSKdNNPfKvFLcQoNgWOzFCemJl3BDv4KBecWXm1QaHfb5xaIIjvTrKdbJz33rZCOYDjeNjID9jKh2cVgVJUk_h3DZfG1238V9d9sCeBH70gxZwxDy0xSsh958U44lSWX0XbkCVzK44kQOsCOI8kmhxOY0lol3dh4sSzGWh-nfEO4-sy6GkWk1BkHAyP5RKF-2B5REvvAuCMGDc2N6hGQFtHmPucI6IrKJmyc50tcx893Uxn5tDtAh9thmTW2YK0DThvvdq4Dr64PZP8QjrnqkC0wHNsKQOg7DOdy9kw8Ds_N_MA5hYBgGMEzAj0DGn63lkc-zVxKBhx1xbbPW1RoM1ULYZ9KE1Ma70IZneJiFHtYrxZPzh8WFuVeZi0Ik0cb6CPa_7EMLtBJcwupfVTE9pUAOrjwf-nh_jTmR62BiRW_TebmHIwr2sGSWN8EHUWZmcV_LWV4xbA3_VX9UNByHBIMBh4mXZPcaWffTmXX4f1cHuuhCi-WFGX5JqwBzDmcRz8Q33LegS79MYOO1lvGmDrU8JsAnqTuQTiT_E1JXs-c4KD5ubAaHhZ8rT8-dt1G82T13NMhz7xZdn0XxSZ8ih62jVBbQjDPyT9hmEnDIEE5Ma6BuV8H8wj6LrsbNtzYm__5M1PZTjO-TV4JHkA5rToLdHydh-ma9VHtCBhkVA=w300-h210-no?authuser=3" />

                            <br />  
                            <br />  
                            <br />  
							
							<h3>Objetivo geral do Grupo DETAE</h3>
                            <br />  
                            <br />  
							<p>
								Incorporar de maneira segura e produtiva as novas tecnologias a processos educativos, trasformando, expandindo e distribuindo o conhecimento de diferentes maneiras. 
							</p>

                            <br />  
                            <br />  

							<h3>Objetivos específicos do Grupo DETAE</h3>
                            <br />  
                            <br />  
							<p>Conceber, propor e desenvolver projetos de pesquisa no domínio tecnológico para fins e usos educacionais.</p> <br />

							<p> Dentre as repercussões esperadas estão:</p>

							<ul type="I"> 
							<li>- O emprego das tecnologias disponíveis na universidade à comunidade provendo dessa forma o estreitamento da relação entre elas;</li>
							<li>- Contribuição social através da aproximação de ferramentas e tecnologias educacionais aos alunos do ensino fundamental, médio e da educação especial; </li>
							<li>- Desenvolver o uso de diferentes tecnologias, aplicando-as à educação continuada de profissionais de várias áreas de conhecimento, e ao ensino de graduação e pós-graduação;</li>
							<li> - Aplicar técnicas avançadas como Inteligência Artificial no desenvolvimento de aplicativos educacionais; </li>
							<li>- Distribuir o conhecimento gerado e disponível dentro da universidade através da produção de material didático de qualidade;</li>
							<li> - Produção científica e participação em eventos relacionadas às linhas de pesquisa do grupo. </li>
							</ul>
							
					    </div>
 
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