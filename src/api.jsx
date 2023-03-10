export const apiURL = 'https://dogsapi.origamid.dev/json'
export const apiURLdg= 'http://localhost:8000'

export function TOKEN_POST (body) {
    return {
        url: `${apiURLdg}/jwt-auth/v1/token`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

    }

}
export function TOKEN_VALIDATE_POST (token) {
    return {
        url: `${apiURLdg}/jwt-auth/v1/token/validate`,
        options: {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
        },

    }

}

export function USER_GET (token) {
    return {
        url: `${apiURLdg}/api/user`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
                
            }
            
        }

    }
}

 
export function USER_POST (body) {
    return {
        url: `${apiURLdg}/api/user`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(body)
            
        },

    }
}

export function PHOTO_POST (formData, token) {
    return {
        url: `${apiURLdg}/api/photo`,
        options: {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                
            },
            body: formData
            
        },

    }
}

export function PHOTOS_GET ({page, total, user}) {
    return {
        url: `${apiURLdg}/api/photo/?_page=${page}&_total=${total}&_user=${user} `,
        options: {
            method: 'GET',
            cache: 'no-store'      

    },
}
}

export function PHOTO_GET (id) {
    return {
        url: `${apiURLdg}/api/photo/${id} `,
        options: {
            method: 'GET',
            cache: 'no-store'      

    },
}
}

export function COMMENT_POST (id, body) {
    return {
        url: `${apiURL}/api/comment/${id} `,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        
            },
            body: JSON.stringify(body)
        },
}
}

export function PHOTO_DELETE(id) {
    return {
        url: `${apiURL}/api/photo/${id} `,
        options: {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        
            },
        },
}
}


export function PASSWORD_LOST(body) {
    return {
        url: `${apiURL}/api/password/lost `,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)
        },
}
}

export function PASSWORD_RESET(body) {
    return {
        url: `${apiURL}/api/password/reset `,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)
        },
}
}

export function STATS_GET() {
    return {
        url: `${apiURL}/api/stats`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,

            },
        },
}
}
