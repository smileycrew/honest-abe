import { fetchPoliticians } from "./TransientState.js"

export const getPoliticianList = async () => {
    const politicians = await fetchPoliticians()
    let html = "<article class='politicians'>"
    const mapPoliticians = politicians.map((politician) => {
        return `
                <section class="politician">
                    <header class="politician__name">
                        <h1>${politician.name.first} ${politician.name.last}</h1>
                    </header>
                    <div class="politician__info">
                        <div>Age: ${politician.age}</div>
                        <div>Represents: ${politician.district}</div>
                    </div>
                </section>`
    })
    html += mapPoliticians.join("")
    html += `
        </article>
    `
    return html
}