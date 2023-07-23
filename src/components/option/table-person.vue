<template>
    <table 
    v-if="persons.length > 0"
    width="100%" 
    border="1" 
    style="border-collapse: collapse; margin-top: 10px;">
        <thead>
            <tr>
                <th>t/r</th>
                <th>Ism</th>
                <th>Yosh</th>
                <th>Bo'lim</th>
            </tr>
        </thead>
        <tbody>
            <tr 
            v-for="person, index of persons" 
            :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.department }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
   export default{
    props: ['persons']
   } 
</script>

<style>

</style>