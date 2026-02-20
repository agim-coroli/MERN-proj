import ratelimit from "../config/upstash.js";

const rateLimiter = async(req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key")

        if (!success) return res.status(429).json({ message:"Trop de requete, reessayer plus tard"})
        
        next()
    } catch (error) {
        console.log("erreur de limite de requete", error);
        next(error)
        
    }
}

export default rateLimiter;