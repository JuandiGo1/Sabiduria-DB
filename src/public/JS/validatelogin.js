function isLogedIn() {
    const cookie = document.cookie
    if (!cookie) {
        window.location.href = '/'
    }
}

function logout() {
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    window.location.href = '/'
}

// isLogedIn()
