const publicIp = require('public-ip')

/**
 * @param  {string} port - Port from config file on which server started
 */
const _printIp = async (port) => {
    console.log('Links : ')
    console.log('     http://localhost:'+port)
    try {
        const ip = await publicIp.v4()
        console.log('     http://' + ip + ':' + port)
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = _printIp