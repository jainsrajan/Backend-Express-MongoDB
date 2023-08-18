const User = require('../Models/models.js')

exports.home = (req , res)=>{
    res.send('Hello Srajan')
}


//Register User...

exports.register = async (req , res)=>{
     
     try {

        const{name , email , password} = req.body

        if(!name || !email || !password)

        {
      res.status(500).send({msg:"Enter all the details of a user"})
        }

        //Saving data in database.

        //  await User.create({
        //          name,
        //          email,
        //          password     
        // })

        //Different way to write this...

         await User.create({...req.body})
     
        // res.status(201).json({
        //  status:true,
        //  message:'Registration is successfull',
        //  user
         
        // })
        res.status(201).send({msg:"User registered successfully"})
        
     } catch (error) {
        console.log(error)
        res.status(400).json({
      status:false,
      message:error.message
        })
        
     }
}


//Login User....
exports.login = async (req , res)=>{
    const {email , password} = req.body

    try {
        const Userdata = await User.findOne({email})
        
        if(Userdata)

        {
            if(Userdata.password == password)
            {
                res.status(200).send({msg:"User Login Successfully, Enjoy!"})
            }

            else{
                res.status(401).send({msg:"You have Entered Wrong Password"})
            }
        }
        else{
            res.status(404).send({msg:"No Account Find associated to this email"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})
        
    }
}
