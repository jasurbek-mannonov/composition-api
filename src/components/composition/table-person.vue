<template>
  <table
    v-if="personsST.listPersons.length > 0"
    width="100%"
    border="1"
    style="border-collapse: collapse; margin-top: 10px"
  >
    <thead>
      <tr>
        <th>t/r</th>
        <th>Ism</th>
        <th>Yosh</th>
        <th>Bo'lim</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) of personsST.listPersons" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.department }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { usePersonsStore } from "../../store/persons";

const personsST = usePersonsStore()



</script>

<style></style>
