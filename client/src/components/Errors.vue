<template>
    <div class="alert alert-danger" style="text-align: center"> {{ msg }} </div>
</template>

<script>
export default {
    props: ["msg"]

}
</script>

<style scoped>
.alert {
    border-radius: 0px;
}

.alert-danger {
    background-color: red;
    color: #fff;
}
</style>