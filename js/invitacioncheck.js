var qrcode = new QRCode("qrcode");
var Invitacion;

function UrlCode() {


    var defaultcode = { code: '500', personas: 0, nombre: 'INVALID' };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var codeurl = urlParams.get('code');

    if (codeurl == null) {
        return defaultcode;

    }
    else {
        var code = invitaciones.find(e => e.code == codeurl);            
        if (code == undefined) {
            return defaultcode
        }
        else {
            if (code.nombre == 'INVALID') {
                return code;
            }
            else {
                return code;
            }
        }

    }
}


$(document).ready(function () {
    Invitacion = UrlCode();
    if(Invitacion.code=='500'){      
        $('.invitacion').hide();
    }
    else if(Invitacion.code == 'INVALID'){    
    }
    else{    
        $('.invitacion').show();
        $('#invName').text(Invitacion.nombre);
        $('#invPersonas').text(Invitacion.personas);
        qrcode.makeCode('https://alexismartinezrs.github.io/a_and_a/recepcion.html?code=' + Invitacion.code);
    }


})


