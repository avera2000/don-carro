<?php
  error_reporting(0);
  $servername = "localhost";
  $username = "";
  $password = "";
  $dbname = "";
  $conn = new mysqli($servername, $username, $password, $dbname);
  mysqli_set_charset($conn,"utf8");
  if ($conn->connect_error) {
    die("Error en la conexión.");
  }
  $stmt = $conn->prepare("INSERT INTO rgs (nm, ap, tp) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $nombre, $apellido, $telefono);
  $nombre = $_POST['a'];
  $apellido = $_POST['b'];
  $telefono = $_POST['c'];
  $stmt->execute();
  $stmt->close();
  $conn->close();
?>