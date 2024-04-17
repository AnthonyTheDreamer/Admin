<script setup>
import avatar from '@/assets/images/avatar.png'

defineOptions({
  name: 'AppHeaderDropdownAccnt',
})
</script>

<template>
  <CDropdown placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
      <CAvatar :src="avatar" color="light" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-body-secondary text-body-secondary fw-semibold mb-2 rounded-top">
        {{ $t('settings.title') }}
      </CDropdownHeader>
      <CDropdownItem>
        <FontAwesomeIcon icon="fa-solid fa-user" fixed-width /> {{ $t('resume.profile.title') }}
      </CDropdownItem>
      <CDropdownItem>
        <FontAwesomeIcon icon="fa-solid fa-gear" fixed-width /> {{ $t('settings.title') }}
      </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem>
        <FontAwesomeIcon icon="fa-solid fa-lock" fixed-width /> {{ $t('common.logout') }}
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>