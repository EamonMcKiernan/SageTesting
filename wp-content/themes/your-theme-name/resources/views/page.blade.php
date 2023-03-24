@extends('layouts.app')

<span class="m-0 text-red-300 font-body !text-white hidden flex flex-col justify-start items-start justify-center items-center text-center p-8 bg-gray-600 gap-4 px-8 py-3 mt-6 text-xl lg:text-2xl text-lg lg:text-xl max-w-7xl mx-auto w-auto">Hi</span>

<main class="main-content w-full">
  @section('content')
    @while(have_posts()) @php(the_post())
      <!-- @include('partials.page-header') -->
      @includeFirst(['partials.content-page', 'partials.content'])
    @endwhile
  @endsection
</main>
