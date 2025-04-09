<?php
session_start();

$_SESSION['times'] = $_SESSION['times'] + intval($_POST['value']);

echo $_SESSION['times'];

exit;
