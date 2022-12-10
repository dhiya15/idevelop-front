<template>
    <section class="cta">
        <h1>If you have any suggestion or question<br>feel free to contact us</h1>
        <a href="#" class="hero-btn" @click="$router.push({path: '/contact'})">Contact US</a>
    </section>
</template>

<script>
    export default {
        name: "CallToAction"
    }
</script>

<style scoped>
    .cta {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 45px;
        width: 80%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/banner.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        text-align: center;
        padding: 120px 0;
    }
    .cta h1 {
        color: #fff;
        margin-bottom: 40px;
        padding: 0;
    }
    @media(max-width: 700px) {
        .cta h1 {
            font-size: 24px;
        }
    }
    .hero-btn {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        border: 1px solid #fff;
        padding: 12px 34px;
        font-size: 13px;
        background: transparent;
        position: relative;
        cursor: pointer;
    }
    .hero-btn:hover {
        border: 1px solid #1D8BE1;
        background: #1D8BE1;
        transition: 1s;
    }
</style>