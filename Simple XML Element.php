<?php
<person>
<child role = "son">
    <child role = "daughter"/>
    </child>
<child role = "daughter">
    <child role = "son">
    <child role = "son"/>
    </child>
</child>
</person>

echo $xml->child[1]->$attributes();

<product id='3'>Товар</product>