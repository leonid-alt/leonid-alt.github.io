<?php


class OtherClass
{
    public static $my_static = "Hello World";
}
OtherClass::my_static = 'test';
echo $my_static;