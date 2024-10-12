export const addData = (obj) => {
    return { type: "ADD", payload: obj }
}
export const deleteData = (index) => {
    return { type: "DELETE", payload: index }
}

export const editData = (indx, record) => {
    return { type: "Edit", payload: { editindex: indx, editrecrd: record } }
}
export const sortData = () => {
    return { type: "SORT" }
}

export const searchData = (search) => {
    return { type: "SEARCH", payload: search }
}