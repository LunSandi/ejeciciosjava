    function openTab(tabName) {
        var i;
        var x = document.getElementsByClassName("tab-content");
        var btns = document.querySelectorAll(".nav-tabs button");
        
        for (i = 0; i < x.length; i++) { x[i].style.display = "none"; }
        for (i = 0; i < btns.length; i++) { btns[i].classList.remove("active"); }
        
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.classList.add("active");
    }


    function astroMag() {
        let mag = parseFloat(document.getElementById('astro1_input').value);
        let msg = "";
        if (isNaN(mag)) { msg = "Ingrese un número válido"; }
        else if (mag < -1) { msg = "Extremadamente brillante"; }
        else if (mag >= -1 && mag < 2) { msg = "Muy brillante"; }
        else if (mag >= 2 && mag < 4) { msg = "Brillante"; }
        else if (mag >= 4 && mag <= 6) { msg = "Débil"; }
        else { msg = "No visible a simple vista"; }
        document.getElementById('astro1_res').innerText = msg;
    }

    function astroDist() {
        let n = parseInt(prompt("¿Cuántas distancias va a registrar?"));
        if (!n || n <= 0) return;
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            let val = parseFloat(prompt(`Ingrese distancia ${i} (millones km):`));
            suma += val;
        }
        let prom = suma / n;
        document.getElementById('astro2_res').innerText = `Promedio: ${prom.toFixed(2)} millones de km`;
    }

    function astroCrater() {
        let count = 0;
        let diametro = -1;
        while (diametro !== 0) {
            diametro = parseFloat(prompt("Ingrese diámetro del cráter (0 para terminar):"));
            if (diametro > 50) {
                count++;
            }
        }
        document.getElementById('astro3_res').innerText = `Cráteres mayores a 50km: ${count}`;
    }

    function astroBody() {
        let code = parseInt(document.getElementById('astro4_input').value);
        let msg = "";
        switch (code) {
            case 1: msg = "Estrella"; break;
            case 2: msg = "Planeta"; break;
            case 3: msg = "Cometa"; break;
            case 4: msg = "Asteroide"; break;
            case 5: msg = "Galaxia"; break;
            default: msg = "Código desconocido";
        }
        document.getElementById('astro4_res').innerText = msg;
    }


    function astroLux() {
        let input;
        let log = [];
        do {
            input = prompt("Ingrese nivel de luz (lux) o escriba 'no' para salir:");
            if (input && input.toLowerCase() !== 'no') {
                let val = parseFloat(input);
                if (val < 5) alert("¡Noche profunda detectada! (< 5 lux)");
                log.push(val);
            }
        } while (input && input.toLowerCase() !== 'no');
        document.getElementById('astro5_res').innerText = `Registros: ${log.join(", ")}`;
    }


    function envAqi() {
        let val = parseInt(document.getElementById('env1_input').value);
        let msg = "";
        if (val <= 50) msg = "Bueno";
        else if (val <= 100) msg = "Moderado";
        else if (val <= 150) msg = "Dañino para grupos sensibles";
        else if (val <= 200) msg = "Dañino";
        else if (val <= 300) msg = "Muy Dañino";
        else msg = "Peligroso";
        document.getElementById('env1_res').innerText = `Clasificación: ${msg}`;
    }


    function envNoise() {
        let n = parseInt(prompt("Número de mediciones de ruido:"));
        if (!n) return;
        let suma = 0;
        for(let i=0; i<n; i++){
            suma += parseFloat(prompt(`Medición ${i+1} (dB):`));
        }
        document.getElementById('env2_res').innerText = `Promedio de ruido: ${(suma/n).toFixed(2)} dB`;
    }


    function envHeat() {
        let count = 0;
        let temp = -1;
        while (temp !== 0) {
            temp = parseFloat(prompt("Ingrese temperatura (0 para salir):"));
            if (temp > 45) count++;
        }
        document.getElementById('env3_res').innerText = `Focos de calor (>45°C): ${count}`;
    }

    function envWaste() {
        let code = parseInt(document.getElementById('env4_input').value);
        let msg = "";
        switch (code) {
            case 1: msg = "Orgánico (Contenedor Marrón/Verde)"; break;
            case 2: msg = "Plástico (Contenedor Amarillo)"; break;
            case 3: msg = "Papel/Cartón (Contenedor Azul)"; break;
            case 4: msg = "Vidrio (Contenedor Verde Igloo)"; break;
            default: msg = "Código no válido";
        }
        document.getElementById('env4_res').innerText = msg;
    }


    function envRiver() {
        let input;
        do {
            input = prompt("Nivel del río (m) o 'no' para salir:");
            if (input && input.toLowerCase() !== 'no') {
                let level = parseFloat(input);
                if (level > 3) alert("¡ALERTA! Nivel del río crítico (> 3m)");
            }
        } while (input && input.toLowerCase() !== 'no');
        document.getElementById('env5_res').innerText = "Monitoreo finalizado.";
    }


    function healthPressure() {
        let s = parseInt(document.getElementById('health1_sys').value);
        let d = parseInt(document.getElementById('health1_dia').value);
        let msg = "";
        
        if (s < 120 && d < 80) msg = "Normal";
        else if (s >= 120 && s <= 129 && d < 80) msg = "Elevada";
        else if ((s >= 130 && s <= 139) || (d >= 80 && d <= 89)) msg = "Hipertensión Grado 1";
        else if (s >= 140 || d >= 90) msg = "Hipertensión Grado 2";
        else msg = "Valores fuera de rango estándar o hipotensión";
        
        document.getElementById('health1_res').innerText = msg;
    }

    function healthTempAvg() {
        let n = parseInt(prompt("Número de pacientes:"));
        if (!n) return;
        let suma = 0;
        for(let i=0; i<n; i++){
            suma += parseFloat(prompt(`Temp. Paciente ${i+1}:`));
        }
        document.getElementById('health2_res').innerText = `Temp. Promedio: ${(suma/n).toFixed(1)} °C`;
    }
e
    function healthFever() {
        let count = 0;
        let temp = -1;
        while(temp !== 0) {
            temp = parseFloat(prompt("Ingrese temp paciente (0 para fin):"));
            if (temp !== 0 && temp >= 38) count++;
        }
        document.getElementById('health3_res').innerText = `Pacientes con fiebre: ${count}`;
    }


    function healthTriage() {
        let code = parseInt(document.getElementById('health4_input').value);
        let color = "";
        let txt = "";
        switch(code) {
            case 1: color = "red"; txt="ROJO (Reanimación)"; break;
            case 2: color = "orange"; txt="NARANJA/AMARILLO (Emergencia)"; break;
            case 3: color = "green"; txt="VERDE (Urgencia Menor)"; break;
            case 4: color = "blue"; txt="AZUL (No Urgente)"; break;
            default: txt="Código inválido";
        }
        let el = document.getElementById('health4_res');
        el.innerText = txt;
        el.style.color = color;
    }

    function healthSpo2() {
        let input;
        let log = [];
        do {
            input = prompt("Saturación SpO2 (%) o 'no' para salir:");
            if (input && input.toLowerCase() !== 'no') {
                log.push(input + "%");
            }
        } while (input && input.toLowerCase() !== 'no');
        document.getElementById('health5_res').innerText = `Lecturas: ${log.join(" - ")}`;
    }