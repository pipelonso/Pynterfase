function successalert() {
    
    swal({
                title: 'Operación completada con exito',
                text: '',
                type: 'success'
            });
}

function errorpassword() {
    swal({
        title: 'Contraseña incorrecta',
        text: 'La contraseña no coincide con la registrada',
        type: 'error'
    }
    );

}

function voidpassword() {
    swal({
        title: 'Contraseña Vacia',
        text:'Digita la contraseña',
        type: 'error'
    });

}

function voidmail() {

    swal({
        title: 'Correo vacio',
        text: 'Digita el correo',
        type: 'error'

    });


}


function voidall() {

    swal({
        title: 'Campos Faltantes',
        text: 'Digita los campos faltantes',
        type: 'error'


    });


}

function notpassEquals() {

    swal({
        title: 'Las contraseñas no coinciden',
        text: 'Asegurate que las contraseñas coincidan',
        type: 'error'


    });


}

function AlreadyExistUser() {
    swal({
        title: 'USUARIO EXISTENTE',
        text: 'Este correo ya existe en la base de datos',
        type: 'error'
    });
}

function UserorpasswordError() {
    swal({
        title: 'USUARIO O CONTRASEÑA NO VALIDOS',
        text: 'Compruebe los valores ingresados',
        type: 'error'
    });
}

