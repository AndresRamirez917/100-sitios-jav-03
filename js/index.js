const row = document.querySelector('.col-md-6 ')
const about = document.querySelector('.about')

async function getData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const photos = await result.json()
    photos.forEach(element => {
        if(element.id <= 1){
            const roww = document.createRange().createContextualFragment(`

            <div class="img-container">
                 <img src="${element.url}"  alt=""> 
            </div>

                `)
                row.append(roww)
            } else if (element.id == 2) {
                const card = document.createRange().createContextualFragment(`

                   <div class="col-md-6">
                <img src="${element.url}" alt="">
            </div>
        
                        `)
                        about.append(card)
                
            }
        });
    }
    getData()





