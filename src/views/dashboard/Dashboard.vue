<script setup>
defineOptions({
  name: 'DashboardPage',
})
</script>

<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <h4>Charts</h4>
          </CCardBody>
          <CCardFooter>
            <h5>Chart Content</h5>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>