import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';

export default function Contatos() {
	
    return (  
        <body id="uma-coluna-teste" class="contatos">
		
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
						<h2>Endereço do DETAE</h2>
						<div class="caixa-conteudo">
							<h3>Onde estamos?</h3>
							<br/>
							<img src="https://lh3.googleusercontent.com/bgOs94yxkmKB9vg_O9MLRSszevpnTIHIGXbTDHpWhcLVWZAWnvWZ4lMkTyONJSruiFp7TN9whn_Fta05wq2BZnOK6mIGzw7HATdQjW5B5Z5r9WTYd0Vk5Q89EGY4ynJi-mHkDm0oh0kmDxQ4B1Ds0xlCjGp26DBjviZs45ermfDMfzd4BKmjkTBcrO9NAoOQgd42a2cTGpqNS3AeKIwOxF5ie_AokXUprxRjuqTTphWxgINP_s44LRB0PgqYfDtt-aBBH3OtzNIOq5Rz1CIHM2Xtih5-RUy8VMPKlRXWHRAdrxyKERBwtdnwonjIy763iSr0gcF3n1FGOIYC5GV8LR-BCJEKwcWT1S-EvSr7BILMF6S8ya1dZf5J6lYMUaxrBk6nYUsUUyzOdZTT-jcnW83sRYFeTy65gKTnKPAKXH4bevCAySpji4apfnJKRH2IlZw9vjO_b-osMZGipA8c0At8hreWYvK87ODA-QdfnYiIIO7mx7EiXwFPpVV6hb8ubZF1i2NRg08svHjzMXKIYE3-lFTn-HXlLsOHdnDRqEf40RCZK34sh8K4XtB8_z1NU6Jk341JCi7PReD_ynY9GCfLo6fM-t_ASH_nL15XCIpu6F_V-d0uRytgtJ6lOESzg1wbjK8cirjUWnKdpOOrL5w33wnj9mTFjLZnIGjA_0UyKCWz_i59pcyIjUJu5g=w678-h594-no?authuser=3" class= "endereco"/>
							
							<p>
							<strong>Universidade Estadual do Oeste do Paraná - Unioeste</strong>
						    </p>
							<p>Parque Tecnológico Itaipu</p>
							<br/><br/>
							<p>Avenida Tancredo Neves, 6731. PTI, Bloco 5, Espaço 3, Sala 9</p>
							<p>CEP: 85866-900</p>
							<p>Foz do Iguaçu, PR</p>
							<p>Brasil</p>
							<br/><br/>

							<p><strong>Contato do grupo:</strong></p>
							<p>Profª Dra Eliane Nascimento Pereira: eliane.pereira@unioeste.br </p>
				
                            <br/><br/>

                            <hr/>

                          

					<div class="caixa destaque">
					<h2>Envie uma Mensagem</h2>
					</div>
					<br/>

					<h3>Preencha o formulário</h3><br/>
					<p>Através do formulário abaixo, é possível enviar uma mensagem ao Gestor do Grupo DETAE.</p>
					<br/>
					      <form>
								<div>
									<label for="name">Nome Completo:  </label>
									<input type="text" name="name" id="name" placeholder="Nome" />
								</div>
								<br/>
								<div>
									<label for="email">Email: </label>
									<input type="email" name="email" id="email" placeholder="Email"/>
								</div>
								<br/>
								<div>
									<label for="email">Mensagem: </label>
									<textarea class="area-texto" />
    
			
								</div>
								
								<div>
									<input class="submit" type="submit" value="Enviar"/>
								</div>
							</form>

					</div>				
			</div>	



	    </div>

		</div>

            <div id="lateral-teste">

                <div class="caixa">
                    <h2>Feed de Comentários</h2>
                    <div class="caixa-conteudo">
                        <h3>Joaninha:</h3>
                        <p>Não sei o q escrever aqui</p>
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