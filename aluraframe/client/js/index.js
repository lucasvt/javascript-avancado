var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    //evento para não deixar enviar o formulario.
    event.preventDefault();

    var tr = document.createElement('tr');
    campos.forEach(function (campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVlolume = document.createElement('td');
    tdVlolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVlolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '1';
    campos[2].value = '2';

    campos[0].focus();

});

