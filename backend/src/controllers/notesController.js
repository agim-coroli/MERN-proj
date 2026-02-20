export function getAllNotes(req, res) {
    res.status(200).send("vous avez recupéré les notes");
}
export function createNote(req, res) {
    res.status(201).json({ message: "post creer avec success" });
}
export function updateNote(req, res) {
    res.status(200).json({ message: "post mise a jour avec success" });
}
export function deleteNote(req, res) {
    res.status(200).json({ message: "post supprimer avec success" });
}