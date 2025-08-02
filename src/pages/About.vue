<script setup>
const variants = ["elevated"];
</script>

<template>
  <main class="container">
    <v-row dense class="pa-4">
      <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="4">
        <v-card :variant="variant" class="mx-auto p-2 " color="surface-variant" max-width="400"
          subtitle="Greyhound divisely hello coldly fonwderfully" title="Headline">
          <template v-slot:actions>
            <v-btn variant="outlined" rounded="sm" color="white"> Button </v-btn>
          </template>
        </v-card>
      </v-col>
      <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="4">
        <v-card :variant="variant" class="mx-auto p-2" color="surface-variant" max-width="400"
          subtitle="Greyhound divisely hello coldly fonwderfully" title="Headline">
          <template v-slot:actions>
            <v-btn variant="outlined" rounded="sm" color="white"> Button </v-btn>
          </template>
        </v-card>
      </v-col>
      <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="4">
        <v-card :variant="variant" class="mx-auto p-2" color="surface-variant" max-width="400"
          subtitle="Greyhound divisely hello coldly fonwderfully" title="Headline">
          <template v-slot:actions>
            <v-btn variant="outlined" rounded="sm" color="white"> Button </v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
    <v-expansion-panels>
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
          consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
          consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </main>
</template>