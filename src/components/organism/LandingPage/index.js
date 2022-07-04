import { Ilustrasi } from "../../../assets"
import { Button } from "../../atom"
import './index.css'
export const LandingPage = ({Scroll}) => {
    return (
        <section className="landingpage-container">
            <img src={Ilustrasi} alt="img-ladingpage" className="landingpage-image" />
            <div className="landingpage-sub-container">
                <p className="landingpage-title">The simplest way to keep notes</p>
                <p className="landingpage-desc">Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
                <Button txt={"Write Note"} onClick={Scroll}/>
            </div>
        </section>
    )
}