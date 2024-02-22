const almuerzoMenu = [
    "Bastones de Muzzarella Rebozados",
    "Bruschetta Capresse",
    "Bruschetta Mediterránea",
    "Buñuelos de Espinaca y Queso Parmesano",
    "Burritos de Ternera",
    "Crocante de Muzzarella",
    "Croquetas de Espinaca y Queso Azul",
    "Empanada Capresse",
    "Empanada Cortada a Cuchillo",
    "Empanada de Carne",
    "Empanada Gallega",
    "Ensalada Caesar",
    "Ensalada Griega",
    "Ensalada Lucho’s Cheff",
    "Ensalada Capresse",
    "Fatay",
    "Jamón con Ensalada Rusa",
    "Mayonesa de Ave",
    "Mil Hojas de Papa",
    "Muzzarellitas",
    "Papas Cheddar",
    "Papines Rellenos",
    "Pascualina de Verduras",
    "Quiché de Calabaza y Muzzarella",
    "Quiché de Humita",
    "Quiché de Puerro y Pollo",
    "Quiché de Verduras",
    "Soufle de Verduras",
    "Tacos de Pollo",
    "Tacos de Ternera",
    "Tarta de Jamón y Queso",
    "Tarta de Verduras",
    "Tartaletin de Puerro y Pollo",
    "Tartin de Verduras",
    "Tortilla Española",
    "Tortillin de Papa",
    "Quesadillas"
];

        almuerzoMenu.push("Crunch de Pollo");
       
        const almuerzoSubMenu = [
    "con Ensalada Verde",
    "con Ensaladilla",
    "con Ensaladilla Verde",
    "con Panceta y Verdeo",
    "con Pesto de Albahaca",
    "con Pico de Gallo",
    "con Pollo",
    "con Queso y Panceta",
    "con Salsa Alexander",
    "con Salsa Blanca",
    "con Salsa Criolla",
    "con Mojo Rojo",
    
    "Puerro y Panceta",
    "y Panceta",
    "y Puerro"
];

        almuerzoSubMenu.push(" ");
       
        almuerzoMenu.sort();
        almuerzoSubMenu.sort();
       
        const almuerzoSelect = document.getElementById('almuerzo-select');
        const almuerzoSubMenuSelect = document.getElementById('almuerzo-submenu');
        const cenaSelect = document.getElementById('cena-select');
        const cenaSubMenuSelect = document.getElementById('cena-submenu');
        const postreSelect = document.getElementById('postre-select');
        const postreSubMenuSelect = document.getElementById('postre-submenu');
       
        function addToSelect(item, select) {
            let option = document.createElement('option');
            option.textContent = item;
            select.appendChild(option);
        }
       
        almuerzoMenu.forEach(item => addToSelect(item, almuerzoSelect));
        almuerzoSubMenu.forEach(item => addToSelect(item, almuerzoSubMenuSelect));
       
        const cenaMenu = [
    "Albóndigas Pomarola",
    "Canelones de Calabaza y Muzzarella",
    "Canelones de Verdura",
    "Canelones de Verdura y Muzzarella",
    "Caneloni a la Rossini",
    "Carne al Horno Braseada",
    "Carne con Papas a la Criolla",
    "Carré de Cerdo a la Riojana",
    "Escalopin de Peceto",
    "Lasagna de Berenjenas",
    "Lasagna de Carne, Verduras y Muzzarella",
    "Lasagna de Verduras y Ricota",
    "Milanesa a la Suiza",
    "Milanesa de Peceto",
    "Milanesa de Ternera",
    "Milanesa de Ternera a la Napolitana",
    "Muslo al Ajillo",
    "Muslo Braseado al Limón",
    "Muslito Napolitano",
    "Muslitos a la Portuguesa",
    "Muslitos al Verdeo",
    "Ñoquis a la Parisienne",
    "Ñoquis de Papa",
    "Pastel de Papa y Carne",
    "Pechugas al Puerro y Queso Azul",
    "Pechugas al Verdeo",
    "Pechugas Capresse",
    "Pechugas Rellenas",
    "Pizza Libre",
    "Pollo a la Portuguesa",
    "Pollo al Verdeo",
    "Raviolon de Ricota y Verduras",
    "Raviolones",
    "Raviolones de Ricota",
    "Spaghetti",
    "Suprema Maryland",
    "Supremitas a la Suiza",
    "Tallarines",
    "Tallarines a la Carbonara",
    "Tallarines a la Parisienne",
    "Tallarines al Pesto",
    "Tallarines con Salsa Alfredo",
    "Tallarines Mediterráneo",
    "Wok de Verduras Mixto",
    "Albóndigas Pomarola"
];
        cenaMenu.push("Tapa de Asado Braseada");
       
        const cenaSubMenu = [
    "(Champignon, Crema y Blanco de Ave)",
    "a la Napolitana",
    "a la Suiza",
    "con Arroz Azafranado",
    "con Arroz Cremoso",
    "con Arroz Pilaf",
    "con Arroz Tae",
    "con Ensalada",
    "con Ensalada del Chef",
    "con Ensalada Verde",
    "con Estofado",
    "con Filetto y Crema",
    "con Milhojas de Papas",
    "con Papas",
    "con Papas a la Crema de Verdeo",
    "con Papas a la Española",
    "con Papas a la Provenzal",
    "con Papas al Natural",
    "con Papas Bravas",
    "con Papas Especiadas",
    "con Papas Fritas",
    "con Puré de Batatas",
    "con Puré de Papas",
    "con Puré Marmolado",
    "con Puré Mixto",
    "con Ragú de Ternera",
    "con Risotto de Verduras",
    "con Rúcula, Parmesano y Tomates Cherry",
    "con Salsa Bolognesa",
    "con Salsa Bechamel",
    "con Salsa Filetto",
    "con Salsa Mediterránea",
    "con Salsa Mixta",
    "con Salsa Pomodoro",
    "con Salsa Rose",
    "con Salsa Rossini",
    "con Salsa de Puerros",
    "con Tomates Asados",
    "con Vegetales al Horno",
    "con Queso Gratinado",
    "con Panceta y Verdeo"
];

       
        cenaSubMenu.push(" ");
       
        const postreMenu = [
    "Bombón Suizo",
    "Brownie de Chocolate",
    "Budín de Pan",
    "Cheese Cake",
    "Compota de Manzanas",
    "Copa de Frutas",
    "Copa Helada",
    "Copa Helada Suteba",
    "Crepe de Frutas",
    "Crepe de Manzanas y Canela",
    "Delicia de Chocolate",
    "Duraznos en Almibar",
    "Ensalada de Frutas",
    "Flan Casero",
    "Flan de Naranja",
    "Helado",
    "Helado Almendrado",
    "Helado de Americana",
    "Helado de Chocolate",
    "Helado Tricolor",
    "Manzanas Asadas",
    "Mousse de Chocolate",
    "Peras al Borgoña",
    "Queso y Dulce Par",
    "Tarantella de Manzanas",
    "Tiramisú",
    "Trifle de Chocolate"
];

        postreMenu.push("Crumble de Manzana y Canela");
       
        const postreSubMenu = [
    "(Queso, Batata y Membrillo)",
    "con Coulis de Frutos Rojos",
    "con Crema Chantilly",
    "con Crema y Canela",
    "con Crema de Arándanos",
    "con Crema de Caramelo",
    "con Crema Oreo",
    "con Dulce de Leche",
    "con Dulce de Leche y Crema",
    "con Frutas de Estación",
    "con Frutos del Bosque",
    "con Helado de Americana",
    "con Helado y Nueces Tostadas",
    "con Nueces Tostadas",
    "con Praline de Frutos Secos",
    "con Reducción de Vino y Frutos Rojos",
    "con Salsa de Chocolate",
    "con Salsa de Frutos Rojos",
    "de Chocolate",
    "Mixto",
    "y Crema de Limón",
    "y Nueces"
];

       
        postreSubMenu.push(" ");
       
        cenaMenu.sort();
        cenaSubMenu.sort();
        postreMenu.sort();
        postreSubMenu.sort();
       
        cenaMenu.forEach(item => addToSelect(item, cenaSelect));
        cenaSubMenu.forEach(item => addToSelect(item, cenaSubMenuSelect));
       
        postreMenu.forEach(item => addToSelect(item, postreSelect));
        postreSubMenu.forEach(item => addToSelect(item, postreSubMenuSelect));
