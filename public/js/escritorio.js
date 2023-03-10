// Referencias HTML
const lbEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const lblTicket = document.querySelector('small');
const divAlerta = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');

const searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has('escritorio') ) {
    
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');

};

const desktop = searchParams.get('escritorio');
lbEscritorio.innerText = 'Escritorio ' + desktop;

divAlerta.style.display = 'none';

const socket = io();

socket.on('connect', () => {

    btnAtender.disabled = false;

});

socket.on('disconnect', () => {

    btnAtender.disabled = true;

});

socket.on('tickets-pendientes', (newTickets) => {

    if ( newTickets === 0 ) {
        
        lblPendientes.style.display = 'none';
        
    } else {
        
        lblPendientes.style.display = '';
        lblPendientes.innerText = newTickets;

    };

});

btnAtender.addEventListener( 'click', () => {

    socket.emit( 'atender-ticket', { desktop }, ({ ok, ticket, msg }) => {

        if ( !ok ) {

            lblTicket.innerText = 'Nadie';
            return divAlerta.style.display = '';
            
        };

        lblTicket.innerText = 'Ticket: ' + ticket.number;

    });
    
    // socket.emit('next-ticket', null, ( ticket ) => {

    //     lblNuevoTicket.innerText = ticket;
        
    // });

});