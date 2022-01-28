import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import SmallCard from './components/CardGrande/CardGrande';



import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './components/img/eu.png';
import eu2 from './components/img/fisi.png';
import bar from './components/img/bar.png';
// import seta from './components/img/seta.png';
import email from './components/img/email.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={eu}
          nome="Otacília" 
          descricao ="Sou mãe apaixonada, estudante web developer,sou uma pessoa que gosta de desafios e sinto-me realizada ao resolve-los.
          considero-me muito ativa e mantenho o foco quando estou realizando alguma atividade.
          "
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
<SmallCard
imagem={email}
nome="Endereço"
descricao="Lá onde sonhar é possivel"
/>

<SmallCard
          imagem="https://image.flaticon.com/icons/png/512/3293/3293282.png"
      nome="E-mail"
      descricao="Otacilia@gmail.com"
      />
</div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={eu2}
          nome="Fisioterapia" 
          descricao="Atuei como fisioterapeuta por um periodo de 11 anos, nos quais eu desenvolvi atividades de reabilitação de baixa a media complexidade e nos ultimos quatro anos  atuei na aréa de fisioterapia preventiva, desenvolvendo atividades de capacitação visando neste caso a prevenção de doenças futuras!!" 
        />
        
        <CardGrande 
          imagem={bar}
          nome="Cafeteria " 
          descricao="Desenvolvi atividades como barista, nas quais era responsavel por desenvolve  receitas e preparar varios tipos de cafés de alta qualidade, bem como outros tipos de bebidas a base de café." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
