
// const dropArea = document.getElementById("drop-area");

//     // dropArea.addEventListener("dragover", (event) => {
//     //     event.preventDefault();
//     //     dropArea.classList.add("active");
//     // });

//     dropArea.addEventListener("dragleave", () => {
//         dropArea.classList.remove("active");
//     });

//     dropArea.addEventListener("drop", (event) => {
//         event.preventDefault();
//         dropArea.classList.remove("active");

//         const files = event.dataTransfer.files;
//         if (files.length > 0) {
//             alert(`File uploaded: ${files[0].name}`);
//             // You can now process the file (e.g., upload it via AJAX)
//         }
//     });

//     dropArea.addEventListener("click", () => {
//         const fileInput = document.createElement("input");
//         fileInput.type = "file";
//         fileInput.accept = "image/*";
//         fileInput.click();

//         fileInput.addEventListener("change", () => {
//             if (fileInput.files.length > 0) {
//                 alert(`File selected: ${fileInput.files[0].name}`);
//                 // You can now process the file (e.g., upload it via AJAX)
//             }
//         });
//     });

    //Add article elements to gallery page
    let articleCount = 1;
        document.getElementById("add-article").addEventListener("click", function () {
            // Create a new article element
            const newArticle = document.createElement("article");

            // Set the inner HTML for the article
            newArticle.innerHTML = `
                <input class="articleInput" type="radio" name="articles" checked>
                <label for="article${articleCount}">
                    <h2 class="crop">Tobacco</h2>
                </label>
                <div class="accordion-content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tabak_9290019.JPG/800px-Tabak_9290019.JPG" 
                         alt="Tobacco Image" class="accordion-image">
                    <p></p>
                </div>
            `;

            // Append the article to the container
            document.getElementById("articles-container").appendChild(newArticle);

            // Increment article count
            articleCount++;
        });

