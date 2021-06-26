document.querySelector('.search-btn').addEventListener('click', getIngredient)
const apiKey = 'ea918dee9e714d5ea439c838a75aa7eb'

const search = document.querySelector('.hdn-search')
const button = document.querySelector('.hdn-btn')
const input = document.querySelector('.hdn-input')

function getIngredient(){
    const input = document.querySelector('.usr-inpt').value    
    const url = `https://api.spoonacular.com/food/ingredients/search/?query=${input}&apiKey=${apiKey}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
        fetch(`https://api.spoonacular.com/food/ingredients/${data.results[0].id}/information?amount=1&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(nut => {
                console.log(nut)
                document.querySelector('.ing-img').src = `https://spoonacular.com/cdn/ingredients_100x100/${nut.image}`
                document.querySelector('.ing-hdr').innerText = nut.original
                document.querySelector('.ing-prt').innerText = `Protein: ${nut.nutrition.nutrients[9].amount}g`
                document.querySelector('.ing-crb').innerText = `Carbs: ${nut.nutrition.nutrients[5].amount}g`

                document.querySelector('.ing-fat').innerText = `Fat: ${nut.nutrition.nutrients[3].amount}g`
            })    
            })
            .catch(err => {
                console.log(`error ${err}`)
            })
}

    button.addEventListener('click', () => {
        search.classList.toggle('active')
        input.focus()

})