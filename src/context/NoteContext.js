import { createContext, useState } from "react";
import { getInitialData } from "../utils";

export const NoteContext = createContext()
export const NoteProvider = (props) => {
    const data = getInitialData()
    const [noteData, setNoteData] = useState(data)
    const [inputNote, setInputNote] = useState('')
    const [inputArea, setInputArea] = useState('')
    const [inputSearch, setInputSearch] = useState('')
    const [limitChar, setLimitChar] = useState(0)

    const functionDelete = (id) => {
        let newData = noteData.filter(note => note.id !== id)
        setNoteData(newData)
    }

    const functionSubmit = () => {
        let title = inputNote
        let body = inputArea
        setNoteData([
            ...noteData,
            {
                id: +new Date(),
                title,
                body,
                archived: true,
                createdAt: new Date().toDateString()
            }
        ])
        setInputArea('')
        setInputNote('')
        setLimitChar(0)
    }
    const functionArsip = (id) => {
        const noteIndex = noteData.findIndex((note) => note.id === id)
        noteData[noteIndex].archived = !noteData[noteIndex].archived
        setNoteData(noteData);
    }
    const functions = {
        functionDelete,
        functionSubmit,
        functionArsip
    }
    return (
        <NoteContext.Provider value={{
            noteData, setNoteData,
            inputNote, setInputNote,
            inputArea, setInputArea,
            inputSearch, setInputSearch,
            limitChar, setLimitChar,
            functions
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}