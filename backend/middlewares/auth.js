import jwt from "jsonwebtoken"

export const authenticate =(req ,res, next)=>{
    const token=req.header.authenticate?.split(" ")[1]

    if(!token)
    {
        return res.status(401).json({error:"Access denied . token not found"})
    }

    try{
        const decoded=jwt.verify(token,proccess.env.JWT_SECRET);
        req.user=decoded;
        next();

    }
    catch{
        res.status(401).json({error:"Invalid token"})
    }
}