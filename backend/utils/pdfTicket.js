const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs').promises;

async function generatePDF(reservationId, tripId, from, to, date, name, surname, price) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    page.drawText(`Bus Ticket | Reservation n°${reservationId} | Trip ${tripId}`, {
        x: 50,
        y: 750,
        size: 24,
        color: rgb(0, 0, 0),
    });

    page.drawText(`From: ${from}`, {
        x: 50,
        y: 700,
        size: 16,
        color: rgb(0, 0, 0),
    });
    page.drawText(`To: ${to}`, {
        x: 50,
        y: 675,
        size: 16,
        color: rgb(0, 0, 0),
    });
    page.drawText(`Date: ${date}`, {
        x: 50,
        y: 650,
        size: 16,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Name: ${name} ${surname}`, {
        x: 50,
        y: 600,
        size: 16,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Price: ${price} €`, {
        x: 50,
        y: 575,
        size: 16,
        color: rgb(0, 0, 0),
    });

    const imageBytes = await fs.readFile('utils/barcode.png');
    const image = await pdfDoc.embedPng(imageBytes);
    page.drawImage(image, {
        x: 350,
        y: 550,
        width: 200,
        height: 100,
    });

    const pdfBytes = await pdfDoc.save();
    await fs.writeFile(`pdf/ticket_${reservationId}.pdf`, pdfBytes);
}

exports.generatePDF = generatePDF;