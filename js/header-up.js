Vue.component('child-header-up',{
    template:  //html 
    `
   
    <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="logo-header">
            <img src="assets/img/logo.svg" alt="">
        </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="state-look">
                <div class="escudo">
                        <img src="assets/img/escudo.png" alt="">
                    </div>
                    <div class="search-page">
                            <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <div class="input-group-append">
                                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
                                    </div>
                                  </div>
                    </div>
                    <div class="nav-search">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Mapa de sitio</a></li>
                            <li class="border-none"><a  href="#">Contacto</a></li>
                        </ul>
                    </div>
        </div>
    </div>
</div>
`
});

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })