<?php
// Begin the PHP session so we have a place to store the username
session_start();

// If there is a username, they are logged in, and we'll show the logged-in view
if(isset($_SESSION['username'])) {
  echo '<p>Logged in as</p>';
  echo '<p>' . $_SESSION['username'] . '</p>';
  echo '<p><a href="/?logout">Log Out</a></p>';
  die();
}

// If there is no username, they are logged out, so show them the login link
if(!isset($_SESSION['username'])) {
  $authorize_url = 'TODO';
  echo '<p>Not logged in</p>';
  echo '<p><a href="'.$authorize_url.'">Log In</a></p>';
}
?>