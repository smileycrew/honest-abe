import { getCorporateDonations } from "./CorporateDonations.js"
import { getCorporateList } from "./CorporateList.js"
import { getPoliticianList } from "./PoliticianList.js"

const renderPage = async () => {
    const container = document.querySelector(".container")
    const politicianHTML = await getPoliticianList()
    const corporationHTML = await getCorporateList()
    const dorporateDonationsHTML = await getCorporateDonations()
    const html = `
        ${politicianHTML}
        ${corporationHTML}
        ${dorporateDonationsHTML}
    `
    container.innerHTML = html
}

renderPage()