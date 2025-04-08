import {useAuthStore} from "@/stores/authStore.js";

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

function authHeader(url) {
    const {user} = useAuthStore();
    const isLoggedIn = !!user?.accessToken;
    // const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL); //дополнительно проверять
    if (isLoggedIn){
        return {Authorization: `Bearer ${user.accessToken}`};
    } else {
        return {}
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        // Если ответ успешный, пытаемся разобрать как JSON
        if (response.ok) {
            return text ? JSON.parse(text) : {}; // Если текст пустой, возвращаем пустой объект
        } else {
            // Если ответ не успешный, возвращаем текст ошибки
            const error = text || response.statusText; // Используем текст ответа или статус
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                logout();
            }
            return Promise.reject(error); // Возвращаем ошибку
        }
    });
}