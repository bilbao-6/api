$('#bootEnviar').click(function(e){
$.get('https://my-json-server.typicode.com/bilbao-6/api/persona',function(datos){
    datos.forEach(function(dato){
        var cuerpo = $('#datoss');
        cuerpo.append('<tr scope="row"><td>'+dato.nombre+'</td><td>'+dato.apellido+'</td><td>'+dato.edad+'</td><td>'+dato.sexo+'</td><td>'+dato.ciudad+'</td><td>')
    });
})
});