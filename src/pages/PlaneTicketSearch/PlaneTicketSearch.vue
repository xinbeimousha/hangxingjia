<template>
    <div class="plane-ticket-search">

    </div>   
</template>

<script>
import { getBudgetSpaceType } from 'api/planeBook.js'
export default {
    created(){
        getBudgetSpaceType();
    }
}
</script>

