class Mapa {
    constructor() {
        this.map = null;
        this.apiKey = 'AIzaSyC5l-5k47984ZB6YyPrXIomElxQaZKpBrk'; // chave de API do Google
    }

    inicializar() {
        const limitesBeloHorizonte = {
            north: -19.8104,
            south: -20.0836,
            east: -43.8260,
            west: -44.1406
        };

        this.map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 12,
            center: {
                lat: -19.9167,
                lng: -43.9345
            },
            restriction: {
                latLngBounds: limitesBeloHorizonte,
                strictBounds: false
            }
        });

        this.adicionarMarcador(
            -19.84588457162572, -43.99933023788456,
            'Estação 7 - Bike BH',
            'São Luiz, Belo Horizonte - MG, 31365-450',
            'https://maps.app.goo.gl/4Bbc6Wmrc1i4GWaK9'
        );
        this.adicionarMarcador(-19.838700580363255, -43.99476727394064, 'Estação 08 - BIKE BH', 'Av. Otacílio Negrão de Lima, 12954 - Garças, Belo Horizonte - MG, 31370-004','https://maps.app.goo.gl/6hm3KNgSBZtpL3AX9');
        this.adicionarMarcador(-19.844815857229136, -43.989126957543256, 'Estação 09 - BIKE BH', 'Av. Otacílio Negrão de Lima, 14050 - Pampulha, Belo Horizonte - MG, 31365-450','https://maps.app.goo.gl/MmhvepUfXP8GHxq18');
        this.adicionarMarcador(-19.84618859976777, -43.987321676695665, 'Bikemania', 'Av. Otacílio Negrão de Lima, 14370 - Jardim Atlântico, Belo Horizonte - MG, 31365-450','https://maps.app.goo.gl/ZmsfbecRhSZbhyoq6');
        this.adicionarMarcador(-19.843813227241245, -43.970395008969966, 'Giro Bikes', 'Av. Otacílio Negrão de Lima, 17700 - Jardim Atlântico, Belo Horizonte - MG, 31555-016','https://maps.app.goo.gl/5R3VevCQLU2rBeSHA');
        this.adicionarMarcador(-19.850867429600733, -43.97347684613362, 'Estação 11 - BIKE BH', 'Av. Otacílio Negrão de Lima, 16700 - Pampulha, Belo Horizonte - MG, 31555-016','https://maps.app.goo.gl/4fEwrWGwvYerACEG9');
        this.adicionarMarcador(-19.849172591485626, -43.96625186264235, 'Global Bicicletas', 'Av. Pres. Antônio Carlos, 8349 - São Luiz, Belo Horizonte - MG, 31270-010','https://maps.app.goo.gl/sNsCEaRS8f8kGTZp8');
        this.adicionarMarcador(-19.85545166559524, -43.97100639267255, 'Bike Pampulha', 'Av. Otacílio Negrão de Lima, 878 - São Luiz, Belo Horizonte - MG, 31365-450','https://maps.app.goo.gl/BdgF7MALdWERzNTn7');
        this.adicionarMarcador(-19.85982933491299, -43.980501953834036, 'Locabike', 'R. Versília, 50 - Pampulha, Belo Horizonte - MG, 31340-730','https://maps.app.goo.gl/n6YQifB9VPv14vQx7');
        this.adicionarMarcador(-19.859937145927454, -43.9817391823278, 'Estação 04 - Bike BH', 'São Luiz, Belo Horizonte - MG, 31340-730', 'https://maps.app.goo.gl/KiP2ZybVFh9W2hYC6');
        this.adicionarMarcador(-19.860819275532055, -43.98217872955713, 'JMA BIKES E TRICICLOS', 'R. Versília, 140 - Bandeirantes (Pampulha), Belo Horizonte - MG, 31340-730','https://maps.app.goo.gl/Z2wuCcVqYnYtthPf6');
        this.adicionarMarcador(-19.857744625053698, -43.98139079459671, 'Villa Bike: Aluguel de Bicicletas Pampulha BH', 'Av. Otacílio Negrão de Lima, 3850 - Pampulha, Belo Horizonte - MG, 31340-505','https://maps.app.goo.gl/T1rH23XCpm1ZZZNp6');
        this.adicionarMarcador(-19.851869084556494, -43.98955751423553, 'Estação 05 - BIKE BH', 'Av. Otacílio Negrão de Lima, 5478 - Pampulha, Belo Horizonte - MG, 31365-450','https://maps.app.goo.gl/P5E9AAXDrMFoS3mW6');
        this.adicionarMarcador(-19.85194138293843, -43.99013445453401, 'Guil Bikes Aluguel de Bicicletas e Triciclo', 'Av. Otacílio Negrão de Lima, 5478 - Pampulha, Belo Horizonte - MG, 31365-450','https://maps.app.goo.gl/LLS8Sg41kMwnYTHSA');
        this.adicionarMarcador(-19.852822583065084, -43.99358959018925, 'Estação 06 - BIKE BH', 'Av. Otacílio Negrão de Lima, 6061 - Pampulha, Belo Horizonte - MG, 31365-450','https://maps.app.goo.gl/DW2vfqfrLT66KKqS8');
        this.adicionarMarcador(-19.860501811153892, -43.99481427475307, 'Guil Bike Aluguel Pampulha', 'Av. Otacílio Negrão de Lima, 6740 - Pampulha, Belo Horizonte - MG, 31365-450', 'https://maps.app.goo.gl/gBuBj8A2X5g28DAH7');
        this.adicionarMarcador(-19.864881007471592, -43.97035963834219, 'Bike Belô Aluguel de Bicicletas', 'Av. Antônio Abrahão Caram, 1001 - Loja 07 - São Luiz, Belo Horizonte - MG, 31275-200', 'https://maps.app.goo.gl/jPQRATeKw8EVz2Ej7');
        this.adicionarMarcador(-19.868098098813622, -43.985236685506074,'Estiloventura Trek bike Bh', 'Av fleming 650 lojas 4/5 - Ouro Preto, Belo Horizonte - MG, 31310-490', 'https://maps.app.goo.gl/87k9bM1A32nZPW567');
        this.adicionarMarcador(-19.91669277962219, -43.94516884686554, 'Atacadão das Bikes Tupinambás', 'Av. do Contorno, 11190 - Lj 01 - Centro, Belo Horizonte - MG, 30110-017', 'https://maps.app.goo.gl/nKknJDM4meLPwyP5A');
        this.adicionarMarcador(-19.91535515731564, -43.94417808647999, 'Moto Centro e Bike', 'Av. do Contorno, 11456 - Centro, Belo Horizonte - MG, 33110-078', 'https://maps.app.goo.gl/AkBhKQiqC2Q2uosa6');
        this.adicionarMarcador(-19.918397563033867, -43.94377394921769, 'Alpha Bicicletas', 'Av. Olegário Maciel, 417 - Centro, Belo Horizonte - MG, 30180-110', 'https://maps.app.goo.gl/eLg61V9n1SqxafM78');
        this.adicionarMarcador(-19.91334030491835, -43.93939066271087, 'ATACADÃO DAS BIKES OIAPOQUE K46', 'Av. Oiapoque, Box 46 - Centro, Belo Horizonte - MG, 30110-017', 'https://maps.app.goo.gl/DHQnCNwuzPduD1dT7');    
        this.adicionarMarcador(-19.914236744454538, -43.93730891506292, 'Atacadão das Bikes - Rua Tupinambás', 'Av. do Contorno, 11.320 - Centro, Belo Horizonte - MG, 30110-078', 'https://maps.app.goo.gl/yKPy9XQE3DzRp4tS9');
        this.adicionarMarcador(-19.914831240921394, -43.93757112603456,'Atacadão da Bike', 'R. Rio de Janeiro, 60 - Centro, Belo Horizonte - MG, 30160-040', 'https://maps.app.goo.gl/DrG4b3cNnhFSnJvB8');
        this.adicionarMarcador(-19.916043226839868, -43.93606042641803,'Bicicletas e Mobiletes Bike & Moby', 'Av. Santos Dumont, 248 - Centro, Belo Horizonte - MG, 30111-040', 'https://maps.app.goo.gl/7dpShvDjeamYkSqdA');
        this.adicionarMarcador(-19.936531726742157, -43.94510778369822, 'Bh Bike Store Trek', 'Av. do Contorno, 7212 - Lourdes, Belo Horizonte - MG, 30110-048', 'https://maps.app.goo.gl/9ic3aNpDhnaxvG8o6');    
        this.adicionarMarcador(-19.936554089087714, -43.94559767098052, 'Tripp Aventura', 'Av. do Contorno, 7439 - Lourdes, Belo Horizonte - MG, 30110-047', 'https://maps.app.goo.gl/4GaC6c2PECo522x39');
        this.adicionarMarcador(-19.934285704984962, -43.94662549108046, 'Lince Bikes', 'R. Felipe dos Santos, 521 - Lourdes, Belo Horizonte - MG, 30180-163', 'https://maps.app.goo.gl/c8dtBnVnoptGtL9M8');
        this.adicionarMarcador(-19.939329066474166, -43.939827398746445, 'Eleven Bikes', 'R. Levindo Lopes, 373 - Savassi, Belo Horizonte - MG, 30140-171', 'https://maps.app.goo.gl/C2qSg9Y3VEJ6zmQu7');
        this.adicionarMarcador(-19.940104979927646, -43.93760617822025, 'Atelier Bicicine', 'Av. do Contorno, 6.282 - Funcionários, Belo Horizonte - MG, 30110-042', 'https://maps.app.goo.gl/NMGftMEU51EFuoS97');
        this.adicionarMarcador(-19.94210260231549, -43.93787131267242, 'Ciclogiro', 'R. Viçosa, 181 - São Pedro, Belo Horizonte - MG, 30330-160', 'https://maps.app.goo.gl/EBJVnR9ddCRmFBmA7');
        this.adicionarMarcador(-19.937719039849583, -43.93243152370226, 'Na Trilha Certa BikeShop NTC SAVASSI', 'R. Tomé de Souza, 587 - Funcionários, Belo Horizonte - MG, 30140-130', 'https://maps.app.goo.gl/mV1ptf8en3gp9fKY8');        
        this.adicionarMarcador(-19.944553718577893, -43.93152369853876, 'Aranha Bike Works', 'Rua Montes Claros, 436 - Carmo, Belo Horizonte - MG, 30310-370', 'https://maps.app.goo.gl/XSvNtQ88estMjTDQ8');
        this.adicionarMarcador(-19.942623604010624, -43.930013652781746, 'Top Bike Marcelinho', 'Rua Pium-Í, 344 - Cruzeiro, Belo Horizonte - MG, 30310-080', 'https://maps.app.goo.gl/wDYBE1dXMuweSGpT8');
        this.adicionarMarcador(-19.950191461404184, -43.92177974828282, 'BH Bike Store Trek', 'Av. dos Bandeirantes, 1632 - Mangabeiras, Belo Horizonte - MG, 30315-032', 'https://maps.app.goo.gl/88kUfCE6k23682VW9');
        this.adicionarMarcador(-19.903991287815213, -44.07993383121302, 'Alvorada Bike Shop', 'Av. José Luís da Cunha, 348 - Alvorada, Contagem - MG, 32042-080', 'https://maps.app.goo.gl/9UWLTkxo2MhvoqK76');
        this.adicionarMarcador(-19.914345553346212, -44.0869194747039, 'Total Bike', 'R. Bernardo Monteiro, 187 - Centro, Contagem - MG, 32017-170', 'https://maps.app.goo.gl/k5RTSTNJs2wt3nhf6');
        this.adicionarMarcador(-19.918799138871993, -44.08593399315219, 'Fbike Bicicleta', 'R. Mte. Pedrinho, 43 - Nossa Sra. do Carmo, Contagem - MG, 32015-760', 'https://maps.app.goo.gl/Ey1omFs5KKjxr55X8');
        this.adicionarMarcador(-19.934568904045765, -44.052892015896845, 'Loja de Bicicleta Bike brasil', 'Avenida Doutor Cincinato Cajado Braga, 341 - Novo Eldorado, Contagem - MG, 32341-310', 'https://maps.app.goo.gl/S3cfM694SD8oADLb7');
    }   
    

    adicionarMarcador(lat, lng, title, descricao, link) {
        const iconePadrao = 'images/bike.png';  
    
        const iconePersonalizado = {
            url: iconePadrao,
            scaledSize: new google.maps.Size(60, 60), 
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(45, 65) 
        };
    
        const marcador = new google.maps.Marker({
            position: { lat, lng },
            map: this.map,
            title: title,
            icon: iconePersonalizado
        });
    
        const infowindow = new google.maps.InfoWindow({
            content: `<strong>${title}</strong><br>${descricao}<br><a href="${link}" target="_blank">Saiba mais</a>`
        });
    
        marcador.addListener('click', () => {
            infowindow.open(this.map, marcador);
        });
    }
    
    
    
}

window.addEventListener('load', () => {
    const mapa = new Mapa();
    mapa.inicializar();
});
