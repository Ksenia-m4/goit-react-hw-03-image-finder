# Поиск изображений

Напиши приложение поиска изображений по ключевому слову. Превью рабочего
приложения
[смотри по ссылке](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Создай компоненты `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` и `<Modal>`. Готовые стили компонентов можно взять в
файле [styles.css](./styles.css) и подправить под себя, если необходимо.

## Инструкция Pixabay API

Для HTTP-запросов используй публичный сервис поиска изображений
[Pixabay](https://pixabay.com/api/docs/). Зарегистрируйся и получи приватный
ключ доступа.

URL-строка HTTP-запроса.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API поддерживает пагинацию, по умолчанию параметр `page` равен `1`.
Пусть в ответе приходит по 12 объектов, установлено в параметре `per_page`. Не
забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение
`page` в `1`.

В ответе от апи приходит массив объектов, в которых тебе интересны только
следущие свойства.

- `id` - уникальный идентификатор
- `webformatURL` - ссылка на маленькое изображение для списка карточек
- `largeImageURL` - ссылка на большое изображение для модального окна

## Описание компонента `<Searchbar>`

Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута
при сабмите формы. Создает DOM-элемент следующей структуры.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Описание компонента `<ImageGallery>`

Список карточек изображений. Создает DOM-элемент следующей структуры.

```html
<ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul>
```

## Описание компонента `<ImageGalleryItem>`

Компонент элемента списка с изображением. Создает DOM-элемент следующей
структуры.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Описание компонента `<Button>`

При нажатии на кнопку `Load more` должна догружаться следующая порция
изображений и рендериться вместе с предыдущими. Кнопка должна рендерится только
тогда, когда есть какие-то загруженные изобаржения. Если массив изображений
пуст, кнопка не рендерится.

## Описание компонента `<Loader>`

Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой
готовый компонент, например
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) или любой
другой.

## Описание компонента `<Modal>`

При клике по элементу галереи должно открываться модальное окно с темным
оверлеем и отображаться большая версия изображения. Модальное окно должно
закрываться по нажатию клавиши `ESC` или по клику на оверлее.

Внешний вид похож на функционал этого
[VanillaJS-плагина](https://basiclightbox.electerious.com/), только вместо
белого модального окна рендерится изображение (в примере нажми `Run`). Анимацию
делать не нужно!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
