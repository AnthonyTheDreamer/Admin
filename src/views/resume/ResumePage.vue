<script setup>
import ProfileComponent from '@/components/resume/ProfileComponent'
import PortfolioComponent from '@/components/resume/PortfolioComponent'
import ExperienceComponent from '@/components/resume/ExperienceComponent'
import SkillsComponent from '@/components/resume/SkillsComponent'
import EducationComponent from '@/components/resume/EducationComponent'
import CertificationsComponent from '@/components/resume/CertificationsComponent'
import AwardsComponent from '@/components/resume/AwardsComponent'

defineOptions({
  name: 'ResumePage',
})
</script>

<template>
  <div>
    <ProfileComponent readOnly />
    <PortfolioComponent readOnly />
    <ExperienceComponent readOnly />
    <SkillsComponent readOnly />
    <EducationComponent readOnly />
    <CertificationsComponent readOnly />
    <AwardsComponent readOnly />
  </div>
</template>