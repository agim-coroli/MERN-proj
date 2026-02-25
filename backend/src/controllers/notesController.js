import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Erreur dans le controller getAllNotes", error);
        res.status(500).send({ message: "Internal server error" });
    }
}

export async function getSingleNote(req, res) {
    try {
        const note = await Note.findById(
            req.params.id
        );
        if (!note) return res.status(404).json({ message: "Note note found" })

        res.status(200).json(note);
    } catch (error) {
        console.error("Erreur dans le controller getSingleNote", error);
        res.status(500).send({ message: "Internal server error" });
    }
}


export async function createNote(req, res) {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })

        const savedNote = await note.save()
        res.status(201).json(savedNote);

    } catch (error) {
        console.error("Erreur dans le controller createNote", error);
        res.status(500).send({ message: "Internal server error" });
    }
}



export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            {
                new: true,
            })
        if (!updatedNote) return res.status(404).json({ message: "Note note found" })

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Erreur dans le controller updateNote", error);
        res.status(500).send({ message: "Internal server error" });
    }
}



export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id,
            {
                new:true,
            }
        )
        if (!deletedNote) return res.status(404).json({ message: "Note note found" })

        res.status(200).json({message:`la note a été supprimé avec success`});
    } catch (error) {
        console.error("Erreur dans le controller deleteNote", error);
        res.status(500).send({ message: "Internal server error" });
    }
}