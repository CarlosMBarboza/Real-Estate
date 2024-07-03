

const formularioLogin=  (req, res) => {
  res.render('auth/login',{ 
    pagina: 'Inicia Sesion'
  })};

  const formularioRegistro=  (req, res) => {
    res.render('auth/registro',{ 
      pagina: 'Crea tu Cuenta'
    })};
    
    const formularioOlvidePassword=  (req, res) => {
      res.render('auth/olvide-password',{ 
        pagina: 'Recupera  tu Cuenta'
      })};
  
    export {
      formularioLogin,
      formularioRegistro,
      formularioOlvidePassword,
    }