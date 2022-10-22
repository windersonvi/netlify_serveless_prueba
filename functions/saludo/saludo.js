exports.handler = async() => {
    let name = "foobar"
    return{
        statusCode: 200,
        body: JSON.stringify(name)
    }
}