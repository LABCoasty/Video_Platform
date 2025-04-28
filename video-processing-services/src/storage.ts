// 1. GCS GOOGLE CLOUD STORAGE

import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const storage = new Storage();

const rawVideoBucketName = 'platform-raw-video'; // user upload vids here 
const processedVideoBucketName = 'platform-processed-video'; // processed vids here

const localRawVideoPath = './raw-video';
const localProcessedVideoPath = './processed-video';


// Create the local directories 
export function setupDirectories() {
    const directories = []
    }
    /**
     * @param rawVideoName - The name of the file to convert from {@link localRawVideoPath}
     * @param processedVideoName - The name of the file to convert to {@link localProcessedVideoPath}
     * @returns A promise that resolves when the video has been converted.
     */

    export function convertVideo(rawVideoName: string, processedVideoName: string) {
        ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
    }