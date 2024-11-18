function toggleDivision(id) {
    const divisionContent = document.getElementById(id);
    const header = divisionContent.previousElementSibling;
    const chevron = header.querySelector('.fa-chevron-down');
    

    document.querySelectorAll('.division-content').forEach(content => {
        if (content.id !== id && content.classList.contains('active')) {
            content.classList.remove('active');
            content.previousElementSibling.classList.remove('active');
        }
    });
    
    divisionContent.classList.toggle('active');
    header.classList.toggle('active');
} 