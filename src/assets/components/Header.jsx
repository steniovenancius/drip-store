//icones
import 'primeicons/primeicons.css';
import miniCart from "../imgs/mini-cart.svg"

//Tema
import "primereact/resources/themes/lara-light-cyan/theme.css";

//Componentes
import Logo from "./Logo";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import "primeflex/primeflex.css"


const Header = ()  => {
    return (
        <div className='flex align-items-center justify-content-between flex-wrap'>
            <Button icon="pi pi-bars" rounded text aria-label="Filter" />
            <Logo />
            <div className='flex align-items-center justify-content-between flex-wrap'>
                <Button icon="pi pi-search" rounded text aria-label='Filter'/>
                <Button icon="pi pi-cart-minus" rounded text aria-label='Filter'/>
            </div>
            <IconField iconPosition='right' className='mx-3' hidden={false} >
                <InputIcon className='pi pi-search'> </InputIcon>
                <InputText placeholder='Pesquisar produto' disabled={true}></InputText>
            </IconField>
        </div>
    );
}

export default Header;

            