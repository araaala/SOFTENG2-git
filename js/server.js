const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/send-itinerary', (req, res) => {
    const { email, startDate, endDate, activities, cities } = req.body;

    // Generate PDF
    const doc = new PDFDocument();
    const pdfPath = 'itinerary.pdf';
    doc.pipe(fs.createWriteStream(pdfPath));
    doc.fontSize(25).text('Your Itinerary Details', { align: 'center' });
    doc.moveDown();
    doc.fontSize(18).text(`Start Date: ${startDate}`);
    doc.text(`End Date: ${endDate}`);
    doc.moveDown();
    doc.fontSize(20).text('Activities:', { underline: true });
    activities.forEach(activity => {
        doc.fontSize(16).text(activity);
    });
    doc.moveDown();
    doc.fontSize(20).text('Cities:', { underline: true });
    cities.forEach(city => {
        doc.fontSize(16).text(city);
    });
    doc.end();

    doc.on('finish', () => {
        // Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password',
            },
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Your Itinerary',
            text: 'Please find attached your itinerary.',
            attachments: [
                {
                    filename: 'itinerary.pdf',
                    path: pdfPath,
                },
            ],
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ success: false, error: error.toString() });
            }
            fs.unlinkSync(pdfPath); // Remove the file after sending
            res.json({ success: true });
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
