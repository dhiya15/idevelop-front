<template>

  <div>
    <v-app-bar dense app color="white" elevation="3" light>
      <v-toolbar-title>
        <img :src="'https://idevelop.club/Dashboard' + magasin.logo" height="32" alt="ID Logo" class="mt-1"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list class="d-flex align-center" style="background-color: transparent">
          <a style="text-decoration: none" :href="menu.id" v-for="(menu, index) in menus" :key="index">
            <v-list-item  link>
              <v-list-item-title>{{menu.title}}</v-list-item-title>
            </v-list-item>
          </a>
          <v-list-item  link to="/magazine">
            <v-list-item-title>Magazine</v-list-item-title>
          </v-list-item>
          <v-list-item  link to="/cv">
            <v-list-item-title>Our CV</v-list-item-title>
          </v-list-item>
          <v-list-item  link to="/contact">
            <v-list-item-title>Contact US</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
        </v-list>
      </v-toolbar-items>
      <div class="hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <a style="text-decoration: none" :href="menu.id" v-for="(menu, index) in menus" :key="index">
              <v-list-item  link>
                <v-list-item-title>{{menu.title}}</v-list-item-title>
              </v-list-item>
            </a>
            <v-list-item  link to="/magazine">
              <v-list-item-title>Magazine</v-list-item-title>
            </v-list-item>
            <v-list-item  link to="/cv">
              <v-list-item-title>Our CV</v-list-item-title>
            </v-list-item>
            <v-list-item  link to="/contact">
              <v-list-item-title>Contact US</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>

</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    props:{
      magasin: Object
    },
    data: () => ({
      menus: [
        {id: "/", title: "Home", route:"/"},
        /*{id: "/#events", title: "Events", route:"/#services"},
        {id: "/#products", title: "Products", route:"/#workshops"},
        {id: "/#team", title: "Team", route:"/#events"},
        {id: "/#faq", title: "FAQ", route:"/#faq"},*/
        /*{id: "/contact",title: "Contact", route:"/contact"},
        {id: "/join-us",title: "Join-US", route:"/join-us"}*/
      ]
    })
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>