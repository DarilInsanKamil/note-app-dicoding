import { useContext, useRef, useState } from "react"
import { Note, PinnedFill } from "../../../assets"
import { NoteContext } from "../../../context/NoteContext"
import { Input, Gap } from "../../atom"
import { Badge } from "../../moleculs"
import { CardNote, CardNoteArsip, LandingPage, NotesInput } from "../../organism"
import './index.css'
export const NotesApp = () => {
    const [collapse, setCollapse] = useState(true);
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(true);
    const [trigger, setTrigger] = useState(false)
    const { noteData, functions, inputSearch, setInputSearch } = useContext(NoteContext)
    const { functionDelete, functionArsip } = functions
    let element = useRef(null)
    const scrollToElement = () => element.current.scrollIntoView();
    const handleDelete = (e) => {
        let id = parseInt(e.target.value)
        functionDelete(id)
    }
    const handleArsip = (e) => {
        let id = parseInt(e.target.value)
        functionArsip(id)
        setTrigger(!trigger)
    }
    const searchNote = noteData.filter((a) => {
        return a.title.toLowerCase().includes(inputSearch.toLocaleLowerCase());
    });
    return (
        <main>
            <LandingPage Scroll={scrollToElement} />
            <section className="fragment" ref={element}>
                <Input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='search...' style={{ width: '100%' }} />
                <Gap height={"40px"} />
                <div className="container">
                    <section className="badge-container">
                        <Badge title={"Form"} img={Note} onClick={() => setCollapse(!collapse)} />
                        <Gap height={"12px"} />
                        {collapse ?
                            <NotesInput /> : <></>
                        }
                    </section>
                    <Gap width={"32px"} />
                    <section className="badge-container">
                        <Badge title={"Note"} img={Note} onClick={() => setCollapse1(!collapse1)} />
                        <Gap height={"12px"} />
                        {
                            collapse1 ?
                                <div className="scrollbar">
                                    <CardNote notes={searchNote} onDelete={handleDelete} onArsip={handleArsip} />
                                </div> : <></>
                        }
                    </section>
                    <Gap width={"32px"} />
                    <section className="badge-container">
                        <Badge title={"Arsip"} img={PinnedFill} onClick={() => setCollapse2(!collapse2)} />
                        <Gap height={"12px"} />
                        {
                            collapse2 ?
                                <div className="scrollbar">
                                    <CardNoteArsip notes={searchNote} onDelete={handleDelete} onArsip={handleArsip} />
                                </div> : <></>
                        }

                    </section>
                </div>
            </section>
        </main>
    )
}