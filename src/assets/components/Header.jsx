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
        <>
            <view className='flex align-items-center justify-content-between mt-3' >
                <view className='flex align-items-center gap-6' style={{border:'1px solid black'}}>
                    <Button icon="pi pi-bars " rounded outlined arial-label='Filter'/>
                    <Logo />
                </view>
                <view style={{border:'1px solid black'}}>
                    <Button icon="pi pi-search " rounded outlined arial-label='Filter'/>
                    <Button icon="pi pi-cart-minus " rounded outlined arial-label='Filter'/>
                </view>
            </view>
            <IconField iconPosition='right' className='ml-3' hidden>
                <InputIcon className='pi pi-search mr-6'> </InputIcon>
                <InputText placeholder='Procurar produto' className='p-inputtext mt-2' style={{width: '85%'}}/>
            </IconField>

        </>
    );
}

export default Header;