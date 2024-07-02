

const formularioLogin=  (req, res) => {
  res.render('auth/login',{ 
    pagina: 'Inicia Sesion'
  })};

  const formularioRegistro=  (req, res) => {
    res.render('auth/registro',{ 
      pagina: 'Crea tu Cuenta'
    })};
    const formularioOLvidePassword=  (req, res) => {
      res.render('auth/olvidePassword',{ 
        pagina: 'Recupera tu Cuenta'
      })}
  

    export {
      formularioLogin,
      formularioRegistro,
      formularioOLvidePassword,
     
    
    }