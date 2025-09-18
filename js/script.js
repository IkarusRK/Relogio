const body = document.body;
const opcoesTema = document.querySelectorAll('input[name="tema"]');
const inputHoraEscuro = document.getElementById('hora-escuro');
const inputHoraClaro = document.getElementById('hora-claro');

let configTema = {
    modo: 'auto',
    escurecerAs: 16 * 60, 
    clarearAs: 6 * 60    
};

function aplicarTema() {
    const dataAtual = new Date();
    const minutosAtuais = dataAtual.getHours() * 60 + dataAtual.getMinutes();

    if (configTema.modo === 'escuro') {
        body.classList.add('modo-escuro');
    } else if (configTema.modo === 'claro') {
        body.classList.remove('modo-escuro');
    } else { 
        const ehNoite = minutosAtuais >= configTema.escurecerAs || minutosAtuais < configTema.clarearAs;
        if (ehNoite) {
            body.classList.add('modo-escuro');
        } else {
            body.classList.remove('modo-escuro');
        }
    }
}

function salvarConfig() {
    localStorage.setItem('configTemaRelogio', JSON.stringify(configTema));
}

function carregarConfig() {
    const configSalva = localStorage.getItem('configTemaRelogio');
    if (configSalva) {
        configTema = JSON.parse(configSalva);
        
        document.querySelector(`input[value="${configTema.modo}"]`).checked = true;
        
        const horaEscuro = Math.floor(configTema.escurecerAs / 60);
        const minutoEscuro = configTema.escurecerAs % 60;
        inputHoraEscuro.value = `${String(horaEscuro).padStart(2, '0')}:${String(minutoEscuro).padStart(2, '0')}`;

        const horaClaro = Math.floor(configTema.clarearAs / 60);
        const minutoClaro = configTema.clarearAs % 60;
        inputHoraClaro.value = `${String(horaClaro).padStart(2, '0')}:${String(minutoClaro).padStart(2, '0')}`;
    }
}

opcoesTema.forEach(opcao => {
    opcao.addEventListener('change', (e) => {
        configTema.modo = e.target.value;
        aplicarTema();
        salvarConfig();
    });
});

inputHoraEscuro.addEventListener('change', (e) => {
    const [horas, minutos] = e.target.value.split(':');
    configTema.escurecerAs = parseInt(horas) * 60 + parseInt(minutos);
    aplicarTema();
    salvarConfig();
});

inputHoraClaro.addEventListener('change', (e) => {
    const [horas, minutos] = e.target.value.split(':');
    configTema.clarearAs = parseInt(horas) * 60 + parseInt(minutos);
    aplicarTema();
    salvarConfig();
});


function atualizarRelogioEData() {
    const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dataAtual = new Date();
    let horas = dataAtual.getHours(), minutos = dataAtual.getMinutes(), segundos = dataAtual.getSeconds(),
        diaDoMes = dataAtual.getDate(), ano = dataAtual.getFullYear(),
        nomeSemana = diasDaSemana[dataAtual.getDay()], nomeMes = mesesDoAno[dataAtual.getMonth()],
        mesNumerico = dataAtual.getMonth() + 1;

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }
    if (diaDoMes < 10) { diaDoMes = '0' + diaDoMes; }
    if (mesNumerico < 10) { mesNumerico = '0' + mesNumerico; }

    const dataPorExtenso = `${nomeSemana}, ${diaDoMes} de ${nomeMes} de ${ano}`;
    const novosValores = {
        'data-extenso': dataPorExtenso, 'horas': horas, 'minutos': minutos, 'segundos': segundos,
        'dia-numerico': diaDoMes, 'mes-numerico': mesNumerico, 'ano-numerico': ano
    };
    for (const id in novosValores) {
        const elemento = document.getElementById(id);
        if (elemento && elemento.innerText !== String(novosValores[id])) {
            elemento.classList.remove('animar-entrada');
            void elemento.offsetWidth;
            elemento.innerText = novosValores[id];
            elemento.classList.add('animar-entrada');
        }
    }
    if (configTema.modo === 'auto') {
        aplicarTema();
    }
}

carregarConfig(); 
aplicarTema();   
setInterval(atualizarRelogioEData, 1000); 
atualizarRelogioEData();