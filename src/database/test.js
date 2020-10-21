const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // inserir dados na tabela
    /* await saveOrphanage(db, {
        lat: "-20.9401398",
        lng: "-48.4910493",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 08 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "99213531",
        images: [

            "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions: "Venha com a mente tranquila e disposto a se divertir com as crianças, dando atenção e carinho.",
        opening_hours: "Das 8h até 18h",
        open_on_weekends: "1"
    }) */ 

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // consultar somente um orfanato pelo ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    //console.log(orphanage);

    // deletar dado da tabela
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "2"'))
})