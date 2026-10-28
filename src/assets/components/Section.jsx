import {Link} from "react-dom"

const Section = (title, titleAlign = 'left', link) => {
    return (
        <p style={{position:'relative', textAlign:{titleAlign}}}>
            {title}
        </p>
    );
}

export default Section;