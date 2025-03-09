document.addEventListener('DOMContentLoaded', function () {
    // Assuming the data for the articles is an array of objects
    const cropsData = [
        { title: "Tobacco", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tabak_9290019.JPG/800px-Tabak_9290019.JPG", altText: "Tobacco Image" },
        { title: "Wheat", imageUrl: "https://cdn.shopify.com/s/files/1/0562/3883/3827/files/Wheat-ripening-17-july-688.jpg?v=1654788796", altText: "Wheat Image" },
        { title: "Corn", imageUrl: "https://i1.wp.com/journeywithjill.net/wp-content/uploads/2019/07/corn-silk.jpg?fit=1024%2C1024&ssl=1", altText: "Corn Image" },
        { title: "Potatoes", imageUrl: "https://gardenary-data.s3.amazonaws.com/section-image/U2nfRQHKTY950jpwjPdwN3NVjhImEo9cqHRIRiaS.jpeg", altText: "Potatoes Image" }
    ];

    // Get the container where the articles will be added
    const accordionContainer = document.getElementById('accordion-container');

    // Loop through the cropsData and create HTML dynamically
    cropsData.forEach((crop, index) => {
        // Create article element
        const article = document.createElement('article');

        // Create input radio for each article
        const input = document.createElement('input');
        input.id = `article${index + 1}`;
        input.type = 'radio';
        input.name = 'articles';
        if (index === 0) input.checked = true; // Make the first article checked by default

        // Create label for the article title
        const label = document.createElement('label');
        label.setAttribute('for', `article${index + 1}`);
        
        const h2 = document.createElement('h2');
        h2.classList.add('crop');
        h2.textContent = crop.title;
        label.appendChild(h2);

        // Create accordion content
        const accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion-content');

        const img = document.createElement('img');
        img.src = crop.imageUrl;
        img.alt = crop.altText;
        img.classList.add('accordion-image');

        // Add content to the accordion (here it's left empty, you can add text if needed)
        const p = document.createElement('p');

        // Append image and text to the content
        accordionContent.appendChild(img);
        accordionContent.appendChild(p);

        // Append input, label, and content to the article
        article.appendChild(input);
        article.appendChild(label);
        article.appendChild(accordionContent);

        // Append the article to the container
        accordionContainer.appendChild(article);
    });
});
