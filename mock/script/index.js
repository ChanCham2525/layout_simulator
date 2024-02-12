addEventListener("DOMContentLoaded", () => {
  const comp = document.getElementById("comp");

  comp.addEventListener("change", (e) => {
    const files = e.target.files;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file.type.startsWith("image/")) {
        continue;
      }

      const img = document.createElement("img");
      img.file = file;
      document.getElementById("test").appendChild(img);

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        img.src = e.target.result;
      });
      reader.readAsDataURL(file);
    }
  });
});
