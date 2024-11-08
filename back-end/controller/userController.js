import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js"
import ErrorHandler from "../middleware/errorMiddleware.js"
import { Application } from "../models/applicationModel.js"

export const postApplication = catchAsyncErrors(async(req, res, next) =>{
    const {firstname, lastname, email, phone, message} = req.body
    if(!firstname || !lastname || !email || !phone || !message)
    {
        return next(new ErrorHandler("Please Fill the full form", 400))
    }

    const application = await Application.create({firstname, lastname, email, phone, message})
    res.status(200).json({
        success: true,
        message: "We will contact you shortly!"
    })
})

export const getApplications = catchAsyncErrors(async(req, res, next) =>{
    const applications = await Application.find()
    if(applications.length == 0)
    {
        return next(new ErrorHandler("No Applications Found", 400))
    }
    res.status(200).json({
        success: true,
        applications
    })
})