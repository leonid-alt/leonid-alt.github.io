document.addEventListener('DOMContentLoaded', function() {
            const langButtons = document.querySelectorAll('.lang-btn');
            const contentBlocks = document.querySelectorAll('.content');
            
            // Функция переключения языка
            function switchLanguage(lang) {
                // Обновляем активную кнопку
                langButtons.forEach(btn => {
                    if (btn.dataset.lang === lang) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
                
                // Показываем соответствующий контент, скрываем остальные
                contentBlocks.forEach(block => {
                    if (block.classList.contains(lang)) {
                        block.classList.add('active');
                    } else {
                        block.classList.remove('active');
                    }
                });
                
                // Меняем язык документа
                document.documentElement.lang = lang;
                
                // Обновляем заголовок страницы
                if (lang === 'ru') {
                    document.title = 'Сайт временно недоступен';
                } else {
                    document.title = 'Site Temporarily Unavailable';
                }
            }
            
            // Обработчики событий для кнопок переключения языка
            langButtons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    // Останавливаем всплытие события
                    e.stopPropagation();
                    e.preventDefault();
                    
                    const lang = this.dataset.lang;
                    switchLanguage(lang);
                });
            });
            
            /*
            // Блокировка всех действий на странице, кроме кнопок переключения языка
            document.addEventListener('click', function(e) {
                // Разрешаем клики только по кнопкам переключения языка
                if (!e.target.classList.contains('lang-btn') && 
                    !e.target.closest('.language-switcher')) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }, true);

            // Блокировка клавиатуры
            document.addEventListener('keydown', function(e) {
                // Разрешаем только комбинации клавиш для разработчиков
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }, true);
            */
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            }, true);

            document.addEventListener('selectstart', function(e) {
                e.preventDefault();
            }, true);

            document.addEventListener('dragstart', function(e) {
                e.preventDefault();
            }, true);

            // Поддержка прокрутки для Firefox и Edge
            function enableScroll() {
                document.body.style.overflowY = 'auto';
                document.documentElement.style.overflowY = 'auto';
            }

            // Проверяем, нужно ли включить прокрутку
            function checkScrollNeeded() {
                const container = document.querySelector('.maintenance-container');
                const wrapper = document.querySelector('.maintenance-wrapper');
                
                if (container && wrapper) {
                    const containerHeight = container.offsetHeight;
                    const wrapperHeight = wrapper.offsetHeight;
                    const windowHeight = window.innerHeight;
                    
                    // Если контент не помещается в окно, включаем прокрутку
                    if (containerHeight > windowHeight - 40) {
                        enableScroll();
                    }
                }
            }

            // Проверяем при загрузке и изменении размера
            window.addEventListener('load', checkScrollNeeded);
            window.addEventListener('resize', checkScrollNeeded);
            
            // Дополнительная проверка после анимаций
            setTimeout(checkScrollNeeded, 1000);
        });

        // Дополнительная защита от обхода
        window.addEventListener('beforeunload', function(e) {
            e.preventDefault();
            e.returnValue = '';
        });

        // Адаптация для touch устройств
        document.addEventListener('touchmove', function(e) {
            // Разрешаем тач события только для кнопок переключения языка
            if (!e.target.classList.contains('lang-btn') && 
                !e.target.closest('.language-switcher')) {
                e.preventDefault();
            }
        }, { passive: false });

        // Поддержка прокрутки колесиком мыши
        document.addEventListener('wheel', function(e) {
            if (document.body.style.overflowY === 'auto') {
                return; // Позволяем прокрутку если она включена
            }
            e.preventDefault();
        }, { passive: true });