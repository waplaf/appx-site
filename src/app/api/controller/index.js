import jwt from 'jsonwebtoken'

const jwtKey = "Lnucasf_Aflbefrto_Fulano888w88w_9dew9w.9w9w9wx.20$6@4384?>skdk";


export const encodeHash = (id) => {

    const jwtExpirySeconds = 3000
    return jwt.sign({ id }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })
}

export var decodedHash = (token = "") => {
    return parseInt(jwt.decode(token, jwtKey).id)
}
