import React from 'react'

const Rodape = ({children}) => {
  return (
  <footer>
    <p>feito com o ❤️ por <a href="https://github.com">{children} </a>  
    </p>
  </footer>
  );
};

export default Rodape
