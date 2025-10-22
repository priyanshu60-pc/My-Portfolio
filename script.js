// Copy email to clipboard
document.getElementById('copyBtn').addEventListener('click', function() {
    navigator.clipboard.writeText('priyanshuchakraborty60@gmail.com')
        .then(() => alert('Email copied to clipboard'))
        .catch(() => alert('Could not copy — please copy manually'));
});

// Project filtering
const projects = Array.from(document.querySelectorAll('#projects .project'));
const filterInput = document.getElementById('projectFilter');

filterInput.addEventListener('input', function(e) {
    const q = e.target.value.trim().toLowerCase();
    projects.forEach(p => {
        const tech = p.getAttribute('data-tech') || '';
        const txt = p.textContent.toLowerCase();
        p.style.display = (!q || tech.includes(q) || txt.includes(q)) ? '' : 'none';
    });
});

function resetFilter() {
    filterInput.value = '';
    filterInput.dispatchEvent(new Event('input'));
}

// Resume download placeholder
document.querySelector('.download').addEventListener('click', function(e) {
    // replace YOUR_FILE_ID with actual Google Drive file ID
    const pdfLink = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";
    window.open(pdfLink, '_blank');
});

// Reduce motion for accessibility
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-up').forEach(el => el.style.animation = 'none');
}
