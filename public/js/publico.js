// Referencias HTML
const lblTicket1 = document.querySelector('#lblTicket1');
const lblEscritorio1 = document.querySelector('#lblEscritorio1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblEscritorio2 = document.querySelector('#lblEscritorio2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblEscritorio3 = document.querySelector('#lblEscritorio3');
const lblTicket4 = document.querySelector('#lblTicket4');
const lblEscritorio4 = document.querySelector('#lblEscritorio4');

const socket = io();


socket.on('estado-actual', ( payload ) => {

    console.log('lala >>>', payload);
    // const [ ticket1, ticket2, ticket3, ticket4 ] = payload;

    // lblTicket1.innerText = 'Ticket ' + ticket1.numero;
    // lblEscritorio1.innerText = ticket1.desktop;

    // lblTicket2.innerText = 'Ticket ' + ticket2.numero;
    // lblEscritorio2.innerText = ticket2.desktop;

    // lblTicket3.innerText = 'Ticket ' + ticket3.numero;
    // lblEscritorio3.innerText = ticket3.desktop;

    // lblTicket4.innerText = 'Ticket ' + ticket4.numero;
    // lblEscritorio4.innerText = ticket4.desktop;

});