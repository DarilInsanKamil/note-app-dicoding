import { Gap } from "../../atom"
import { Card } from "../../moleculs"
export const CardNoteArsip = ({ notes, onDelete, onArsip }) => {
    return (
        <>
            {
                notes.filter(x => x.archived === false).length > 0 ?
                    notes.filter(x => x.archived === false).map((val, i) => (
                        <>
                            <Card title={val.title} body={val.body} create={val.createdAt} key={i} txt={val.archived === true ? 'Arsipkan':'Pindahkan'} value={val.id} onArsip={onArsip} onDelete={onDelete} />
                            <Gap height={"12px"} />
                        </>
                    ))
                    : <p style={{ textAlign: 'center', color: '#525252', margin: '0px 0px 10px 0px' }}>Tidak ada Catatan</p>
            }
        </>
    )
}