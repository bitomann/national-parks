console.log("What the f***:)")

// // document.querySelector("#saveEntry").addEventListener("click", event => {
// //     // console.log("button was clicked!!!!");
//     const personName = document.querySelector("#fullName").value;
//     // console.log(personName)
//     const address = document.querySelector("#address").value;
//     // console.log(address)

//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${address}</div>
//         </section>
//     `
// })


// Built html elements to append to the DOM //
const nationalParksComponent = (parseParks) => {

    console.log(parseParks)
    return `
    <article>
        <fieldset>
            <h3 for= parkName>Park Name ${parseParksname}</h3>
            <p for= parkState>State the park in located in ${parseParks.name}</p>
        </fieldset>   
    </article>
    `
};
console.log(nationalParksComponent)

// pointed to the <body> element //
const nationalParksContainer = document.querySelector("body")

// injected variable to the DOM //

// fetched and parsed data form the parks.json server and displayed it in console //
fetch("http://localhost:8088/parks")
.then(parks => parks.json())
.then(parseParks => {
    console.log(parseParks)
    parseParks.forEach(element => {
        console.log(element)
        nationalParksComponent(element)
        nationalParksContainer.innerHTML = nationalParksComponent()
        
    })
})