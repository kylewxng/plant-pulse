
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
                <input class="articleInput" type="radio" name="articles" id="article${articleCount}" checked>
                <label for="article${articleCount}">
                    <h2 class="crop">Tobacco</h2>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: 75%;"></div> 
                    </div>
                </label>
                <div class="accordion-content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tabak_9290019.JPG/800px-Tabak_9290019.JPG" 
                         alt="Tobacco Image" class="accordion-image">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            `;

            // Append the article to the container
            document.getElementById("articles-container").appendChild(newArticle);

            // Increment article count
            articleCount++;
        });

