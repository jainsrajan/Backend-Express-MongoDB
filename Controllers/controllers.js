const User = require('../Models/models.js')

exports.home = (req , res)=>{
    res.send('Hello Srajan')
}

exports.register = async (req , res)=>{
     
     try {

        const{name , email , password} = req.body

        if(!name || !email || !password)
        
        {
            throw new Error('Name and Email are required');
        }

        //Saving data in database.
        const user = await User.create({
                 name,
                 email,
                 password     
        })
     
        res.status(201).json({
         status:true,
         message:'Registration is successfull',
         user
        })
        
     } catch (error) {
        console.log(error)
        res.status(400).json({
      status:false,
      message:error.message
        })
        
     }
}