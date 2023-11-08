const { getSingleData } = require("./getSingleData");

const getSimilarItems = (fileName, subCategory,name) => {
    const { content } = getSingleData(fileName)
    let data = []

    
    content.find(c => {
        if (c.subCategory === subCategory && c.name !== name) {
            data.push(c)
        }
    })

    return data

};

export {getSimilarItems}