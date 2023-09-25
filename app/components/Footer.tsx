

const Footer: React.FC = () => {
    return (
      <footer className="h-[300px] bg-red-600 text-white p-6 rounded-tr-lg  ">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="text-left">
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p className="mt-2">Endereço da Empresa</p>
            <p>Telefone: (123) 456-7890</p>
            <p>Email: contato@empresa.com</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Redes Sociais</h2>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="text-white hover:text-red-500 focus:outline-none">
                Facebook
              </button>
              <button className="text-white hover:text-red-500 focus:outline-none">
                Twitter
              </button>
              <button className="text-white hover:text-red-500 focus:outline-none">
                Instagram
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">Fórmula 1</p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  