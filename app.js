const cloth = {
    pics : 'https://media.graphassets.com/output=format:webp/E8MU2GSzSQmz4U9W2onF',
    name : 'lamerei',
    about : 'Recycle Boucle Knit Cardigan Pink',
    price : '$120'
}

let pics = document.getElementById('pics')
let clothName = document.getElementById('name')
let about = document.getElementById('about')
let price = document.getElementById('price')

pics.src = cloth.pics,
clothName.innerHTML = cloth.name
about.innerHTML = cloth.about
price.innerHTML = cloth.price

