const btn = document.getElementById("newCat")
const img = document.getElementById("imgCat")
const URL = 'https://thatcopy.pw/catapi/rest/'
const getCat = async () => {
    try {
        const catData = await fetch(URL)
        const catJson = await catData.json()

        return catJson.webpurl
    } catch (error) {
        console.error(error.message)
    }
}

btn.addEventListener("click", async ()=>{
    const catURL = await getCat()

    img.src = catURL;
})
