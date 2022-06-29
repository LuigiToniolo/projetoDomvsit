import React from 'react';
import { ReactComponent as Globo } from '../../assets/images/domvs_globe.svg';
import { ReactComponent as Colaboradores } from '../../assets/images/icon-colaboradores.svg';
import { ReactComponent as Locais } from '../../assets/images/icon-locais.svg';
import { ReactComponent as Mercados } from '../../assets/images/icon-mercados.svg';

export const Icon = (props) => {
    switch (props.iconName) {
        case 'globo':
            return <Globo {...props} />
        case 'colaboradores':
            return <Colaboradores {...props} />
        case 'locais':
            return <Locais {...props} />
        case 'mercados':
            return <Mercados {...props} />
        default:
            break;
    }
}