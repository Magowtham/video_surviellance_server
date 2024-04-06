const { google } = require("googleapis");
const fs = require("fs");

const credentials = require("./credentials/video-serviellance-system-21ee13c06a04.json");

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({
  version: "v3",
  auth,
});

async function uploadFile(frame, fileName, mimeType) {
  const fileMetaData = {
    name: fileName,
  };

  const media = {
    mimeType: mimeType,
    body: fs.createReadStream("./test.txt"),
  };

  try {
    await drive.files.create({
      resource: fileMetaData,
      media,
      fields: "id",
    });
    console.log("file uploaded successfully");
  } catch (error) {
    console.log(error);
    console.log("Error uploading file..");
  }
}

uploadFile("", "test.txt", "text/plain");
