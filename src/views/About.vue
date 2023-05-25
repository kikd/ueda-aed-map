<script setup lang="ts"></script>

<template>
    <container>
        <h1>
            このサイトについて
        </h1>
        <p>
            本サイトは、上田市のAEDの設置場所をマップ上に表示することを目的として作成しました。
        </p>
        <p>
            本サイトで利用しているデータは、以下の著作物を改変して利用しています。
        </p>
        <p>
            出典：AED設置箇所（<a href="https://www.city.ueda.nagano.jp/soshiki/tokei/3784.html#c" target="_blank">上田市オープンデータサイト</a>、2023/5/23）
        </p>
        <p>
            ©上田市、クリエイティブ・コモンズ・ライセンス表示 4.0 国際
        </p>
        <p>
            (<a href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank">https://creativecommons.org/licenses/by/4.0/deed.ja</a>)
        </p>
    </container>
</template>

<style scoped>
h1 {
    border-left: 16px double #000;
    background: #d6d0d0;
    padding: 1rem 2rem;
}

a {
    text-decoration: underline;
}

p {
    font-weight: 500;
    margin: 0.5rem 1rem;
    text-align: left;
}
</style>

