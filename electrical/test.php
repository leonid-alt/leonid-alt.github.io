<?php
echo "Текущая директория: " . __DIR__ . "<br>";
echo "Папка img существует: " . (is_dir('img') ? 'Да' : 'Нет') . "<br>";
if (is_dir('img')) {
    $files = scandir('img');
    echo "Файлы в img:<br>";
    foreach($files as $file) {
        if($file != '.' && $file != '..') {
            echo "- $file<br>";
        }
    }
}
?>