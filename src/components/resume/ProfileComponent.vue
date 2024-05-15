<script setup>
import ResumeCard from "@/components/common/ResumeCard.vue";
import NavigateButton from '@/components/common/NavigateButton.vue';
import { defaultImage as profilePicture } from "@/utils/defaultData"

defineOptions({
    name: 'ProfileComponent',
})

const { readOnly } = defineProps({
    readOnly: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <ResumeCard>
        <template #preTitle>
            <div class="d-flex justify-content-end">
                <template v-if="readOnly">
                    <NavigateButton pathName="Profile" />
                </template>
                <template v-else>
                    <CButton color="secondary" variant="ghost" @click="console.log('edit profile')">
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    </CButton>
                </template>
            </div>
        </template>
        <template #titleName>
            {{ $t('resume.profile.title') }}
        </template>
        <template #default>
            <CRow>
                <CCol xl='4'>
                    <CImage rounded fluid :src=profilePicture class="mx-auto d-block" />
                </CCol>
                <CCol xl="8">
                    <div class="mt-5 mt-xl-0 text-center text-xl-start">
                        <h3>Engineer</h3>

                        <i class="m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur ad
                            totam
                            fugit
                            commodi explicabo vel quod officiis dolores laborum nostrum incidunt voluptatibus a saepe
                            corrupti,
                            at
                            tempora doloremque voluptas.</i>
                    </div>

                    <div class="mt-3">


                        <!-- <ul class="">
                            <li><b>Name:</b> unaffected by this style</li>
                            <li><b>Email:</b> will still show a bullet</li>
                            <li><b>Birthday:</b> and have appropriate left margin</li>
                            <li><b>City:</b> and have appropriate left margin</li>
                        </ul> -->
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td>Anthony</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email:</th>
                                    <td>anthony@mail.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Birthday:</th>
                                    <td>01/01/1996</td>
                                </tr>
                                <tr>
                                    <th scope="row">City:</th>
                                    <td>Hanoi, Vietnam</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CCol>
            </CRow>
        </template>
    </ResumeCard>
</template>
