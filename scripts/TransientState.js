// make fetch call for corporations
export const fetchCorporations = async () => {
    const response = await fetch("http://localhost:8088/corporations")
    const corporations = await response.json()
    return corporations
}
// make fetch call for politicians
export const fetchPoliticians = async () => {
    const response = await fetch("http://localhost:8088/politicians")
    const politicians = await response.json()
    return politicians
}
// make fetch call for interests
export const fetchInterests = async () => {
    const response = await fetch("http://localhost:8088/interests")
    const interests = await response.json()
    return interests
}
// make a fetch call for pacs
export const fetchPacs = async () => {
    const response = await fetch("http://localhost:8088/pacs")
    const pacs = await response.json()
    return pacs
}
// make a fetch call for legislations
export const fetchLegislations = async () => {
    const response = await fetch("http://localhost:8088/legislations")
    const legislations = response.json()
    return legislations
}
// make a fetch call for PoliticianLegislation
export const fetchPoliticianLegislation = async () => {
    const response = await fetch("http://localhost:8088/politicianlegislations")
    const PoliticianLegislation = response.json()
    return PoliticianLegislation
}
// make a fetch call for pac donations
export const fetchPacDonations = async () => {
    const response = await fetch("http://localhost:8088/pacdonations")
    const PacDonations = await response.json()
    return PacDonations
}
// make a fetch call for corporate interests
export const fetchCorporateInterests = async () => {
    const response = await fetch("http://localhost:8088/corporateinterests")
    const CorporateInterests = await response.json()
    return CorporateInterests
}
// make a fetch call for corporate donations
export const fetchCorporateDonations = async () => {
    const response = await fetch("http://localhost:8088/corporatedonations")
    const CorporateDonations = await response.json()
    return CorporateDonations
}