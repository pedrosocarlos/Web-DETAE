import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../css/estilo.css';
import '../../css/normalize.css';

export default function Inicio() {

	const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin (e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id})
            
            localStorage.setItem('Id', id);
            localStorage.setItem('Name', response.data.name);

           
            history.push('/user');
        }catch(err){
                alert('Falha no login, tente novamente!');
        }
	}
	
    return (     
		
        <body id="tres-colunas" class="home">
	
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
							<img src="https://lh3.googleusercontent.com/-zJ4_m7oLnqfvsB5mdlzGhdE3jadwuHYFCmhTcb4msAxJ_6WplIJvLEBQgAZIaCkAlNDknDpGYJ4_FUa0trMC_5iZm4C87NWqQg1uateRY27FRPnj__pwICpY3AkSHFfZh_g73PIjqv-w1JbpFaoUIQX5yvQWDkbKyid9NFg7wZ_B1Lx1avm_XfkpcBwhXg0s_Chq_cp-ZRLt6cj6zVrTrza3BlGyUHX5rBFYgu4RtzcOhTid9KoFbd05Hn5DPSQsB_w1d0kjF70lbvpAd0xeKvi04w0mkWQXz2q5yTomK_bBj5ZrBjFJ-ymi8GzxAZKgEanRrJFUuVu_yi0S9rqudtc5HHZZ7wNvyoAejTLl_HHFm2utTp-f2VZWoMhBnt7widjP1SQq6YwiRXYDQ4e-mi9OzXRYU-xGf3uk4X4gcuMq4qo7t2IRcnlbE4rtZ4oIqwN_TSEGQcp-rr1zi-udR-W274AkjQV8k01CvCVE4Xarh2kJ7Fzk8dXZr4JZIiz2WmCOahO0SK1z0cjmFBaFuahFf73eLHYhw1fQgEw6-OJUfVHyrSP7paEhSTbpwNGaW8eDXEtbZySDZgekG9swjDgAvnDdjzKEjhHr7f_9KtJ7RvbmFpCgOnYhaxeYvi2S5zeiFF9JqGJtzVHu74gCMvfr1NOQYaFmC6ggA6EIR_A_1K3jQSGb9Y1w8-V=w822-h549-no?authuser=3" width="100%" class="imagem-principal" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu sem, porta eu aliquam vel, malesuada magna. 
							</p>
							<a href="https://www5.unioeste.br/portalunioeste/maisnoticias/50847-unioeste-foz-alunos-de-ciencia-da-computacao-constroem-impressoras-3d?fbclid=IwAR3mgqfSfx-gV0ba1lfLE42V98AGqcx-y69N0bBHBCnvQVRFPuS84Tde0FE">Leia Mais</a>
						</div>

						<div class="caixa-conteudo">
							<h3>Entrega de Máscaras</h3>
							<img src="https://lh3.googleusercontent.com/pw/ACtC-3fGhohXrlvHkFOZmLLg1m6UOTA0aA_qyfz8q07qOwI-rrZZdvhCAwrcITreRRcvFgPiwQV-ChFyQLKonBEz2OlL_fjBcmXsphAz3u7HjtU1wQjIuNpqKjWoaKW26uLpW79NReOcH7GDpx-9wqyNfZu8sg=w876-h657-no?authuser=3" width="100%" class="imagem-principal" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu sem, porta eu aliquam vel, malesuada magna. 
							</p>
							<a href="https://www5.unioeste.br/portalunioeste/maisnoticias/50847-unioeste-foz-alunos-de-ciencia-da-computacao-constroem-impressoras-3d?fbclid=IwAR3mgqfSfx-gV0ba1lfLE42V98AGqcx-y69N0bBHBCnvQVRFPuS84Tde0FE">Leia Mais</a>
						</div>
					</div>
 	
					</div>
			

				<div id="secundario">
						<div class="caixa entrevista">
						<h2>Notícias Recentes</h2>
						<div class="caixa-conteudo">
							<h3>Entrevista na Rádio</h3>
							<img src="https://lh3.googleusercontent.com/OBxfoOlRaNiJfHMvB_IeJjtCREXTiUXw7HJLNBnZQX1GzIfrbLqRlJOOH_yQD8_JUQz6KFmwlwT9DuL4cGiRqbwcDr-GGQwzklgHhg_WnxAnwnqte4pohg3FjvBupG-2jheJrjcXn9wuYt69sSfwJh_VjfeSwbw6JkMvQT0eGMspmUKDpPZlZKZs3plPPI6Ii7iljPmNx7TWwwZqfRVGS73xp5FVW_Z5B7eDLQMdUKSVOUFkDRHjQT1q7IYnXpJpXvpdMywq33K1tODzYPj3RQ2VUiOE_fnztlR0tD_mTUcWQIa-u-uoKg5NtqDwnrWlkxW93T2nghXG6jo59N4djdTkHIjT2VU7HXuv9sRUFY_OjKw3SoXkv4WralwYZTIEsnXpWQ-CeYvHIjSKj448AfGpVQN5Wgckh0C6nj4wYSDSNZ1tjdGA5uPIiJfcxqWOoItZqPsxwwPRQ0NJjdD_Nm0aX5gu7gOW88EeQNKs8zkVqv89qRO0mOGBFo-NhZThNpIs8AIkAP9sY_G6SPvhdqSeVaAmDkwvz3mNLqLBAaZCObaF6MKm-k_lsElgYF6m-PLcXabTRaxz-y2VUwJ-BORHStaQAiguHFcPjt5PvQuVItdaBADEdci8oTbX4IhOdNF3QaCD2amhp1NXNwDSABhVoY61AnRdSiNOwlES-wA7FyEvEum2v6Zo3VP2=w876-h657-no?authuser=3" width="100%" class="imagem-principal" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu sem, porta eu aliquam vel, malesuada magna. 
							</p>
							<a href="http://www.seti.pr.gov.br/Noticia/Alunos-de-Ciencia-da-Computacao-da-Unioeste-constroem-impressoras-3D?fbclid=IwAR2DMkj8eOxO0NX1aBZT4gE_MIJIdNEQuQ-ZdrkgfcrUpBzjxDp7TuEs46s">Leia Mais</a>
						</div>
					</div>
						<div class="caixa">
						   <h2>Publicações Recentes</h2>

						<div class="caixa-conteudo">

							<ul id="lista-noticias">
								<li>
									<a href="">
										<img src="https://lh3.googleusercontent.com/OU_tmnx2TUzPusAmnMMd08iukr9EXOAZQwJHuSzX7eakkrcyaJ_7lW9e1l7VtXuepc6tRrXEkNwkSU9M1SK540h_HFuNCBXkyzUdBiFV9-TU9E1iZNa8j1APx4RDMosrTZOd0wSwKszhtk_Bu9Fvn-dIoUm73sH94fojrDHoB6I2wspBScTd_V2_sYJsFh4Z48OakCXHsnCE-iQIzaezx23AKjbQ94rAoNv6_keKi86G11YPI-yceH4gyA4-4l-29NgRSjMF8Po-wqLvCrsz-5b_0d3lO1mYBpMLsVKdGMt6AlFpVT2y5dwbqCg8Zek5Wl-ShtVZB7O6Xzicou0kzRbBy-G4ilNsFLNy71olKN95Ba_DQ22pUwZxetdWLTsFLASip4uk8YDOD0Ea665PrF5Ijsajuze1J2VIUdUd7As56TjMZqzcGSXUuGAHVUoqt0y-hbTKzQ1uTess1GIs0ItgEhNtSmzTLtyj163ZimNbHraLa_Z0WTCG4HdlvkD3mdDyNlhzxsHPds0asHE8bNHe9M2_vZpQGL7XtVcCrrUjRl4HJUsZVHV-3a-OWPp9-fajJ4WgAZsmuz3asSe4UabA8A3UZxmlbZeORgCX2ieAZF0AVN4egPG9f2rxkL5Tyl3z8T0UIqHETc7Pa8MNEDTKffe9k_JBaWV4T_CvN2xjD1q5SQc7u-MaKTlv=w1168-h657-no?authuser=3" width="80"/>
										<h3>Novas tecnologias</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
									</a>
								</li>

								<li>
									<a href="">
										<img src="https://lh3.googleusercontent.com/YTeJnbK38hb7-KRXfbk9puqJbyPSzMYgACqVQ4DOAVyixlR0K6iBYtCxdf_fHa05UZ5jt65r4PqUmfvy5hBHve-H3gkfwcKGSJcjimoOumuy-n-3hbGPUoGZf2a77UL66VoZzVF_NLr0Nunq8sNSX3iIJdlDFMIH3IWLhJQrh-71URCn136DYfbfRilCgwV4f7d7q9WrNTm9gaHwNpb2I_dwelPjgataiDbo0c0rjfeqJcMjQ1cDoz0gNRqXQ1TMiKQxgS_XzdmYG5bMNsuLtQj4Q3_A9_dhiDkUI_WBdIqMblUbs8L217vuuAxPvYdnHfKbRkShfir4hkJ_gGDB33yoWLNY4CR-d-k5bbtMWeXf0QgyYmy21Y4JiiTDxaOg1xIiTiQ0bCLUClr906ItJIUndS8pfJt-yoBmJZi86JypxL8MDyi3KfIdhgzT_n0shzcd6CLRoo_yfbEjM59nxY0hMypdZyvqn-ETAuIrGc8opuQ-cuyAqws-D_lX9N9n8r_ShhifhOfwmi6g21P3-jioe9gYej9amCIzNbm0K7IGf-UZb1azJHJSccca93js8PvU8XFfpdmMIkzeEYKI_DuveSvh-Q2r7qwQwQJoTkZp-Fv8_lsTxmJTCH3PV-od1js0NLbbJXarcGllAoU6hBMKkERhRHkkZcdwZzACgWYK1R3-hSU-24lo981s=w475-h357-no?authuser=3" width="80" />
										<h3>Novas tecnologias</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
									</a>
								</li>

								<li>
									<a href="">
										<img src="https://lh3.googleusercontent.com/pw/ACtC-3cZbEmpRWYhfOVIj8FALBwHiTQZb2x1yp8ImBj5ewkNm1KaW0c08XtqxScg5BZ2Qr4nWUm8qI1laQ4e4tbFD0DMUJja8aHj-5bBubsNpj13TCjgdLd2g1K-icGGEbDP-VCblmLrbb3tghHepZGeTu0G4g=w1168-h657-k-no?authuser=3" width="80" />
										<h3>Novas tecnologias</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
									</a>
								</li>

								<li>
									<a href="">
										<img src="https://lh3.googleusercontent.com/pw/ACtC-3e1IR-1azx_Ejb86KiCCE85xZA4eYIL56zy32BGwRRpL-9VLpK9i15dvrBtr1o3OL53yhijpotjMVMDWLM9pz-0DoRPidGg-GR3sENjhTI0LJWOI5lfeT7h4TqfxV7K5ar1l-iatBW2KIrtxJlktz-Rtw=w876-h657-no?authuser=3" width="80" />
										<h3>Novas tecnologias</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
									</a>
								</li>
							</ul>

						</div>
					</div>

				</div>

		
				<div id="lateral">
					
					<div class="caixa">
						<h2>Atividades</h2>
						<div class="caixa-conteudo">
							<ul>
								<li><a href="">Carina Aragão</a></li>
								<li><a href="">Camila Marques</a></li>
								<li><a href="">Joana Rolim</a></li>
								<li><a href="">Carlos Pedroso</a></li>
								<li><a href="">Profª Eliane</a></li>
								<li><a href="">Profª Fabiana</a></li>
								<li><a href="">Harry Styles</a></li>
								

							</ul>
						</div>
					</div>

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