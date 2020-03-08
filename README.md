# vk-theme-controller

Модуль позволяет сообщать дочерним окнам информцию о текущей цветовой схеме для сайта vk.com. Дочернее окно должно уметь запрашивать и обрабатывать эту информацию. Для этого в том числе оно может использовать модуль [vk-theme](https://github.com/lightalex/vk-theme).

### Установка

```
npm i @lightalex/vk-theme-controller или yarn add @lightalex/vk-theme-controller
```

### Документация

`vkThemeController.subscribe()` - подписка на получение запросов о необходимости предоставления информации о текущей цветовой схеме.

`vkTheme.unscribe()` - удаление подписки.

`vkTheme.set('dark' | 'light')` - установка текущей цветовой схемы.

`vkTheme.init(() => { ... })` - установка функции обратного вызова, для события инициализации дочернего окна. Функция будет вызвана, когда контроллер получит сообщение с типом `init_extension_theme`. В модуле [vk-theme](https://github.com/lightalex/vk-theme) такое сообщение отправляется при вызове метода `subscribe`.

### Использование

```js
import vkThemeController from '@lightalex/vk-theme-controller';

vkThemeController.init(() => {
	console.log('Init event');
});
vkThemeController.set('dark');
vkThemeController.subscribe();
```
