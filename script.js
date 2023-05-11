
$(document).ready(function() {
  var usuarios = [];
  function actualizarTablaUsuarios() {
    $("#userTableBody").empty();

    usuarios.forEach(function(usuario) {
      var fila = "<tr>" +
                   "<td>" + usuario.nombre + "</td>" +
                   "<td>" + usuario.apellido + "</td>" +
                   "<td>" + usuario.email + "</td>" +
                   "<td>" + usuario.telefono + "</td>" +
                   "<td><button class='btn btn-sm btn-primary editar-usuario' data-id='" + usuario.id + "'>Editar</button> " +
                   "<button class='btn btn-sm btn-danger eliminar-usuario' data-id='" + usuario.id + "'>Eliminar</button></td>" +
                 "</tr>";

      $("#userTableBody").append(fila);
    });

    $(".editar-usuario").click(function() {
      var usuarioId = $(this).data("id");
    });

    $(".eliminar-usuario").click(function() {
      var usuarioId = $(this).data("id");
    });
  }

  function agregarUsuario(nombre, apellido, email, telefono, contrasena) {
    var id = usuarios.length + 1;
    var usuario = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      contrasena: contrasena
    };
    usuarios.push(usuario);
    actualizarTablaUsuarios();
  $("#addUserForm").submit(function(event) {
    event.preventDefault();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var telefono = $("#telefono").val();
    var contrasena = $("#contrasena").val();
    agregarUsuario(nombre, apellido, email, telefono, contrasena);
    $("#nombre").val("");
    $("#apellido").val("");
    $("#email").val("");
    $("#telefono").val("");
    $("#contrasena").val("");
  });
  }})
