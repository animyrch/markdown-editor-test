import CONSTANTS from '../utils/constants';

export default {
  uploadNewImage: () => {
    return new Promise((resolve, reject) => {
      const remoteUrl = 'https://images.unsplash.com/photo-1491987131443-9d8633fc8caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80';
      if (remoteUrl) {
          resolve(remoteUrl);
      } else {
          reject(new Error(CONSTANTS.CONTENT.UPLOAD_FAILURE));
      }
    });
  },
  uploadNewVideo: () => {
    return new Promise((resolve, reject) => {
      const remoteUrl = 'https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-large.mp4';
      if (remoteUrl) {
          resolve(remoteUrl);
      } else {
        reject(new Error(CONSTANTS.CONTENT.UPLOAD_FAILURE));
      }
    });
  },
  uploadNewFile: () => {
    return new Promise((resolve, reject) => {
      const remoteUrl = 'https://www.ameli.fr/sites/default/files/sample-pdf.pdf';
      if (remoteUrl) {
          resolve(remoteUrl);
      } else {
        reject(new Error(CONSTANTS.CONTENT.UPLOAD_FAILURE));
      }
    });
  }
}