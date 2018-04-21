<template>
<div class="flx1">

    <div class="baron__scroller">
        <NewsItem v-for="item in items" :key="item.id" :title="item.title" :date="new Date(item.createdAt)" :link="item.link" />
        <div class="load-more" v-if="!isLoadAll">
            <button class="fll" @click="LoadNews()">{{$t('LoadMore')}}</button>
        </div>
        <div class="load-more-none" v-else>
            <span>Больше новостей нет</span>
        </div>
    </div>
</div>
</template>

<script>
import NewsItem from "./Item";
export default {
    components: {
        NewsItem
    },
    data() {
        return {
            items: [],
            page: 1,
            isLoadAll: false
        };
    },
    methods: {
        LoadNews() {
           return this.$rest
                .api("getNewsBasic", {
                    limit: 10,
                    page: this.page,
                    lang: this.$route.params.lang
                })
                .then(res => {
                    if (res.success) {
                        if (res.data.news.length > 0) {
                            this.items = this.items.concat(res.data.news);
                            this.page++;
                        } else {
                            this.isLoadAll = true
                        }
                    }
                    return true
                });
        }
    },
    created() {
        return this.LoadNews();
    }
};
</script>

<style lang="less">
.load-more {
    margin: 10px;
    button {
        margin: 0 10px;
        border: 2px solid #ffb100;
        background-color: white;
        border-radius: 50px;
        font-size: 12px;
        padding: 5px 5px 5px 5px;
        width: 63%;
        margin: 0 auto;
        position: relative;
        display: block;
        float: none;
    }
}

.load-more-none {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}
</style>
