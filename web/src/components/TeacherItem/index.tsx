import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/51251287?s=460&u=c06f21185fa6f1686befe74dbaeb2b487e7b46d4&v=4"
          alt="Erick"
        />
        <div>
          <strong>Erick Malta</strong>
          <span>Algoritmos</span>
        </div>
      </header>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Officiis dolorum neque veniam quae. Culpa, porro cupiditate? Qui
        deleniti inventore corporis iusto eligendi quaerat, tempora repudiandae
        id illum velit odio suscipit!
      </p>

      <footer>
        <p>
          Preço/hora: <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;