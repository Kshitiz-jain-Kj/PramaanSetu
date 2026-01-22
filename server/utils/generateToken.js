import jwt from "jsonwebtoken"

export const generateToken = ({email,role,name}) => {
    return jwt.sign({email,role,name},process.env.JSONWEBTOKEN)
}