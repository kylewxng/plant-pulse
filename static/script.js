document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const isExpanded = content.style.maxHeight;

            // Collapse all sections before opening the clicked one
            document.querySelectorAll(".content").forEach(section => {
                section.style.maxHeight = null;
            });

            // Update button text
            document.querySelectorAll(".toggle-btn").forEach(btn => {
                btn.textContent = btn.textContent.replace("▲", "▼");
            });

            if (!isExpanded || isExpanded === "0px") {
                content.style.maxHeight = content.scrollHeight + "px";
                button.textContent = button.textContent.replace("▼", "▲");
            }
        });
    });
});
