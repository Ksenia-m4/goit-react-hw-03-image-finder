// Для HTTP-запросов используй публичный сервис поиска изображений Pixabay. Зарегистрируйся и получи приватный ключ доступа.

// URL-строка HTTP-запроса.
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// Pixabay API поддерживает пагинацию, по умолчанию параметр page равен 1. Пусть в ответе приходит по 12 объектов, установлено в параметре per_page. Не забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение page в 1.

// В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "45653966-87357a1b7b4dbce7fb63449bc";

function getImages(searchQuery) {
  return fetch(`${BASE_URL}/?q=${searchQuery}&key=${API_KEY}`);
}

export default getImages;
