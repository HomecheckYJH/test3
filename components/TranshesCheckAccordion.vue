<template>
    <Accordion style="width: calc(85% - 60px );
                        margin: 0px 6px 0px 6px;" type="primary" v-for="(item, i) in [1, 2, 3, 4]" :key="i"
        :opened="false">

        <template #preview>
            <span class="accordion-date">2021.12.2</span>
        </template>

        <template #inner>
            <div>
                <div v-wave v-for="(item, i) in [1, 2, 3, 4]" :key="i" class="accordion-inner common-contents-gap-6">
                    <div class="tag">
                        <span>매니저</span>
                        <span>유류비포함</span>
                        <span>베테랑</span>
                    </div>
                    <div class="common-space-between common-contents-gap-6">
                        <div>
                            <span class="accordion-title">
                                가산동 푸르지오 아파트
                            </span>
                            <span class="accordion-comment">
                                10:00~12:00
                            </span>
                        </div>
                        <div class="align-self-center">
                            <img class="icon-more white" />
                        </div>
                    </div>
                </div>
            </div>
        </template>




        <template #thumnail_footer>
            <div class="common-contents-gap-16">
                <span class="accordion-title">
                    가산동 푸르지오 아파트
                </span>
                <span class="accordion-comment">
                    외 4건
                </span>
            </div>
        </template>

    </Accordion>
</template>

<script>
import Accordion from './Accordion.vue'

import VWave from 'v-wave'
const { wave } = VWave.createLocalWaveDirective({})


export default {
    directives: {
        wave,
    },
    name: 'TranshesCheckAccordion',
    components: {
        Accordion
    }
}
</script>