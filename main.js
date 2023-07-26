$(document).ready(function() {

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNewImage = $('#enderecoNewImage').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNewImage}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNewImage}" tile="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(800);
            $('#enderecoNewImage').val('');
    })
})