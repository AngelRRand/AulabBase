async function getAnnouncements() {
    try {
        const response = await fetch('../annunci.json');
        const announcements = await response.json();
        return announcements;
    } catch (error) {
        console.log(error, 'a')
    }
}

console.log(await getAnnouncements())