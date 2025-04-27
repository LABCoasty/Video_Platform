import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
app.use(express.json());


 app.post('/process-video', (req, res) => {

    const inputFilePath = req.body.inputFilePath; 
    const outputFilePath = req.body.outputFilePath;

    if (!inputFilePath || !outputFilePath) {
        res.status(400).send('Bad Request: Missing file path.');
    }
    ffmpeg(inputFilePath)
        .outputOptions('-vf', 'scale=-1:360') // 360p
        .on('end', function() {
            console.log('Processing finished successfully.');
            res.status(200).send('Processing finished successfully.');
        })
        .on('error', function(err: any) {
            console.log("an error occurred: " + err.message);
            res.status(500).send("Internal Server Error: " + err.message);
        })
        .save(outputFilePath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Video processing service listening at http://localhost:${PORT}`);
  });
  