import { forEach } from 'lodash';

/** CONFIGURACAO GTAG */
function getConfigAnalytics() {
  let str = '';
  forEach(
    ['G-C2CJL583KY'],
    (cod) => (str += `gtag("config", '${cod}');{send_page_view: false}`)
  );
  return str;
}

export function initializeGoogleAnalytics() {
  console.log('[INIT_GA]');
  let s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = `https://www.googletagmanager.com/gtag/js`;
  s.async = true;

  let st = document.createElement('script');
  st.type = 'text/javascript';
  st.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    ${getConfigAnalytics()}
    `;

  document.head.appendChild(s);
  document.head.appendChild(st);
}

export const eventClickContact = () => {
  window.gtag('event', 'page_view', {
    page_title: 'Clicou no botão do formulário',
    page_location: 'Enviou formulário de contato',
  })
}

export const eventClickWhatsApp = () => {
  window.gtag('event', 'page_view', {
    page_title: 'Clicou no botão do WhatsApp',
    page_location: 'Entrou no WhatsApp',
    
  })
}

