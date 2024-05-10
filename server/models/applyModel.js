import mongoose from "mongoose";

const applyModel = new mongoose.Schema(
    {
        company: {
            type: mongoose.Types.ObjectId,
            ref: "companies",
            required: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true,
        },
        jobTitle: { type: String, required: true },
    }
)

export default mongoose.model("applications", applyModel);