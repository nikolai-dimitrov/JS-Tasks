const convertLojban = (lojban) => {
    const lojbanCombinations = ['no','pa','re','ci','vo','mu','xa','ze','bi','so']

    let result = '';

    for (let i = 1; i < lojban.length; i += 2) {
        const firstLetter = lojban[i - 1];
        const secondLetter = lojban[i];
        
        const combination = `${firstLetter}${secondLetter}`

        result += lojbanCombinations.indexOf(combination)
    }

    return Number(result)
};

convertLojban('renonore')
convertLojban('pareci')
