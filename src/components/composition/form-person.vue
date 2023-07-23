<template>
  <form @submit.prevent="newPerson()">
    <input type="text" v-model="person.name" placeholder="Ism" />
    <input type="number" v-model="person.age" placeholder="Yosh" />
    <select v-model="person.department">
      <option value="Dasturchilar bo'limi">Dasturchilar bo'limi</option>
      <option value="Dizaynerlar bo'limi">Dizaynerlar bo'limi</option>
    </select>
    <button @click="newPerson()" type="button">Saqlash</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { usePersonsStore } from "../../store/persons";

const personsStore = usePersonsStore()

const person = ref({});

const newPerson = () => {
    personsStore.addNewPerson(person.value)
    person.value = {}
}
</script>

<style scoped></style>
