import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';

export default function Publicacoes() {
        
const IMAGES =
[{
        src: "https://lh3.googleusercontent.com/uZROI7w98XsZQ1Dw0oI7vCQoJDB8RZrhCoeKedFCNVh18KqYHNL03JLK9WO1HIk8P7hboVWaO3W0ajJblpa6a-Z_s__IYvjvWk52qgHzdhYkeWkd5fndCkBE58Z6QK0dR2hR3D1PnyKicXORFaJExjqzU5vvYL1Ns14PGgTcnRNyzUQGv6LBVkhI0Q7wXgMOIGefngHfcDZvk6UpGazusNO6qcI_OwdE18VQf1AIJD8sATi00R_VKRntaZFlMIAsWn-D3WDSb5DGWW8PUBbRLHU3kSU-NyzpImFJpiw7pfEDQrhc3HjSVIRi-zrHrU8Df6Y8Lk8xY9foC-F6Ktf2EA4mQDSZooUQ2AChJ0pZniroRJpgl9bFD97mBTNMMyphpd95fM8YpIMBWXxu3K4V682zbozbrtNtfgTSZORhIvFO3J7mu1-lw2E7td5oXCEGLJNJHxsQEjk3LHqoGmyEcyZ1BDJSom17lSBmox5FFd-ohriRgj7-aDbJrbxUT7mimyJyeCRo1vfuIV_qRcwSA-W2kwXftcG8krzoWP_AFCgmvpM01_t11p6jWpe_o0NK7ItttXSrlOAGTMHw0sZKtS6lGegGmMebnlbCC13TW7G7iHqoiCnJZa7V4CIPDHcLKUBbBEMJkssnCof5bB4PreAkBJ5vcFfJuChHGgBxS4p3KxUnzZwMe1_Y7s68=w1168-h657-no?authuser=3",
        thumbnail: "https://lh3.googleusercontent.com/uZROI7w98XsZQ1Dw0oI7vCQoJDB8RZrhCoeKedFCNVh18KqYHNL03JLK9WO1HIk8P7hboVWaO3W0ajJblpa6a-Z_s__IYvjvWk52qgHzdhYkeWkd5fndCkBE58Z6QK0dR2hR3D1PnyKicXORFaJExjqzU5vvYL1Ns14PGgTcnRNyzUQGv6LBVkhI0Q7wXgMOIGefngHfcDZvk6UpGazusNO6qcI_OwdE18VQf1AIJD8sATi00R_VKRntaZFlMIAsWn-D3WDSb5DGWW8PUBbRLHU3kSU-NyzpImFJpiw7pfEDQrhc3HjSVIRi-zrHrU8Df6Y8Lk8xY9foC-F6Ktf2EA4mQDSZooUQ2AChJ0pZniroRJpgl9bFD97mBTNMMyphpd95fM8YpIMBWXxu3K4V682zbozbrtNtfgTSZORhIvFO3J7mu1-lw2E7td5oXCEGLJNJHxsQEjk3LHqoGmyEcyZ1BDJSom17lSBmox5FFd-ohriRgj7-aDbJrbxUT7mimyJyeCRo1vfuIV_qRcwSA-W2kwXftcG8krzoWP_AFCgmvpM01_t11p6jWpe_o0NK7ItttXSrlOAGTMHw0sZKtS6lGegGmMebnlbCC13TW7G7iHqoiCnJZa7V4CIPDHcLKUBbBEMJkssnCof5bB4PreAkBJ5vcFfJuChHGgBxS4p3KxUnzZwMe1_Y7s68=w1168-h657-no?authuser=3",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Reunião do Grupo"
},
{
        src: "https://lh3.googleusercontent.com/GiDgxyUlDGaqlutdcVEoFd3Gox5eD5Qgwf3McSLA4YUliOS-aD06nDtrdx7Pmy4NrLxRrIYqwiKoXrYhfWbCSEZegi-zqJcEHD2GZlRfvozT0wHGM2PpVOSVkE3-lFE8Lc4Pi0f61aLxJsqanSBFPpRIccO8QhlFuE0fSpGGTlhX4wN7dH-aiNyh1NFzC4okMfn-J6bWquh_k7P-FuY1kQJpWQWM7QKzmuHCzEKxre7HHhQAaxLROzw0zjtw2uvxz2Um-Qzc4Js_8TqG86BSaDnZeV356-Po6rglGv0QGWK-tqLTue-tTyaA1T-Hz2TdPgPLcU7inyESNHG1SaR7GxoMCwKa0I6YjeR5crrcaRaxF2zs5brPq_WR_xFE57thIri4TpfYV7Aq5iLqxzYlLl9chepN7ftdQDCIlt2UDrYDBkly2uQZ7P7X6MGmCcm2QVZStSNs4L0pydJl5Zs0kgHsReqsltmtSaXFYgscu3qHi44dOhwTpOtWLHcUc21IO2AKxE-yX9u5Jq3hyVMjgDYM81eifEJFrH7RGQikXIuU6S_OdNfQs3jR6BRBjr8fdrAuTXxdhiDKrI7tJvbjHL7sntpqSr6V9aWct-bKhA1dpQlWyk8w5ZXkLW00SFUr6M8nRRtComTrt0RVbCkfKhWqF0BFrx0Ot3WMRZrnwTkMdZws2NjbqN0iUx-V=w1168-h657-no?authuser=3",
        thumbnail: "https://lh3.googleusercontent.com/GiDgxyUlDGaqlutdcVEoFd3Gox5eD5Qgwf3McSLA4YUliOS-aD06nDtrdx7Pmy4NrLxRrIYqwiKoXrYhfWbCSEZegi-zqJcEHD2GZlRfvozT0wHGM2PpVOSVkE3-lFE8Lc4Pi0f61aLxJsqanSBFPpRIccO8QhlFuE0fSpGGTlhX4wN7dH-aiNyh1NFzC4okMfn-J6bWquh_k7P-FuY1kQJpWQWM7QKzmuHCzEKxre7HHhQAaxLROzw0zjtw2uvxz2Um-Qzc4Js_8TqG86BSaDnZeV356-Po6rglGv0QGWK-tqLTue-tTyaA1T-Hz2TdPgPLcU7inyESNHG1SaR7GxoMCwKa0I6YjeR5crrcaRaxF2zs5brPq_WR_xFE57thIri4TpfYV7Aq5iLqxzYlLl9chepN7ftdQDCIlt2UDrYDBkly2uQZ7P7X6MGmCcm2QVZStSNs4L0pydJl5Zs0kgHsReqsltmtSaXFYgscu3qHi44dOhwTpOtWLHcUc21IO2AKxE-yX9u5Jq3hyVMjgDYM81eifEJFrH7RGQikXIuU6S_OdNfQs3jR6BRBjr8fdrAuTXxdhiDKrI7tJvbjHL7sntpqSr6V9aWct-bKhA1dpQlWyk8w5ZXkLW00SFUr6M8nRRtComTrt0RVbCkfKhWqF0BFrx0Ot3WMRZrnwTkMdZws2NjbqN0iUx-V=w1168-h657-no?authuser=3",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Apresentação"
}]

    return (  
        
	<body id="duas-colunas" class="publicacoes">
 
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
                    <h2>Publicações do Grupo DETAE</h2>
                    <div class="caixa-conteudo">
                        <h3>Minicurso de Arduino</h3><br/>
                       
                        <h6>Realizado no dia XX/XX/2019</h6>
                     

                        <br/>
                        
                        <p>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>
                        <br/>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                        </p>
                        
                        <br/> 
                       <h3>Fotos</h3><br/><br/>
                       <Gallery images={IMAGES}/>
                      
                       <br/><br/>
                       <br/><br/>
                    
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


        </div>


    <div id="container-rodape">
            <div>
                <strong>&copy; 2020 Todos os direitos reservados</strong>
            </div>
    </div>

</body>
    );
}