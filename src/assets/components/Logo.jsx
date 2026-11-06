import logoHeader from "../imgs/logo-header.svg"

const Logo = ({largura, altura}) => {
    return (
        <>
            <img 
                src={logoHeader}
                alt="Logo da Digital Store"
                width={largura}
                height={altura}
            />
        </>

    )
}

export default Logo;