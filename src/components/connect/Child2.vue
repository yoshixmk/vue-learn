<template>
    <section>
        <!-- slotのnameありは、親コンポーネントで指定 -->
        <slot name="header">
            <header>デフォルトヘッダーコンテンツ</header>
        </slot>
        <div class="content">
            <!-- slotのnameなしはデフォルトの子要素 -->
            <slot>デフォルトコンテンツ</slot>
        </div>
        <!-- slotのnameありは、親コンポーネントで指定 -->
        <slot name="footer">
            <footer>デフォルフッターコンテンツ</footer>
        </slot>
    </section>
</template>

<script>
export default {
    
}
</script>
