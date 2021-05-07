(function ssw(window, document, console, querySelector, querySelectorAll) {
    // nav menu
    document.addEventListener("DOMContentLoaded", DOMContentLoaded);
    window.addEventListener("load", load);
    /** O evento DOMContentLoaded é acionado quando todo o HTML foi
     * completamente carregado e analisado, sem aguardar pelo CSS, imagens,
     * e subframes para encerrar o carregamento.
     */
    function DOMContentLoaded(evt) {
        console.log('DOMContentLoaded', evt);
    }

    /** O evento de carga é disparado quando toda a página é carregada,
     * incluindo todos os recursos dependentes, como folhas de estilo e imagens.
     */
    function load(evt) {
        startYT();
        getTrafficData();
    }
    function startYT(){
        // evento de clique dos videos
        var embed = querySelectorAll('[data-embedvideo]');
        for (const item of embed) {
            item.addEventListener('click', function(){
                var embedurl = this.dataset.embedvideo;
                querySelector('#yt').src = embedurl;
                querySelector('#ytmodal').classList.add('active');
            });
        }
        // evento de clique do botão fechar
        
        var ytclose = querySelector('#ytclose');
        ytclose.addEventListener('click', function(){
            querySelector('#ytmodal').classList.remove('active');
        })
    }
    function getTrafficData(){
        document.getElementById('traffic_source').value = getUriParam('utm_source') ? getUriParam('utm_source') : getCookie('__trf.src');
        document.getElementById('traffic_medium').value = getUriParam('utm_medium');
        document.getElementById('traffic_campaign').value = getUriParam('utm_campaign');
        document.getElementById('traffic_value').value = getUriParam('utm_term');
    }
    /** https://www.w3schools.com/js/js_cookies.asp */
    function getCookie(cname) {
        let name = `${cname}=`;
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }
    /**
    * Pega parametros passados pela uri
    * @param {String} param - parâmetro que se quer pegar
    * @author Vinicius de Santana
    */
    function getUriParam(param) {
        var params = window.location.search.substr(1).split('&');
        for (var i = 0; i < params.length; i++) {
            var par = params[i].split('=');
            if (par[0] == param) {
                return decodeURIComponent(par[1]);
            }
        }
        return '';
    }
})(window, document, console, x=>document.querySelector(x), x=>document.querySelectorAll(x));

// owl carousel
$(document).ready(function(){
    $("#carrosselvideos").owlCarousel({
        loop:true,
        nav:false,
        margin:15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:3,
            },
            1000:{
                items:6,
                loop:false,
            },
            1900:{
                items:7,
                loop:false,
            }
        }
    });
    $("#carrosselsocial").owlCarousel({
        items:1,
        nav:true,
        loop:true,
        navText:['<img src="./assets/img/leftarrow.png" />', '<img src="./assets/img/rightarrow.png" />'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            700:{
                nav:true,
            },
        }
    });
});