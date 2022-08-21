const BASE_URL = 'http://localhost:1234';
const booksUrl = BASE_URL + '/books';

const getHeaders = (method, bodyData) => {
    const body = bodyData ? { body: JSON.stringify(bodyData) } : {};

    return {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        ...body
    }
}

const fetchAllBooks = async () => {
    try {
        const response = await fetch(booksUrl, getHeaders('GET'));
        
        if(response.ok) {
            const parsedResponse = await response.json();
            return parsedResponse
        }
        
        throw new Error('Server error! Try again');
    } catch (error) {
        console.log(error);
        return error;
    }
}
const createBook = async (book) => {
    try {
        const response = await fetch(booksUrl, getHeaders('POST', book));
        
        if(response.ok) {
            const parsedResponse = await response.json();
            return parsedResponse
        }
        
        throw new Error('Server error! Try again');
    } catch (error) {
        console.log(error);
        return error;
    }
}
const updateBook = async (bookId, dataToUpdate) => {
    try {
        const response = await fetch(`${booksUrl}/${bookId}`, getHeaders('PATCH', dataToUpdate));
        
        if(response.ok) {
            const parsedResponse = await response.json();
            return parsedResponse
        }
        
        throw new Error('Server error! Try again');
    } catch (error) {
        console.log(error);
        return error;
    }
}
const deleteBook = async (bookId) => {
    try {
        const response = await fetch(`${booksUrl} ${bookId}`, getHeaders('DELETE'));
        
        if(response.ok) {
            const parsedResponse = await response.json();
            return parsedResponse
        }
        
        throw new Error('Server error! Try again');
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const booksApi = {
    fetchAllBooks,
    createBook,
    updateBook,
    deleteBook
}