export function nameToRoute(particularString) {
    return '/' + particularString.toLowerCase().replace(/\s+/g, '-');
}

export function routeBckToString(route) {
    return route.slice(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
}