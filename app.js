function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    } else {
        console.error(`Section with id '${sectionId}' not found.`);
    }
}


function openEmail() {
    const emailAddress = 'paulaknuth@yahoo.com';
    const subject = 'Regarding Your CV';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
}