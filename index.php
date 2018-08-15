<?php include('includes/header.php'); ?>

<?php
// Get accordion .json data
$url = 'https://design.propcom.co.uk/buildtest/accordion-data.json';

$content = @file_get_contents($url);
$data = json_decode($content);

if($content === false) {
  echo '<h3 class="center">Provided data url does not exist.</h3>';
}
?>

<?php if($data): ?>

  <section class="accordion">

    <?php foreach($data->blocks as $block): ?>

      <div class="accordion__item js-accordion-item">

        <div class="accordion__item__toggler js-accordion-toggler">

          <span class="accordion__item__toggler__title"><?= $block->heading ?></span>
          <div class="arrow arrow--right"></div>

        </div>

        <div class="accordion__item__value js-accordion-value">
          <p class="accordion__item__value__text"><?= $block->content; ?></p>
        </div>

      </div>

    <?php endforeach; ?>

  </section> <!-- ./accordion -->

<?php endif; ?>

<?php include('includes/footer.php'); ?>
