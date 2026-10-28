const Information = ({titulo, conteudo}) => {
    return (
        <div style={{marginTop:"40px"}}>
            <h3>{titulo}</h3>
            {
                conteudo.map((item) => (
                    <div className="flex flex-col gap-5">
                        <a style={{marginBottom:"16px"}}>{item.text}</a>
                    </div>
                ))
            }
        </div>
    );
}
export default Information;