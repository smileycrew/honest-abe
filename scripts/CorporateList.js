import { fetchCorporations } from "./TransientState.js"

export const getCorporateList = async () => {
    const corporations = await fetchCorporations()
    let html = "<article class='coprporations'>"
    const mapCorporations = corporations.map((corporation) => {
        return `
            <section class="corporation">
                <header class="corporation__name">
                    <h1>${corporation.company}</h1>
                </header>
                <div class="corporation__info">
                    <div>${corporation.address}</div>
                </div>
            </section>
        `
    })
    html += mapCorporations.join("")
    html += `
        </section>
    `
    return html
}