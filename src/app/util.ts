
const getEnumVals = (e: any) => {
    const categories = Object.keys(e);
    return categories.slice(categories.length / 2);
}

export {getEnumVals}