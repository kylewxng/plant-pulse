const dropArea = document.getElementById("drop-area");

    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.classList.add("active");
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("active");
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.classList.remove("active");

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            alert(`File uploaded: ${files[0].name}`);
            // You can now process the file (e.g., upload it via AJAX)
        }
    });

    dropArea.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.click();

        fileInput.addEventListener("change", () => {
            if (fileInput.files.length > 0) {
                alert(`File selected: ${fileInput.files[0].name}`);
                // You can now process the file (e.g., upload it via AJAX)
            }
        });
    });