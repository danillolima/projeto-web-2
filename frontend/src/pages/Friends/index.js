import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Chat from "../../components/Chat";
import './styles.css';
const Friends = () => {
  return (
    <Fragment>
      
      <Header />
      <div className="friends">
        <Chat />
      </div>
    </Fragment>
  );
};
export default Friends;