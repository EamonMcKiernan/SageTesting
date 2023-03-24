<span class="m-0 text-red-300 font-body !text-white hidden flex flex-col justify-start items-start justify-center items-center text-center p-8 bg-gray-600 gap-4 px-8 py-3 mt-6 text-xl lg:text-2xl text-lg lg:text-xl max-w-7xl mx-auto w-auto">Hi</span>

<main class="main-content w-full">
  <?php $__env->startSection('content'); ?>
    <?php while(have_posts()): ?> <?php (the_post()); ?>
      <!-- <?php echo $__env->make('partials.page-header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?> -->
      <?php echo $__env->first(['partials.content-page', 'partials.content'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endwhile; ?>
  <?php $__env->stopSection(); ?>
</main>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/wp-content/themes/your-theme-name/resources/views/page.blade.php ENDPATH**/ ?>