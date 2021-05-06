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
            1000:{
                loop:false,
            }
        }
    });
});