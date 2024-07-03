export function formatDate(dateString) {
    const options = { month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return `Joined ${date.toLocaleDateString('en-US', options)}`;
}