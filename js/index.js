const row = document.querySelector('.card ')

async function getData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const photos = await result.json()
    photos.forEach(element => {
        if(element.id <= 1){
            const roww = document.createRange().createContextualFragment(`

 <img src="${element.url}" alt="" class="card-img-top img-fluid" />

                `)
                row.append(roww)
            }
        });
    }
    getData()





