const productos = [
    {id:'1', 
    categoria:'libros', 
    title: 'Harry Potter', 
    description:'El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/fd16/d7dwhb1lhgnc9myzg.jpg?size_id=8', 
    autor: 'J.K. Rowling', 
    genero: 'Fantasía', 
    idioma: 'Inglés'},

    {id:'2', 
    categoria:'libros', 
    title: 'El Principito', 
    description:'El principito es una narración corta del escritor francés Antoine de Saint Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/4092/e0pedqcku2hskgo7g.jpg', 
    autor: 'Antoine de Saint-Exupéry', 
    genero: 'Literatura infantil', 
    idioma: 'Inglés'},

    {id:'3', 
    categoria:'libros', 
    title: 'El Señor de los Anillos', 
    description:'En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/5eb2/wb4m7pibgazvsfz7g.jpg?size_id=4', 
    autor:'J.R.R. Tolkien', 
    genero: 'Fantasía', 
    idioma: 'Inglés'},
    
    {id:'4', 
    categoria:'libros', 
    title: 'Haikyuu', 
    description:'La historia empieza cuando Shōyō Hinata, aún siendo un estudiante de primaria, ve un partido de voleibol por la televisión, en el cual ve jugar al conocido "Pequeño Gigante". Desde entonces, desea convertirse en alguien como él, debido a que ambos son bajos de estatura, y comienza a aficionarse por el deporte.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/d739/bcrumejg01ksfhu7g.jpg', 
    autor: 'Haruichi Furudate', 
    genero: 'Comics', 
    idioma: 'Español'},
    
    {id:'5', 
    categoria:'peliculas', 
    title: 'Silenciadas', 
    description:'En los años treinta, envían a una niña a un internado, donde descubre que les suceden cosas extrañas a sus compañeras.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/0a3d/1e1c12q0tnkld277g.jpg', 
    autor:'Lee Hyeyoung', 
    genero: 'Misterio/Terror', 
    idioma: 'Coreano'},
    
    {id:'6', 
    categoria:'peliculas', 
    title: 'Estación zombie', 
    description:'Un virus desconocido se expande por Corea del Sur, zombificando a los infectados. Los pasajeros de un tren KTX que ha partido de Seúl luchan desesperadamente por sobrevivir hasta llegar a Busan, ciudad que supuestamente se mantiene como el único lugar seguro del país.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/85a0/6mkyv9wrk4ggion7g.jpg?size_id=5', 
    autor:'Yeon Sang-ho', 
    genero: 'Terror/Acción', 
    idioma: 'Español'},
    
    {id:'7', 
    categoria:'peliculas', 
    title: 'El teléfono', 
    description:'Conectado por un teléfono en la misma casa pero con 20 años de diferencia, un asesino en serie pone el pasado y la vida de otra mujer en juego para cambiar su propio destino.', 
    price:'100', 
    foto:'https://www.mediafire.com/convkey/6f17/xtqwg9fsaedjujf7g.jpg', 
    autor:'Lee Chung-hyeon', 
    genero: 'Suspenso/Fantasía', 
    idioma: 'Español'}
];

export const getFetch = new Promise ( (resolve, reject) => {
    let condicion = true;
    if (condicion){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        reject('error')
    }    
})