import React, { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { Button, Gap, Input, Textarea } from '../../atom';
import './index.css'
export const NotesInput = () => {
    const { inputNote, inputArea, setInputArea, setInputNote, limitChar, setLimitChar, functions } = useContext(NoteContext)
    const { functionSubmit } = functions

    const handleSubmit = (e) => {
        e.preventDefault();
        functionSubmit()
    }
    const handleChange = (e) => {
        let maxChar = 49
        let value = e.target.value
        setInputNote(value.slice(0, maxChar))
        setLimitChar(value.length)
    }

    return (
        <>
            <form className='contact-input' onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name='title'
                    value={inputNote}
                    placeholder='masukan judul...'
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    limit={`${limitChar}/50`}
                    required
                />
                <Gap height="16px" />
                <Textarea
                    rows="4" cols="60"
                    type="text"
                    name='body'
                    value={inputArea}
                    onChange={(e) => setInputArea(e.target.value)}
                    style={{ width: '100%' }}
                    placeholder='Tuliskan catatanmu disini...'
                    required
                />
                <Gap height="20px" />
                <Button
                    txt="Tambah"
                    type='submit'
                    style={{ width: '100%' }}
                />
                <Gap height="20px" />
            </form>
        </>
    )
}
