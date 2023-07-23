<template>
 <form @submit.prevent="addPerson()">
    <input type="text" v-model="person.name" placeholder="Ism">
    <input type="number" v-model="person.age" placeholder="Yosh">
    <select v-model="person.department">
        <option value="Dasturchilar bo'limi">Dasturchilar bo'limi</option>
        <option value="Dizaynerlar bo'limi">Dizaynerlar bo'limi</option>
    </select>
    <button @click="addPerson()" type="button">Saqlash</button>
 </form>
</template>

<script>
    export default{
        data: () => ({
            person: {}
        }),
        methods: {
            addPerson(){
                this.$emit('newPerson', this.person)
                this.person = {}
            }
        }
    }
</script>

<style scoped>

</style>