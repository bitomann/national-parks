console.log("What the f***")


const nationalParksComponent = () => {
    return `
    <article>
        <fieldset>
            <h3>Park Name</h3>
            <p>State the park in located in</p>
        </fieldset>   
    </article>
    `
};

const nationalParksContainer = document.querySelector("body")

nationalParksContainer.innerHTML = nationalParksComponent()

fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parseParks => {
        console.table(parseParks)
    });

    

