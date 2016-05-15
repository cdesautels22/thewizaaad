<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$this->load->helper('url');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Citdels</title>
  <script src="<?php echo base_url();?>js/lib/react.js"></script>
  <script src="<?php echo base_url();?>js/lib/react-dom.js"></script>
  <script src="<?php echo base_url();?>js/lib/redux.js"></script>
  <script src="<?php echo base_url();?>js/lib/react-redux.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
</head>
<body>

  <div id="root"></div>
  <script type="text/babel" src="<?php echo base_url();?>js/index.js"></script>

</body>
</html>
