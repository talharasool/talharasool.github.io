const getProductBySku = (state, sku) => {
    const { home: {results}} = state;
    const product = results.filter((result) => result.sku === sku)
    return product[0]
}