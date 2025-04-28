const btn = document.querySelector('.dice')
const text = document.querySelector('.advice-text')
const url = `https://api.adviceslip.com/advice`

async function advice() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        const p = document.createElement('p')
         p.classList.add('advice-text')

         text.innerHTML = data.slip.advice
    } catch (error) {
        console.log('malumot olib kelishda xatolik',error)
    }
}

advice()

btn.addEventListener('click',function(){
    advice()
})
