<html>
<head>
    <title>Páginas responsivas - Tutorial Linha de Código</title>
    <style type="text/css">
    <script src="javascripts/jquery.js" type="text/javascript"></script>
        <script type="text/javascript">
        $(document).ready(function() {
        var largura = $(window).width(); /* Capturando a do cliente */
        if (largura <= 921) {
        /* Se a Largura do monitor for menor ou = que 921 px */
        $("#hire").hide(); /* Esconde a bandeira azul*/
        $("#resize").hide(); /* Esconde "triangulo" resize no canto inferior direito*/
        }
        else if (tam >= 922) {
        /* Se não for a condição a cima e for marior ou = a 922 px */
        $("#hire").show(); /* Mostra a bandeira azul*/
        $("#resize").show(); /* Mostra "triangulo" resize no canto inferior direito*/
        }
});
</script>
 
</style>
</head>
<body>
    <div class=”container”>
        <div class="one-third column">
        </div>
            <div class="one-third column">
            </div>
                <div class="one-third column">
                </div>
    </div>
 
</body>
</html>


Read more: http://www.linhadecodigo.com.br/artigo/3628/como-criar-paginas-responsivas-para-varios-dispositivos.aspx#ixzz7MR3uhr7d
