<script setup>
defineOptions({
  name: 'LoginPage',
})
</script>

<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1 class="text-center text-uppercase mb-4">{{ $t('common.login') }}</h1>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <FontAwesomeIcon icon="fa-solid fa-user" />
                    </CInputGroupText>
                    <CFormInput :placeholder="$t('login.username')" autocomplete="username" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <FontAwesomeIcon icon="fa-solid fa-lock" />
                    </CInputGroupText>
                    <CFormInput type="password" :placeholder="$t('login.password')" autocomplete="current-password" />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="12" class="d-grid gap-2">
                      <CButton color="primary"> {{ $t('common.login') }} </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
