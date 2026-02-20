import mongoose from "mongoose";

// 1- creer un schema
// 2- model basé sur ce schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true} // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema)

export default Note;
