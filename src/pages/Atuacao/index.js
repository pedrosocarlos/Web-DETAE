import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';


export default function Atuacao() {
    
const IMAGES =
[{
        src: "https://lh3.googleusercontent.com/UJPv0tD38caVkN2AfD43M8cCNc1Qneq62RXZy00RfsQU-jrotiZEoAD9Frnx2y-e64v8NMSDX6Jz9t7t05ejj65aQtPIbx3vULnhuvtmbE9Gum6mgcWU7sb65enBCxN6bH_OTjESTvPeYgUwcgGounT8JDFa0Q3Y-xhOBQXxJXMRF4vFqS5JW4p6M1BVhHYbuMrU6GURdnxlVubop8Z2_wmXdLKC45VrZhYODqx_xPcbZiQIyN38EH_mQl0YLEruWQTr69r_ll5rc6iWuvYfdn8eGY---pHAV-kjDp9feQGkEgnhX-ee43enhSnKN19DWWZYNp_1vP2S7NHyHGurZmYT0tfHgBgJ1kAqhQCnbUl3Fl6qQaBBgSY2VYyJ5lECJrwhkSaZvvH9aydFNKvXTTAWTpsUjX2dL9ivIEbEEQJyhKGthgdhzqtyLv0o5985yeJh-NBtKB3WdDLzgI9Is4iew4uHX6q9Ru0lnikAtdcX_GE84J90ko07muGUqIsYRpTrqRoS4q-f_TUgnL3rSKcsQhoC9COLp7GvUBkY5nztco2xcldFq8wMLnMi0xeFUfidCHYxKE-Rb4pRLq2PhWeAqsErYBvmQZlPkdAeIpkrzAUvCn3W0K3aOcClfNTc8mMaOoV5WUJu3T2AzC3z62044fziN7_NbNRt9CgFYb2dViv5NzBJXpzrwiueyQ=w1081-h657-no?authuser=3",
        thumbnail: "https://lh3.googleusercontent.com/UJPv0tD38caVkN2AfD43M8cCNc1Qneq62RXZy00RfsQU-jrotiZEoAD9Frnx2y-e64v8NMSDX6Jz9t7t05ejj65aQtPIbx3vULnhuvtmbE9Gum6mgcWU7sb65enBCxN6bH_OTjESTvPeYgUwcgGounT8JDFa0Q3Y-xhOBQXxJXMRF4vFqS5JW4p6M1BVhHYbuMrU6GURdnxlVubop8Z2_wmXdLKC45VrZhYODqx_xPcbZiQIyN38EH_mQl0YLEruWQTr69r_ll5rc6iWuvYfdn8eGY---pHAV-kjDp9feQGkEgnhX-ee43enhSnKN19DWWZYNp_1vP2S7NHyHGurZmYT0tfHgBgJ1kAqhQCnbUl3Fl6qQaBBgSY2VYyJ5lECJrwhkSaZvvH9aydFNKvXTTAWTpsUjX2dL9ivIEbEEQJyhKGthgdhzqtyLv0o5985yeJh-NBtKB3WdDLzgI9Is4iew4uHX6q9Ru0lnikAtdcX_GE84J90ko07muGUqIsYRpTrqRoS4q-f_TUgnL3rSKcsQhoC9COLp7GvUBkY5nztco2xcldFq8wMLnMi0xeFUfidCHYxKE-Rb4pRLq2PhWeAqsErYBvmQZlPkdAeIpkrzAUvCn3W0K3aOcClfNTc8mMaOoV5WUJu3T2AzC3z62044fziN7_NbNRt9CgFYb2dViv5NzBJXpzrwiueyQ=w1081-h657-no?authuser=3",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Reunião do Grupo"
},
{
        src: "https://lh3.googleusercontent.com/dfPuC1s-dzBQcR2mQYi3b6_NiMNkqLKXt2tEsWQ8iHb8uAcfeM2njilNQw2uuFLPbLYvh9sU98_yuxuooyfkIB-dtkbEy7UGguCDhw2uwKZ1PBxscj8iFKtIymcs2-OSE83r4JViZasWGo4enxZ3mrHfFwN6acatX9sZ4HiFCZeh9XAx69-w6mtvNdUpUXwF4K4FbTzyBzitoCdu_BPz_Q016cgca2ubU8xPqaROa2KdD2rojjr339b2sL7HhkMsbnwc3hXAhQ92wFgq7ybspEAoPsnNGV21IVJPrYE4NV67ohEsIdHqhSEcEhri6fmNYbDIFLoKl4GAtTLjRkUzmuClBcZwkLupzslXmt8Kvh8jfdD_fecrHhc2xU6RLoClkT2TKkVERbhOoifGew01un_N_694SZ0lpzAoqoEh_5XAeX4PTMrTXaGP9iZTYsPmiG-Zu7yGiGdUziKGofNXVhpUrtWAi9q3GKgzSEXGHu2T_JVXcOAxDw4F4uLpn1UZ8eyZb__tQnFX9jL00E0GoKrc03p9Mp-_QIqJTjTnPuWwJE-zActxrDRtcPrQFlDL0dX_brEXTqxf0EM9RG9I7wLoS1USCqczb28Dv0J0-Ij1L0WzBam3c_iojaMAbx-UQfPjdfzB714UOscCdSwaMHBX-tmWYxmqxC21dRnXZTTShUmUm23P3XUCXuJ83A=w495-h278-no?authuser=3",
        thumbnail: "https://lh3.googleusercontent.com/dfPuC1s-dzBQcR2mQYi3b6_NiMNkqLKXt2tEsWQ8iHb8uAcfeM2njilNQw2uuFLPbLYvh9sU98_yuxuooyfkIB-dtkbEy7UGguCDhw2uwKZ1PBxscj8iFKtIymcs2-OSE83r4JViZasWGo4enxZ3mrHfFwN6acatX9sZ4HiFCZeh9XAx69-w6mtvNdUpUXwF4K4FbTzyBzitoCdu_BPz_Q016cgca2ubU8xPqaROa2KdD2rojjr339b2sL7HhkMsbnwc3hXAhQ92wFgq7ybspEAoPsnNGV21IVJPrYE4NV67ohEsIdHqhSEcEhri6fmNYbDIFLoKl4GAtTLjRkUzmuClBcZwkLupzslXmt8Kvh8jfdD_fecrHhc2xU6RLoClkT2TKkVERbhOoifGew01un_N_694SZ0lpzAoqoEh_5XAeX4PTMrTXaGP9iZTYsPmiG-Zu7yGiGdUziKGofNXVhpUrtWAi9q3GKgzSEXGHu2T_JVXcOAxDw4F4uLpn1UZ8eyZb__tQnFX9jL00E0GoKrc03p9Mp-_QIqJTjTnPuWwJE-zActxrDRtcPrQFlDL0dX_brEXTqxf0EM9RG9I7wLoS1USCqczb28Dv0J0-Ij1L0WzBam3c_iojaMAbx-UQfPjdfzB714UOscCdSwaMHBX-tmWYxmqxC21dRnXZTTShUmUm23P3XUCXuJ83A=w495-h278-no?authuser=3",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Grupo construindo Impressoras 3D"
},
 
{
    src: "https://lh3.googleusercontent.com/pw/ACtC-3dSaLwIAx0Rj4Rz1j074jQSpP-xiZSt3RbZ3btMiv3AmPlzXbHss1_plnTk2rMe0p6QGoggsw82IDQpp691UIA12l0mMIstkWq_MbGmy4VV3MWQEa9gXuSaqg6nFh81xhlDK05k8m3PMxEhGyJtkxKa-Q=w876-h657-no?authuser=3",
    thumbnail: "https://lh3.googleusercontent.com/pw/ACtC-3dSaLwIAx0Rj4Rz1j074jQSpP-xiZSt3RbZ3btMiv3AmPlzXbHss1_plnTk2rMe0p6QGoggsw82IDQpp691UIA12l0mMIstkWq_MbGmy4VV3MWQEa9gXuSaqg6nFh81xhlDK05k8m3PMxEhGyJtkxKa-Q=w876-h657-no?authuser=3",        thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Grupo construindo Impressoras 3D "
},
{
    src: "https://lh3.googleusercontent.com/pw/ACtC-3fCSrt0K1diWnjAb5LISggnvPMFw9n7QbF1dlKoakvC5mwrgfYBZmcs0mnYoLpA-JzSI_6dZa882KlCFe8pJ0iX5HxeHEOsmWkM5gchRmszs7wpLTynbY4NdKXZ_9w3r5LRf2fprmo4cLVpm7g0EVUkuA=w1366-h649-no?authuser=3",
    thumbnail: "https://lh3.googleusercontent.com/pw/ACtC-3fCSrt0K1diWnjAb5LISggnvPMFw9n7QbF1dlKoakvC5mwrgfYBZmcs0mnYoLpA-JzSI_6dZa882KlCFe8pJ0iX5HxeHEOsmWkM5gchRmszs7wpLTynbY4NdKXZ_9w3r5LRf2fprmo4cLVpm7g0EVUkuA=w1366-h649-no?authuser=3",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Nosso laboratório "
},
{
    src: "https://lh3.googleusercontent.com/pw/ACtC-3dNw3xb4LTEtp0QKKZldm8-2EULkJsUSkW1lxJjFLqr6Zv9o0gNCJBqaYE7P-eNDss132ty4Y5Csu8jL5WIvhrIQk9i8l0laaidktOa1CH_XM3mz4qv7Ym8dRaffprNwtU2c1w8nvkjzPDr6M4EYwy4wQ=w876-h657-no?authuser=3",
    thumbnail: "https://lh3.googleusercontent.com/pw/ACtC-3dNw3xb4LTEtp0QKKZldm8-2EULkJsUSkW1lxJjFLqr6Zv9o0gNCJBqaYE7P-eNDss132ty4Y5Csu8jL5WIvhrIQk9i8l0laaidktOa1CH_XM3mz4qv7Ym8dRaffprNwtU2c1w8nvkjzPDr6M4EYwy4wQ=w876-h657-no?authuser=3",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Grupo construindo Impressoras 3D "
},
{
    src: "https://lh3.googleusercontent.com/14PaXKG-6Gbv52OPbJJN_VH5tYYGjLbBGcejTUzwUV1K0QQeMDlIOLnxZhLqPcley_f1_TwE4DCANjy7XCuoslK1Fm5vmOxId1YbY_vYXimJ5Zej3J3v2vxmxtHx7bYmfhR429LnYuPMY7lqL9eA5WsxXzd7l_hpnbQtNWQSar09RzXGtWlgu-NzS5NV3dipBgsMcfxo0QvoLOUJJtIpbYEPnXy-g_0AiK4mr1CcfQ37mCu5sDSRY_0S8tww1gIbVFMlPwNMvjDbMJkVWTReetqz7NiJJ7ZrBg1qt99PZVSbyjXwr334OWkGEcFhaJaOYP_udbgkOAtVS0FOKSMH1IUky97_A66XdPKs6yzbCYLX7qoiZVQ7F8yJscPaAXC3HebPGvIrYD-3B6c3Fg72LFX7weo0s_h2JgNvxfZFcNXdNJj94GhRF0SiD7CArOxh_F3M3ZZoGs71Ez2CAPFcBhINJTc7oKdG0xyaSWRJq1bS3qWg3NTZ2kPMg6dCKnG1owSwCrIezzsL7vKXj0Lu9go2Koaio_-add-vSlQpsBOzGSDgIh5hqplqF8-31Jiaz5Q3zDhwasS-KCv4zDuNGuLLLcu_1ye6on9DqY6BJD9wb2D66m-pqGSgMHA4tF6_6UK_bMUcZzIT2ZTeGsLVt58DeVkiNC0Yrntxc-Xf3gKFJhfwyfdPGp1wAiGT=w755-h657-no?authuser=3",
    thumbnail: "https://lh3.googleusercontent.com/14PaXKG-6Gbv52OPbJJN_VH5tYYGjLbBGcejTUzwUV1K0QQeMDlIOLnxZhLqPcley_f1_TwE4DCANjy7XCuoslK1Fm5vmOxId1YbY_vYXimJ5Zej3J3v2vxmxtHx7bYmfhR429LnYuPMY7lqL9eA5WsxXzd7l_hpnbQtNWQSar09RzXGtWlgu-NzS5NV3dipBgsMcfxo0QvoLOUJJtIpbYEPnXy-g_0AiK4mr1CcfQ37mCu5sDSRY_0S8tww1gIbVFMlPwNMvjDbMJkVWTReetqz7NiJJ7ZrBg1qt99PZVSbyjXwr334OWkGEcFhaJaOYP_udbgkOAtVS0FOKSMH1IUky97_A66XdPKs6yzbCYLX7qoiZVQ7F8yJscPaAXC3HebPGvIrYD-3B6c3Fg72LFX7weo0s_h2JgNvxfZFcNXdNJj94GhRF0SiD7CArOxh_F3M3ZZoGs71Ez2CAPFcBhINJTc7oKdG0xyaSWRJq1bS3qWg3NTZ2kPMg6dCKnG1owSwCrIezzsL7vKXj0Lu9go2Koaio_-add-vSlQpsBOzGSDgIh5hqplqF8-31Jiaz5Q3zDhwasS-KCv4zDuNGuLLLcu_1ye6on9DqY6BJD9wb2D66m-pqGSgMHA4tF6_6UK_bMUcZzIT2ZTeGsLVt58DeVkiNC0Yrntxc-Xf3gKFJhfwyfdPGp1wAiGT=w755-h657-no?authuser=3",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Nossos materiais e impressoras construídas"
}]
    return (  
        <body id="duas-colunas" class="atuacao">
		
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
                <h2>Linhas de Pesquisa</h2>
                <div class="caixa-conteudo">
                    <h3>Educação a distância (EAD)</h3>
                    <br/>
                    <p>
                        <br/><strong>Palavras-chave:</strong></p>
                    <ol type="I">
                        <li>Ambiente virtuais de educação;</li>
                        <li>Aprendizagem corporativa;</li>
                        <li>Objetos de aprendizagem.</li>
                    </ol>
                    <a href="http://dgp.cnpq.br/dgp/espelholinha/529559659150823633470">&gt; Leia Mais</a>

                    <br/><br/><br/>

                    <h3>Jogos educacionais</h3>
                    <br/>
                    <p><br/><strong>Palavras-chave:</strong></p>
                    <ol type="I">
                        <li>Game design;</li>
                        <li>RPG educacional;</li>
                        <li>Editores de jogos.</li>
                    </ol>

                    <a href="http://dgp.cnpq.br/dgp/espelholinha/529559659150823633469">&gt; Leia Mais</a>

                    <br/><br/><br/>


                    <h3>Letramento Digital</h3>
                    <br/>
                    <p><br/><strong>Objetivos:</strong></p>
                    <ol type="I">
                        <li>Pesquisar os tópicos abordados nos tutoriais online de letramento digital;</li>
                        <li>Investigar uma metodologia para criar tutoriais online para diferentes públicos.</li>
                    </ol>
                        
       
                    <p><br/><strong>Palavras-chave:</strong></p>
                    <ol type="I">
                        <li>Letramento digital;</li>
                        <li>Inclusão digital.</li>
                    </ol>

                    <a href="http://dgp.cnpq.br/dgp/espelholinha/529559659150823633472">&gt; Leia Mais</a>

                    <br/><br/><br/>

                    <h3>Objetos de aprendizagem (OA)</h3>
                    <br/>
                    <p><br/><strong>Objetivos:</strong></p>
                    <ol type="I">
                        <li>Elaborar o design de objetos de aprendizagem para área de linguagem;</li>
                        <li>Re-design de de objetos de aprendizagem de outras áreas;</li>
                        <li>Elaborar o design de de objetos de aprendizagem para multiplataformas.</li>
                    </ol>
                        
                    <p><br/><strong>Palavras-chave:</strong></p>
                    <ol type="I">
                        <li>Objetos de aprendizagem (OAs);</li>
                        <li>Inclusão digital;</li>
                        <li>OAs para multiplataformas;</li>
                        <li>OAs para MALL.</li>                
                    </ol>

                    <a href="dgp.cnpq.br/dgp/espelholinha/529559659150823633473">&gt; Leia Mais</a>

                    <br/><br/><br/>

                    <h3>Tecnologia aplicada à educação</h3>
                    <br/>
                    <p><br/><strong>Objetivo:</strong></p>
                    <ol type="I">
                    <li>Pesquisar o emprego tecnologias que sejam aplicáveis a educação nas suas diversas modalidades.</li>
                    </ol>
                        
                    <p><br/><strong>Palavras-chave:</strong></p>
                    <ol type="I">
                        <li>Tecnologia educacional;</li>
                        <li>Ferramentas de apoio;</li>
                        <li>Inclusão social.</li>
                            
                    </ol>
                    
                    <a href="http://dgp.cnpq.br/dgp/espelholinha/529559659150823633468">&gt; Leia Mais </a>

                    <br/><br/><br/>


                        <hr/>
                    

                    <div class="caixa destaque">
                        <h2>Laboratório de Pesquisa</h2>
                    </div>
                  

                    <h3>Nosso Espaço</h3>
                    <br/><br/>
                    <p>O laboratório de Pesquisa está situado na Avenida Tancredo Neves, 6731. PTI, Bloco 5, Espaço 3, Sala 9. </p>
                    <br/>

                    <h3 class="fotos-galeria">Fotos</h3>
                    
                    <br/><br/>

                    <Gallery images={IMAGES}/>
        

                </div> 
            </div>		
        </div>
    

    <div id="lateral">

        <div class="caixa">
            <h2>Áreas do Conhecimento</h2>
            <div class="caixa-conteudo">
                <ul>
                    <li><a>Ciências Exatas e da Terra</a>
                    </li>
                    <li><a>Ciência da Computação</a>
                    </li>
                    <li><a>Sistemas de Computação</a>
                    </li>
                    <li><a>Ciências Humanas</a>
                    </li>
                    <li><a> Educação</a>
                    </li>
                    <li><a>Ensino-Aprendizagem</a>
                    </li>
                    <li><a>Tecnologia aplicada á educação</a>
                    </li>
                    <li><a>Tecnologia Educacional</a>
                    </li>                         
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