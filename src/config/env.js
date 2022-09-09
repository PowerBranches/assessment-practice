require('dotenv').config()

export default {
    PORT: process.env.PORT || 8000,
    
    MONGOSTRING: process.env.MONGOSTRING,
  
}