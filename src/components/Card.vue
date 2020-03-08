<template>
    <div>
        <div class="card shadow-sm">
            <div class="card-body">
                <i class="fa fa-user-circle fa-3x mb-3 text-danger"></i>
                <h5> {{ title }} </h5>
                <p> {{ content }} </p>
            </div>
            <div class = "card-footer">
                <a class = "btn btn-block btn-danger" :href = "url" target = "_blank">Acessar</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Card',
    props: { 
        title : String,
        content: String,
        url: String
    }
}
</script>

<style>

.card{
    border-radius: 20px;
    overflow: hidden;
    border: none;
    min-height: 250px;
}
.card-footer, .card-header { 
    border: none;
    background-color: transparent;
}
.card .btn { border-radius: 40px;}
</style>