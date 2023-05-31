const createWidget = (component) => {
  return cloudinary.createUploadWidget(
    {
      cloudName: "de7iwknkm",
      uploadPreset: "mdpjxfv2",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        component.ArrayImage.push(result.info);
        // Filtrer les fichiers pour ne conserver que les images
        component.ArrayImage = component.ArrayImage.filter((file) => {
          return file.resource_type === "image";
        });
        document.getElementById("numberFiles").innerHTML = `&emsp;${component.ArrayImage.length} fichiers sélectionnés`;
        console.log("arrayImage:", component.ArrayImage);
      }
    }
  );
};

export default createWidget;
