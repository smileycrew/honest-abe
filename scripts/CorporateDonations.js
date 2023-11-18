import { fetchCorporateDonations, fetchCorporations, fetchPacs } from "./TransientState.js"

export const getCorporateDonations = async () => {
    const corporations = await fetchCorporations()
    const corporateDonations = await fetchCorporateDonations()
    const pacs = await fetchPacs()
    let html = "<article class='pacs'>"
    // map through all of the pacs and for each one...
    const mapPacs = pacs.map((pac) => {
        html += `
            <section class="pac">
                <header class="pac__name">
                    <h1>${pac.registeredName}</h1>
                </header>
                <div class="pac__info">
                    <div>${pac.address}</div>
                </div>
                <div class="pac__donors">
                    <h2>Donors</h2>
                    <ul>
        `
        const filterDonations = corporateDonations.filter(donation => donation.pacId === pac.id)
        const mapDonations = filterDonations.map((donation) => {
            const findCorporation = corporations.find(corporation => corporation.id === donation.corporationId)
            html += `
                <li>${findCorporation.company} ($${findCorporation.amount})</li>
            `
        })
        html += `</div>
            </section>
        </article>
        `
        return html
    })
}

// "corporatedonations": [
//     {
//         "id": 1,
//         "corporationId": 5,
//         "pacId": 2,
//         "amount": 84853
//     },





//           
//             </ul>
//         </div>
//     </section>
// </article> */}