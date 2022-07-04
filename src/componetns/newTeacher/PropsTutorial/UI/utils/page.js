export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPageArray = (tPage) => {
    let res = []
    for (let i = 0; i < tPage; i++) {
        res.push(i + 1)
    }
    return res
}
