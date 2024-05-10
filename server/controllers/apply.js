import applications from "../models/applyModel.js";

export const apply = async(req,res)=>{
    const {company, user , jobTitle} = req.body;

    try {
        const apply = await applications.create({
            company,
            user,
            jobTitle
        })
        console.log(apply)
        res.status(200).json({
            status:"success",
            message:"Your application submitted successfully !!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:"fail",
            message: "Some error occured, please try again later." 
        });
    }
    
}