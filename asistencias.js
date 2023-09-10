function total1ero() {
    var totalAlumnos = document.getElementById('total-1ero').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-1ero').value;
    var totalAlumnos_martes = document.getElementById('martes-1ero').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-1ero').value;
    var totalAlumnos_jueves = document.getElementById('jueves-1ero').value;
    var totalAlumnos_viernes = document.getElementById('viernes-1ero').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;
    
    document.getElementById('porcentaje1ero').innerHTML += totalPorcentaje + "%"

    console.log("1ER GRADO")
    console.log("totalAlumnos: " + totalAlumnos)
    console.log("totalAlumnos_semana: " + totalAlumnos_semana)
    console.log("totalAlumnos_lunes: " + totalAlumnos_lunes)
    console.log("totalAlumnos_martes: " + totalAlumnos_martes)
    console.log("totalAlumnos_miercoles: " + totalAlumnos_miercoles)
    console.log("totalAlumnos_jueves: " + totalAlumnos_jueves)
    console.log("totalAlumnos_viernes: " + totalAlumnos_viernes)
    console.log("asistenciaTotal: " + asistenciaTotal)
    console.log("totalPorcentaje: " + totalPorcentaje)

    return totalPorcentaje;
}

function total1ero_calculos() {
    var totalAlumnos = document.getElementById('total-1ero').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-1ero').value;
    var totalAlumnos_martes = document.getElementById('martes-1ero').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-1ero').value;
    var totalAlumnos_jueves = document.getElementById('jueves-1ero').value;
    var totalAlumnos_viernes = document.getElementById('viernes-1ero').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;

    return totalPorcentaje;
}

function total2do() {
    var totalAlumnos = document.getElementById('total-2do').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-2do').value;
    var totalAlumnos_martes = document.getElementById('martes-2do').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-2do').value;
    var totalAlumnos_jueves = document.getElementById('jueves-2do').value;
    var totalAlumnos_viernes = document.getElementById('viernes-2do').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;
    
    document.getElementById('porcentaje2do').innerHTML += totalPorcentaje + "%"

    console.log("2DO GRADO")
    console.log("totalAlumnos: " + totalAlumnos)
    console.log("totalAlumnos_semana: " + totalAlumnos_semana)
    console.log("totalAlumnos_lunes: " + totalAlumnos_lunes)
    console.log("totalAlumnos_martes: " + totalAlumnos_martes)
    console.log("totalAlumnos_miercoles: " + totalAlumnos_miercoles)
    console.log("totalAlumnos_jueves: " + totalAlumnos_jueves)
    console.log("totalAlumnos_viernes: " + totalAlumnos_viernes)
    console.log("asistenciaTotal: " + asistenciaTotal)
    console.log("totalPorcentaje: " + totalPorcentaje)

    return totalPorcentaje;
}

function total2do_calculos() {
    var totalAlumnos = document.getElementById('total-2do').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-2do').value;
    var totalAlumnos_martes = document.getElementById('martes-2do').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-2do').value;
    var totalAlumnos_jueves = document.getElementById('jueves-2do').value;
    var totalAlumnos_viernes = document.getElementById('viernes-2do').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;

    return totalPorcentaje;
}

function total3ero() {
    var totalAlumnos = document.getElementById('total-3ero').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-3ero').value;
    var totalAlumnos_martes = document.getElementById('martes-3ero').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-3ero').value;
    var totalAlumnos_jueves = document.getElementById('jueves-3ero').value;
    var totalAlumnos_viernes = document.getElementById('viernes-3ero').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;
    
    document.getElementById('porcentaje3ero').innerHTML += totalPorcentaje + "%"

    console.log("3ER GRADO")
    console.log("totalAlumnos: " + totalAlumnos)
    console.log("totalAlumnos_semana: " + totalAlumnos_semana)
    console.log("totalAlumnos_lunes: " + totalAlumnos_lunes)
    console.log("totalAlumnos_martes: " + totalAlumnos_martes)
    console.log("totalAlumnos_miercoles: " + totalAlumnos_miercoles)
    console.log("totalAlumnos_jueves: " + totalAlumnos_jueves)
    console.log("totalAlumnos_viernes: " + totalAlumnos_viernes)
    console.log("asistenciaTotal: " + asistenciaTotal)
    console.log("totalPorcentaje: " + totalPorcentaje)

    return totalPorcentaje;
}

function total3ero_calculos() {
    var totalAlumnos = document.getElementById('total-3ero').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-3ero').value;
    var totalAlumnos_martes = document.getElementById('martes-3ero').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-3ero').value;
    var totalAlumnos_jueves = document.getElementById('jueves-3ero').value;
    var totalAlumnos_viernes = document.getElementById('viernes-3ero').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;

    return totalPorcentaje;
}

function total4to() {
    var totalAlumnos = document.getElementById('total-4to').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-4to').value;
    var totalAlumnos_martes = document.getElementById('martes-4to').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-4to').value;
    var totalAlumnos_jueves = document.getElementById('jueves-4to').value;
    var totalAlumnos_viernes = document.getElementById('viernes-4to').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;
    
    document.getElementById('porcentaje4to').innerHTML += totalPorcentaje + "%"

    console.log("4TO GRADO")
    console.log("totalAlumnos: " + totalAlumnos)
    console.log("totalAlumnos_semana: " + totalAlumnos_semana)
    console.log("totalAlumnos_lunes: " + totalAlumnos_lunes)
    console.log("totalAlumnos_martes: " + totalAlumnos_martes)
    console.log("totalAlumnos_miercoles: " + totalAlumnos_miercoles)
    console.log("totalAlumnos_jueves: " + totalAlumnos_jueves)
    console.log("totalAlumnos_viernes: " + totalAlumnos_viernes)
    console.log("asistenciaTotal: " + asistenciaTotal)
    console.log("totalPorcentaje: " + totalPorcentaje)

    return totalPorcentaje;
}

function total4to_calculos() {
    var totalAlumnos = document.getElementById('total-4to').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-4to').value;
    var totalAlumnos_martes = document.getElementById('martes-4to').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-4to').value;
    var totalAlumnos_jueves = document.getElementById('jueves-4to').value;
    var totalAlumnos_viernes = document.getElementById('viernes-4to').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;

    return totalPorcentaje;
}

function total5to() {
    var totalAlumnos = document.getElementById('total-5to').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-5to').value;
    var totalAlumnos_martes = document.getElementById('martes-5to').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-5to').value;
    var totalAlumnos_jueves = document.getElementById('jueves-5to').value;
    var totalAlumnos_viernes = document.getElementById('viernes-5to').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;
    
    document.getElementById('porcentaje5to').innerHTML += totalPorcentaje + "%"

    console.log("5TO GRADO")
    console.log("totalAlumnos: " + totalAlumnos)
    console.log("totalAlumnos_semana: " + totalAlumnos_semana)
    console.log("totalAlumnos_lunes: " + totalAlumnos_lunes)
    console.log("totalAlumnos_martes: " + totalAlumnos_martes)
    console.log("totalAlumnos_miercoles: " + totalAlumnos_miercoles)
    console.log("totalAlumnos_jueves: " + totalAlumnos_jueves)
    console.log("totalAlumnos_viernes: " + totalAlumnos_viernes)
    console.log("asistenciaTotal: " + asistenciaTotal)
    console.log("totalPorcentaje: " + totalPorcentaje)

    return totalPorcentaje;
}

function total5to_calculos() {
    var totalAlumnos = document.getElementById('total-5to').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-5to').value;
    var totalAlumnos_martes = document.getElementById('martes-5to').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-5to').value;
    var totalAlumnos_jueves = document.getElementById('jueves-5to').value;
    var totalAlumnos_viernes = document.getElementById('viernes-5to').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;

    return totalPorcentaje;
}


function total6to() {
    var totalAlumnos = document.getElementById('total-6to').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-6to').value;
    var totalAlumnos_martes = document.getElementById('martes-6to').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-6to').value;
    var totalAlumnos_jueves = document.getElementById('jueves-6to').value;
    var totalAlumnos_viernes = document.getElementById('viernes-6to').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;
    
    document.getElementById('porcentaje6to').innerHTML += totalPorcentaje + "%"

    console.log("6TO GRADO")
    console.log("totalAlumnos: " + totalAlumnos)
    console.log("totalAlumnos_semana: " + totalAlumnos_semana)
    console.log("totalAlumnos_lunes: " + totalAlumnos_lunes)
    console.log("totalAlumnos_martes: " + totalAlumnos_martes)
    console.log("totalAlumnos_miercoles: " + totalAlumnos_miercoles)
    console.log("totalAlumnos_jueves: " + totalAlumnos_jueves)
    console.log("totalAlumnos_viernes: " + totalAlumnos_viernes)
    console.log("asistenciaTotal: " + asistenciaTotal)
    console.log("totalPorcentaje: " + totalPorcentaje)

    return totalPorcentaje;
}

function total6to_calculos() {
    var totalAlumnos = document.getElementById('total-6to').value;
    var totalAlumnos_semana = totalAlumnos * 5;
    var totalAlumnos_lunes = document.getElementById('lunes-6to').value;
    var totalAlumnos_martes = document.getElementById('martes-6to').value;
    var totalAlumnos_miercoles = document.getElementById('miercoles-6to').value;
    var totalAlumnos_jueves = document.getElementById('jueves-6to').value;
    var totalAlumnos_viernes = document.getElementById('viernes-6to').value;
    var asistenciaTotal = parseInt(totalAlumnos_lunes) + parseInt(totalAlumnos_martes) + parseInt(totalAlumnos_miercoles) + parseInt(totalAlumnos_jueves) + parseInt(totalAlumnos_viernes);

    var totalPorcentaje = (asistenciaTotal * 100) / totalAlumnos_semana;

    return totalPorcentaje;
}

function ganador() {
    var ganador = Math.max(total1ero_calculos(), total2do_calculos(), total3ero_calculos(), total4to_calculos(), total5to_calculos(), total6to_calculos());

    if(ganador == total1ero_calculos()) {
        document.getElementById('ganador').innerHTML += "1er grado, con " + ganador + "%";
    } else if (ganador == total2do_calculos()) {
        document.getElementById('ganador').innerHTML += "2do grado, con " + ganador + "%";
    } else if(ganador == total3ero_calculos()) {
        document.getElementById('ganador').innerHTML += "3er grado, con " + ganador + "%";
    } else if(ganador == total4to_calculos()) {
        document.getElementById('ganador').innerHTML += "4to grado, con " + ganador + "%";
    } else if(ganador == total5to_calculos()) {
        document.getElementById('ganador').innerHTML += "5to grado, con " + ganador + "%";
    } else if(ganador == total6to_calculos()) {
        document.getElementById('ganador').innerHTML += "6to grado, con " + ganador + "%";
    } else {
        document.getElementById('ganador').innerHTML += "Ha ocurrido un error.";
    }

    
}

function main() {
    total1ero();
    total2do();
    total3ero();
    total4to();
    total5to();
    total6to();
    ganador();
}