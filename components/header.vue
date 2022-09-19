<template>
  <i-navbar
    class="_margin-x:auto _border-bottom _border-color:light"
    style="background-color: white; max-width: 80rem; border: none; top: 0; position: sticky; z-index: 10; width: 100%"
  >
    <i-navbar-brand to="/">
      <a href="#">
        <span class="sr-only">Workflow</span>
        <img class="_width:auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" style="height: 40px" />
      </a>
    </i-navbar-brand>
    <i-navbar-collapsible class="_justify-content:flex-end">
      <i-nav class="">
        <i-nav-item style="background-color: white">
          <tez-link to="/" class="_color:dark-75">Home</tez-link>
        </i-nav-item>
        <i-nav-item style="background-color: white">
          <tez-link to="/inkline" class="_color:dark-75">Inkline </tez-link>
        </i-nav-item>
        <i-nav-item style="background-color: white">
          <a href="https://github.com/tezjs/tezjs" target="blank" class="_color:dark-40">TezJS</a>
        </i-nav-item>
      </i-nav>
    </i-navbar-collapsible>
  </i-navbar>
</template>
