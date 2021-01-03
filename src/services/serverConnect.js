export default {
  uploadNewImage: () => {
    return new Promise((resolve, reject) => {
      const remoteUrl = 'https://images.unsplash.com/photo-1491987131443-9d8633fc8caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80';
      if (remoteUrl) {
          resolve(remoteUrl);
      } else {
          reject(new Error('File upload error.'));
      }
    });
  }
}